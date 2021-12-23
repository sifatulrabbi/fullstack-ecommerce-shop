import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  NotFoundException,
  BadRequestException,
} from "@nestjs/common";
import { Observable, tap } from "rxjs";
import { Request } from "express";
import * as bcrypt from "bcrypt";

@Injectable()
export class ConvertPasswordInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> {
    const { body }: Request = context.switchToHttp().getRequest();

    if (!body.password || !body.confirm_password) {
      throw new NotFoundException("Password and Confirm password is required");
    }

    if (body.password !== body.confirm_password) {
      throw new BadRequestException("Password and Confirm password don't match");
    }

    const hash = bcrypt.hashSync(body.password, 10);
    body.password = hash;

    return next.handle();
  }
}
