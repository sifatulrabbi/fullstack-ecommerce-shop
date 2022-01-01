import {
  CallHandler,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  NestInterceptor,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { Request } from "express";

@Injectable()
export class AddShopIdInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const req: Request = context.switchToHttp().getRequest();
    const user = req.user as IUserView;

    if (!user.shop_id) {
      throw new ForbiddenException("User without shop cannot create products");
    }

    req.body.shop_id = user.shop_id;
    return next.handle();
  }
}
