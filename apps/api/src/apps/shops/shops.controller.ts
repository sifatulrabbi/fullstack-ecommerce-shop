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
  Request as Req,
} from "@nestjs/common";
import { CreateShopDto, UpdateShopDto } from "./dto";
import { ShopsService } from "./shops.service";
import { JwtAuthGuard } from "../../common/guards";
import {
  AddUserIdInterceptor,
  UpdateUserShopInterceptor,
} from "../../common/interceptors";
import { Roles } from "../../common/decorators";
import { Request } from "express";

@Controller({ version: "1", path: "shops" })
export class ShopsController {
  constructor(private readonly shopsService: ShopsService) {}

  @Get()
  getAllShop(): Promise<IShopDocument[]> {
    return this.shopsService.findAll();
  }

  @Get("/find/:id")
  async getShop(@Param("id") id: string): Promise<IShopDocument> {
    const shop = await this.shopsService.findOne({ id });

    if (!shop) {
      throw new NotFoundException("Shop not found");
    }
    return shop;
  }

  @UseGuards(JwtAuthGuard)
  @Get("/my-shop")
  async getMyShop(@Req() req: Request): Promise<IShopDocument> {
    const user = req.user as IUserView;

    if (user.shop_id) {
      const shop = await this.shopsService.findOne({ id: user.shop_id });

      if (!shop) {
        throw new NotFoundException("No shop found please create one");
      }
      return shop;
    }
    throw new NotFoundException("No shop found please create one");
  }

  @UseInterceptors(AddUserIdInterceptor, UpdateUserShopInterceptor)
  @UseGuards(JwtAuthGuard)
  @Roles("admin", "owner")
  @Post("/my-shop")
  create(@Body() createShopDto: CreateShopDto): Promise<IShopDocument> {
    return this.shopsService.create(createShopDto);
  }

  @UseInterceptors(AddUserIdInterceptor)
  @UseGuards(JwtAuthGuard)
  @Roles("admin", "owner")
  @Put("/my-shop")
  update(
    @Req() req: Request,
    @Body() updateShopDto: UpdateShopDto,
  ): Promise<IShopDocument> {
    const user = req.user as IUserView;

    if (user.shop_id) {
      return this.shopsService.update(user.shop_id, updateShopDto);
    }
    throw new NotFoundException("No shop found please create one");
  }

  @UseInterceptors(AddUserIdInterceptor, UpdateUserShopInterceptor)
  @UseGuards(JwtAuthGuard)
  @Roles("admin", "owner")
  @Delete("/my-shop")
  remove(@Req() req: Request): Promise<string> {
    const user = req.user as IUserView;

    if (user.shop_id) {
      return this.shopsService.remove(user.shop_id);
    }
    throw new NotFoundException("No shop found please create one");
  }
}
