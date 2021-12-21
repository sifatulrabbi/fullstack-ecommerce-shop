import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { userSchema } from "./schemas/user.schema";

@Module({
    imports: [MongooseModule.forFeature([{ name: "users", schema: userSchema }])],
    controllers: [UsersController],
    providers: [UsersService],
})
export class UsersModule {}
