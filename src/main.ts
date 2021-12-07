import { Container, ContainerModule, interfaces } from 'inversify';
import { App } from './app';
import { ConfigService } from './config/config.service';
import { IConfigService } from './config/config.service.interface';
import { PrismaService } from './database/prisma.service';
import { ExceptionFilter } from './errors/exception.filter';
import { IExceptionFilter } from './errors/exception.filter.interface';
import { ILogger } from './logger/logger.interface';
import { LoggerService } from './logger/logger.service';
import { TYPES } from './types';
import { UserController } from './users/users.conroller';
import { IUserController } from './users/users.controller.interface';
import { UsersRepository } from './users/users.repository';
import { IUsersRepository } from './users/users.repository.interface';
import { UsersService } from './users/users.service';
import { IUsersService } from './users/users.service.interface';

export interface IBootstrapReturn {
  appContainer: Container;
  app: App;
}

export const appBingings = new ContainerModule((bind: interfaces.Bind) => {
  bind<ILogger>(TYPES.ILogger).to(LoggerService).inSingletonScope();
  bind<IExceptionFilter>(TYPES.ExceptionFilter).to(ExceptionFilter).inSingletonScope();
  bind<IUserController>(TYPES.UserController).to(UserController).inSingletonScope();
  bind<IUsersService>(TYPES.UsersService).to(UsersService).inSingletonScope();
  bind<IConfigService>(TYPES.ConfigService).to(ConfigService).inSingletonScope();
  // Singletone (те которые вызываются всего 1 раз можно оставить не сигнлтонами)
  bind<PrismaService>(TYPES.PrismaService).to(PrismaService).inSingletonScope();
  bind<IUsersRepository>(TYPES.UsersRepository).to(UsersRepository).inSingletonScope();
  bind<App>(TYPES.Application).to(App).inSingletonScope();
});

function bootstrap(): IBootstrapReturn {
  const appContainer = new Container();
  appContainer.load(appBingings);
  const app = appContainer.get<App>(TYPES.Application);
  app.init();
  return { app, appContainer };
}

export const { app, appContainer } = bootstrap();
