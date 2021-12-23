import { Controller, Get, Post, UseGuards, Request as Req } from "@nestjs/common";
import { Request } from "express";
import { AppService } from "./app.service";
import { AuthService } from "../auth";
import { JwtAuthGuard, LocalAuthGuard } from "../guards";

@Controller({ version: "1" })
export class AppController {
  constructor(private readonly appService: AppService, private readonly authService: AuthService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(LocalAuthGuard)
  @Post("auth/login")
  async login(@Req() req: Request): Promise<{ access_token: string } | null> {
    return req.user ? this.authService.login(req.user as IUserView) : null;
  }

  @UseGuards(JwtAuthGuard)
  @Get("profile")
  async getProfile(@Req() req: Request): Promise<IUserView> {
    return req.user as IUserView;
  }
}
