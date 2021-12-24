import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { userSchema } from "./schemas/user.schema";
import { LoginDataValidationMiddleware } from "../../common/middlewares";

@Module({
  imports: [MongooseModule.forFeature([{ name: "users", schema: userSchema }])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(LoginDataValidationMiddleware)
      .forRoutes({ path: "v1/auth/login", method: RequestMethod.POST });
  }
}
