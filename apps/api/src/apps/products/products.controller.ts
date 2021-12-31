import {
  Controller,
  Get,
  Param,
  Put,
  Post,
  Delete,
  NotFoundException,
  Body,
  Query,
} from "@nestjs/common";
import { CreateProductDto, UpdateProductDto } from "./dto";
import { ProductsService } from "./products.service";

@Controller({ path: "products", version: "1" })
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async getProducts(@Query("tag") tag: string): Promise<IProduct[]> {
    const products = await this.productsService.getProducts({ tag });
    return products;
  }

  @Post()
  async createProduct(@Body() createDto: CreateProductDto): Promise<IProduct> {
    const product = await this.productsService.createProduct(createDto);
    return product;
  }

  @Get("/:id")
  async getProduct(@Param("id") id: string): Promise<IProduct> {
    const product = await this.productsService.getProduct(id);

    if (!product) {
      throw new NotFoundException("Product not found");
    }

    return product;
  }

  @Put("/:id")
  async updateProduct(
    @Param("id") id: string,
    @Body() updateDto: UpdateProductDto,
  ): Promise<IProduct> {
    const product = await this.productsService.updateProduct(id, updateDto);

    if (!product) {
      throw new NotFoundException("Product not found");
    }

    return product;
  }

  @Delete("/:id")
  async removeProduct(@Param("id") id: string): Promise<string> {
    const product = await this.productsService.removeProduct(id);

    if (!product) {
      throw new NotFoundException("Product not found");
    }

    return product;
  }
}
