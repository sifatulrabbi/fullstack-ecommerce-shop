import { Injectable, NestMiddleware, NotFoundException } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

@Injectable()
export class LoginDataValidationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction): void {
    const { body } = req;

    if (!body.email || !body.password) {
      throw new NotFoundException("Email and Password is required for login");
    }
    next();
  }
}
