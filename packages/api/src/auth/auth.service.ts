import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "../apps/users";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<IUserView> {
    const user = await this.usersService.findOne({ email });

    if (!(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException("Incorrect password");
    }

    return user;
  }

  async login(user: IUserView): Promise<{ access_token: string }> {
    const payload: IUserView = { _id: user._id, email: user.email, name: user.name };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
