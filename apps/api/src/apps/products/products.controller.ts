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
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { CreateProductDto, UpdateProductDto } from "./dto";
import { ProductsService } from "./products.service";
import { JwtAuthGuard } from "../../common/guards";
import { AddShopIdInterceptor } from "../../common/interceptors";

@Controller({ path: "products", version: "1" })
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async getProducts(
    @Query("tag") tag: string,
    @Query("price") price: string,
    @Query("discount") discount: string,
  ): Promise<IProduct[]> {
    const products = await this.productsService.getProducts({
      tag,
      price,
      discount,
    });
    return products;
  }

  @UseInterceptors(AddShopIdInterceptor)
  @UseGuards(JwtAuthGuard)
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

  @UseInterceptors(AddShopIdInterceptor)
  @UseGuards(JwtAuthGuard)
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

  @UseInterceptors(AddShopIdInterceptor)
  @UseGuards(JwtAuthGuard)
  @Delete("/:id")
  async removeProduct(@Param("id") id: string): Promise<string> {
    const product = await this.productsService.removeProduct(id);

    if (!product) {
      throw new NotFoundException("Product not found");
    }

    return product;
  }
}
