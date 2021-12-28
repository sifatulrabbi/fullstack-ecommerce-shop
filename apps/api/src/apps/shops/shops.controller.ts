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
import { AddUserIdInterceptor } from "../../common/interceptors";
import { Roles } from "../../common/decorators";
import { Request } from "express";

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

  @UseInterceptors(AddUserIdInterceptor)
  @UseGuards(JwtAuthGuard)
  @Roles("admin", "owner")
  @Post()
  create(
    @Req() req: Request,
    @Body() createShopDto: CreateShopDto,
  ): Promise<IShopDocument> {
    return this.shopsService.create(createShopDto);
  }

  @UseInterceptors(AddUserIdInterceptor)
  @UseGuards(JwtAuthGuard)
  @Roles("admin", "owner")
  @Put("/:id")
  update(
    @Req() req: Request,
    @Param("id") id: string,
    @Body() updateShopDto: UpdateShopDto,
  ): Promise<IShopDocument> {
    const user = req.user as IUserView;

    return this.shopsService.update(id, user._id || "id", updateShopDto);
  }

  @UseInterceptors(AddUserIdInterceptor)
  @UseGuards(JwtAuthGuard)
  @Roles("admin", "owner")
  @Delete("/:id")
  remove(@Req() req: Request, @Param("id") id: string): Promise<string> {
    const user = req.user as IUserView;

    return this.shopsService.remove(id, user._id || "id");
  }
}
