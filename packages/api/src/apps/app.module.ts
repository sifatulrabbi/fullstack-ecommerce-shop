import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./users";
import { config } from "../configs";
import { AuthModule } from "../auth";
import { ValidLoginMiddleware } from "../common/middlewares";

@Module({
  imports: [MongooseModule.forRoot(config.MONGO_URI), UsersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(ValidLoginMiddleware)
      .forRoutes({ path: "v1/auth/login", method: RequestMethod.POST });
  }
}
