import { NestMiddleware, Injectable, NotFoundException } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

@Injectable()
export class ValidLoginMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction): void {
    if (!req.body.email || !req.body.password) {
      throw new NotFoundException("Email and Password is required for login");
    }

    next();
  }
}
