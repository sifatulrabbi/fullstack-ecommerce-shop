import {
  Injectable,
  CanActivate,
  ExecutionContext,
  NotFoundException,
  BadRequestException,
} from "@nestjs/common";
import { Request } from "express";
import { UsersService } from "../../apps/users";

@Injectable()
export class UserEmailGuard implements CanActivate {
  constructor(private readonly usersService: UsersService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const { body }: Request = context.switchToHttp().getRequest();

    if (!body.email) {
      throw new NotFoundException("Email is required");
    }

    const user = await this.usersService.findOne({ email: body.email });
    if (user) {
      throw new BadRequestException("Email already in use");
    }
    return true;
  }
}
