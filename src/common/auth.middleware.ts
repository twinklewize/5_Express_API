import { IMiddleWare } from './middleware.interface';
import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

// чтобы было больше security здесь можно делать еще запрос в базу, но не использовать тогда этот middleware глобально, чтобы на любой запрос не проверять это
export class AuthMiddleware implements IMiddleWare {
  constructor(private secret: string) {}
  execute(req: Request, res: Response, next: NextFunction): void {
    if (req.headers.authorization) {
      // Bearer JWT.
      verify(req.headers.authorization.split(' ')[1], this.secret, (err, payload) => {
        if (err) {
          next();
        } else if (payload) {
          req.user = payload.email;
          next();
        }
      });
    } else {
      next();
    }
  }
}
