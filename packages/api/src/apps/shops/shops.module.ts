import { Module, NestModule, MiddlewareConsumer } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { shopsSchema } from "./schemas";
import { UsersModule } from "../users";
import { ShopsService } from "./shops.service";
import { ShopsController } from "./shops.controller";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "shops", schema: shopsSchema }]),
    UsersModule,
  ],
  providers: [ShopsService],
  controllers: [ShopsController],
  exports: [ShopsService],
})
export class ShopsModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {}
}
