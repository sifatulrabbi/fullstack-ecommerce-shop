import { BadRequestException, Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { UsersService } from "../users";

@Injectable()
export class FindUserMiddleware implements NestMiddleware {
  constructor(private readonly usersService: UsersService) {}

  async use(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { email } = req.body;

    await this.usersService.findOne({ email }).catch((err: unknown) => {
      next();
    });

    throw new BadRequestException("Email already taken");
  }
}
