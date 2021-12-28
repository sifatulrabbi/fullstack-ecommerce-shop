import {
  Injectable,
  ExecutionContext,
  NestInterceptor,
  CallHandler,
  NotFoundException,
  BadRequestException,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { Request } from "express";
import * as bcrypt from "bcrypt";

@Injectable()
export class TransformPasswordInterceptor implements NestInterceptor {
  async intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Promise<Observable<any>> {
    const { body }: Request = context.switchToHttp().getRequest();

    if (body.password) {
      if (body.password !== body.confirm_password) {
        throw new BadRequestException(
          "Password and Confirm password don't match",
        );
      }

      const hash = await bcrypt.hash(body.password, 12);
      body.password = hash;
    }

    return next.handle();
  }
}
