import { UserModel } from '@prisma/client';
import { User } from './user.entity';

export interface IUsersRepository {
  create: (user: User) => Promise<UserModel>; // User Model из Prisma
  find: (email: string) => Promise<UserModel | null>;
}
