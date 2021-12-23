import { BadRequestException, Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import * as bcrypt from "bcrypt";

@Injectable()
export class ConvertPasswordMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction): Promise<void> {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { password, confirm_password } = req.body;
    if (password !== confirm_password) {
      throw new BadRequestException("Password and Confirm password doesn't match");
    }

    const hash = await bcrypt.hash(password, 12);
    req.body.password = hash;

    next();
  }
}
