import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./users/users.module";
import { config } from "./configs";

@Module({
    imports: [MongooseModule.forRoot(config.MONGO_URI), UsersModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
