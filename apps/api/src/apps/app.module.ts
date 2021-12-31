import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./users";
import { config } from "../configs";
import { AuthModule } from "../auth";
import { ShopsModule } from "./shops";
import { ProductsModule } from "./products";

@Module({
  imports: [
    MongooseModule.forRoot(config.MONGO_URI),
    UsersModule,
    ShopsModule,
    AuthModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
