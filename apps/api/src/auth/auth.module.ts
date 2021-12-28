import { Module } from "@nestjs/common";
import { UsersModule } from "../apps/users";
import { AuthService } from "./auth.service";
import { PassportModule } from "@nestjs/passport";
import { LocalStrategy, JwtStrategy } from "./strategies";
import { JwtModule } from "@nestjs/jwt";
import { config } from "../configs";

@Module({
  imports: [
    PassportModule,
    UsersModule,
    JwtModule.register({
      secret: config.JWT_SECRET,
      signOptions: { expiresIn: "3600s" },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
