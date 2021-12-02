import { injectable } from 'inversify';
import { UserLoginDto } from './dto/user-login.dto';
import { UserRegisterDto } from './dto/user-register.dto';
import { User } from './user.entity';
import { IUsersSevice } from './users.service.interface';

// создание пользователя

@injectable()
export class UsersService implements IUsersSevice {
  async createUser({ email, name, password }: UserRegisterDto): Promise<User | null> {
    const newUser = new User(email, name);
    await newUser.setPassword(password);
    // создали пользователя - дальше проверка что он есть?
    // если существует null
    // если нет создаем и возвращаем пользователя
    return null;
  }
  async validateUser(dto: UserLoginDto): Promise<boolean> {
    return true;
  }
}
