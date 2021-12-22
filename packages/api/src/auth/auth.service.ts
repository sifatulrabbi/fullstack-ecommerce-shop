import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "../users";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async validateUser(email: string, password: string): Promise<IUserView> {
    const user = await this.usersService.findOne({ email });

    if (!(await bcrypt.compare(password, user.user.password))) {
      throw new UnauthorizedException("Incorrect password");
    }

    return user.trimmedUser;
  }
}
