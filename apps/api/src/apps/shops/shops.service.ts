import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
import { CreateShopDto, UpdateShopDto } from "./dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class ShopsService {
  constructor(
    @InjectModel("shops")
    private readonly shopsModel: Model<IShopDocument>,
  ) {}

  async create(dto: CreateShopDto): Promise<IShopDocument> {
    const newShop = await new this.shopsModel(dto).save();

    return newShop;
  }

  async update(id: string, dto: UpdateShopDto): Promise<IShopDocument> {
    const shop = await this.findOne({ id });

    if (!shop) {
      throw new NotFoundException("Shop not found");
    }

    const updatedShop = await this.shopsModel.findByIdAndUpdate(id, dto, {
      new: true,
    });

    if (!updatedShop) {
      throw new BadRequestException("Unable to update the shop");
    }
    return updatedShop;
  }

  async findAll(): Promise<IShopDocument[]> {
    const shops = await this.shopsModel.find({});
    return shops;
  }

  async findOne({
    id,
    owner_id,
  }: {
    id?: string;
    owner_id?: string;
  }): Promise<IShopDocument | null> {
    try {
      const shop = owner_id
        ? await this.shopsModel.findOne({ owner_id })
        : id
        ? await this.shopsModel.findById(id)
        : null;

      return shop;
    } catch (err) {
      throw new BadRequestException(String(err));
    }
  }

  async remove(id: string): Promise<string> {
    const shop = await this.findOne({ id });

    if (!shop) {
      throw new NotFoundException("Shop not found");
    }

    await shop.remove();
    return `The shop ${shop.name} has been removed`;
  }
}
