import { Response, Router } from 'express';
import { injectable } from 'inversify';
import { ILogger } from '../logger/logger.interface';
import { ExpressReturnType, IControllerRoute } from './route.interface';
import 'reflect-metadata';

@injectable() // на абстрактный класс тоже нужно навесить
export abstract class BaseController {
  private readonly _router: Router;

  constructor(private logger: ILogger) {
    this._router = Router();
  }

  get router(): Router {
    return this._router;
  }

  public send<T>(res: Response, code: number, message: T): ExpressReturnType {
    res.type('application.json');
    return res.status(code).json(message);
  }

  public ok<T>(res: Response, message: T): ExpressReturnType {
    return this.send<T>(res, 200, message);
  }

  public created(res: Response): ExpressReturnType {
    return res.sendStatus(201);
  }

  protected bindRoutes(routes: IControllerRoute[]): void {
    for (const route of routes) {
      this.logger.log(`[${route.method}] ${route.path}`);
      const middleware = route.middlewares?.map((m) => m.execute.bind(m)); // биндим все middlewares
      const handler = route.func.bind(this); // сохраняем контекст
      const pipeline = middleware ? [...middleware, handler] : handler;
      // если есть middleware, то сначала они, а потом handler, если нет, то только handler
      this.router[route.method](route.path, pipeline);
      // когда мы передаем функцию route.func вместо handler мы теряем контекст исходного класса
      // теряется this и остальные заданные значения класса
    }
  }
}
