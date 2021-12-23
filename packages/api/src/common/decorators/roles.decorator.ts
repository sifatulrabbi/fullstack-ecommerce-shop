import { CustomDecorator, SetMetadata } from "@nestjs/common";

export const ROLES_KEY = "roles";
export const Roles = (...roles: ENUMS.Role[]): CustomDecorator<string> => {
  return SetMetadata(ROLES_KEY, roles);
};
