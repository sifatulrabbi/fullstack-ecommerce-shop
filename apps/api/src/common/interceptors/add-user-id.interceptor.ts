import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from "@nestjs/common";
import { Observable, map } from "rxjs";
import { Request } from "express";
import { UsersService } from "../../apps/users";

@Injectable()
export class AddUserIdInterceptor implements NestInterceptor {
  constructor(private readonly usersService: UsersService) {}

  private async updateUser(user: IUserView, shopId: string): Promise<void> {
    await this.usersService.update(user._id || "id", {
      ...user,
      shop_id: shopId,
    });
  }

  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const req: Request = context.switchToHttp().getRequest();
    const user = req.user as IUserView;

    req.body.owner_id = user._id;

    return next.handle().pipe(
      map((data: IShopDocument) => {
        this.updateUser(user, data._id);
        req.logout();

        return data;
      }),
    );
  }
}
