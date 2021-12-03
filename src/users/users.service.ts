import { inject, injectable } from 'inversify';
import { IConfigService } from '../config/config.service.interface';
import { TYPES } from '../types';
import { UserLoginDto } from './dto/user-login.dto';
import { UserRegisterDto } from './dto/user-register.dto';
import { User } from './user.entity';
import { IUsersSevice } from './users.service.interface';

// создание пользователя

@injectable()
export class UsersService implements IUsersSevice {
  constructor(@inject(TYPES.ConfigService) private configService: IConfigService) {}
  async createUser({ email, name, password }: UserRegisterDto): Promise<User | null> {
    const newUser = new User(email, name);
    const salt = this.configService.get('SALT');
    await newUser.setPassword(password, Number(salt));
    // создали пользователя - дальше проверка что он есть?
    // если существует null
    // если нет создаем и возвращаем пользователя
    return null;
  }
  async validateUser(dto: UserLoginDto): Promise<boolean> {
    return true;
  }
}
