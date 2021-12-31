import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateProductDto, UpdateProductDto } from "./dto";

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel("products")
    private readonly productsModel: Model<IProduct>,
  ) {}

  async getProducts(filter?: {
    tag?: string;
    price?: string;
    discount?: string;
  }): Promise<IProduct[]> {
    let products = await this.productsModel.find({});

    if (!filter) return products;

    if (filter.tag) {
      products = products.filter((product) => {
        if (product.tags.includes(filter.tag as string)) {
          return product;
        }
      });
    }

    if (filter.discount) {
      products = products.filter((product) => {
        if (product.discount.active) return product;
      });
    }

    if (filter.price) {
      products = products.filter((product) => {
        if (
          product.discount.active &&
          (product.discount.price as number) <= Number(filter.price)
        ) {
          return product;
        } else if (product.price <= Number(filter.price)) {
          return product;
        }
      });
    }

    return products;
  }

  async getProduct(id: string): Promise<IProduct | null> {
    const product = await this.productsModel.findById(id);
    return product;
  }

  async createProduct(dto: CreateProductDto): Promise<IProduct> {
    const newProduct = await new this.productsModel(dto).save();
    return newProduct;
  }

  async updateProduct(
    id: string,
    dto: UpdateProductDto,
  ): Promise<IProduct | null> {
    if (!(await this.productsModel.findById(id))) {
      return null;
    }

    const updatedProduct = await this.productsModel.findByIdAndUpdate(id, dto);
    return updatedProduct;
  }

  async removeProduct(id: string): Promise<string | null> {
    if (!(await this.productsModel.findById(id))) {
      return null;
    }

    await this.productsModel.findByIdAndRemove(id);
    return "Product removed!";
  }
}
