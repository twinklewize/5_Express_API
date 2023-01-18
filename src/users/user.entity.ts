import { compare, hash } from 'bcryptjs'; // асинронная функция

export class User {
  private _password: string; // пароли в открытом виде в базе данных не хранятся
  // их нужно хэшировать с помощью какой-то соли
  constructor(
    private readonly _email: string,
    private readonly _name: string,
    passwordHash?: string,
  ) {
    if (passwordHash) {
      this._password = passwordHash;
    }
  }

  get email(): string {
    return this._email;
  }

  get name(): string {
    return this._name;
  }

  get password(): string {
    return this._password;
  }

  public async setPassword(pass: string, salt: number): Promise<void> {
    this._password = await hash(pass, salt); // второй параметр - "соль" (должна быть приватной в конфигурации приложения)
  }

  public async comparePassword(pass: string): Promise<boolean> {
    return compare(pass, this._password);
  }
}
