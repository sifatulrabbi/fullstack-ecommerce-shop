import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from "@nestjs/common";
import { map, Observable } from "rxjs";
import { UsersService } from "../../apps/users";
import { Request } from "express";

@Injectable()
export class UpdateUserShopInterceptor implements NestInterceptor {
  constructor(private readonly usersService: UsersService) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const req: Request = context.switchToHttp().getRequest();
    const user = req.user as IUserView;

    return next.handle().pipe(
      map((data: IShopDocument) => {
        if (!user._id) return data;

        if (req.method === "DELETE") {
          this.usersService.update(user._id, { shop_id: "" });
        } else {
          this.usersService.update(user._id, { shop_id: data._id });
        }

        return data;
      }),
    );
  }
}
