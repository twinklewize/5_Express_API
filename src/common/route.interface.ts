import { NextFunction, Request, Response, Router } from 'express';

export interface IControllerRoute {
  path: string;
  func: (req: Request, res: Response, next: NextFunction) => void;
  method: keyof Pick<Router, 'get' | 'post' | 'delete' | 'patch' | 'put'>;
  // Pick берет из нашего интерфейса какие-то значения и делает из них новый интерфейс
  // С помощью keyof преобразуем интерфейс

  // method: 'get' | 'post' | 'delete' | 'patch' | 'put'
  // неправильное решение
}

export type ExpressReturnType = Response<any, Record<string, any>>;
