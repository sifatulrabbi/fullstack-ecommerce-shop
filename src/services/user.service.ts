import axios from 'axios';

class UserService {
  async login(username: string, password: string): Promise<void> {}

  async logout(): Promise<void> {}

  async update(
    username: string,
    password: string,
    data: object
  ): Promise<void> {}

  async delete(username: string, password: string): Promise<void> {}
}

export const userService = new UserService();
