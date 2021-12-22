import { Module } from "@nestjs/common";
import { UsersModule } from "../users";
import { AuthService } from "./auth.service";

@Module({
  imports: [UsersModule],
  providers: [AuthService],
  exports: [],
})
export class AuthModule {}
