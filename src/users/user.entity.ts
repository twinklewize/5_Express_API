import { hash } from 'bcryptjs'; // асинронная функция

export class User {
  private _password: string; // пароли в открытом виде в базе данных не хранятся
  // их нужно хэшировать с помощью какой-то соли
  constructor(private readonly _email: string, private readonly _name: string) {}

  get email(): string {
    return this._email;
  }

  get name(): string {
    return this._name;
  }

  get password(): string {
    return this._password;
  }

  public async setPassword(pass: string): Promise<void> {
    this._password = await hash(pass, 10); // второй параметр - "соль" (должна быть приватной в конфигурации приложения)
  }
}
