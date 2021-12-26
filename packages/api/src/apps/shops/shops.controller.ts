import {
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  Body,
  NotFoundException,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { CreateShopDto, UpdateShopDto } from "./dto";
import { ShopsService } from "./shops.service";
import { JwtAuthGuard } from "../../common/guards";
import { TransformShopDataInterceptor } from "../../common/interceptors";

@Controller({ version: "1", path: "shops" })
export class ShopsController {
  constructor(private readonly shopsService: ShopsService) {}

  @Get()
  getAllShop(): Promise<IShopDocument[]> {
    return this.shopsService.findAll();
  }

  @Get("/:id")
  async getShop(@Param("id") id: string): Promise<IShopDocument> {
    const shop = await this.shopsService.findOne({ id });

    if (!shop) {
      throw new NotFoundException("Shop not found");
    }
    return shop;
  }

  @UseInterceptors(TransformShopDataInterceptor)
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createShopDto: CreateShopDto): Promise<IShopDocument> {
    return this.shopsService.create(createShopDto);
  }

  @UseInterceptors(TransformShopDataInterceptor)
  @UseGuards(JwtAuthGuard)
  @Put("/:id")
  update(
    @Param("id") id: string,
    @Body() updateShopDto: UpdateShopDto,
  ): Promise<IShopDocument> {
    return this.shopsService.update(id, updateShopDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete("/:id")
  remove(@Param("id") id: string): Promise<string> {
    return this.shopsService.remove(id);
  }
}
