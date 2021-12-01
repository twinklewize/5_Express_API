import { Request, NextFunction, Response } from 'express';
import { inject, injectable } from 'inversify';
import { Logger } from 'tslog';
import { ILogger } from '../logger/logger.interface';
import { TYPES } from '../types';
import { IExceptionFilter } from './exception.filter.interface';
import { HTTPError } from './http-error.class';
import 'reflect-metadata';

@injectable()
export class ExceptionFilter implements IExceptionFilter {
  constructor(@inject(TYPES.ILogger) private logger: ILogger) {}
  catch(err: Error | HTTPError, req: Request, res: Response, next: NextFunction): void {
    if (err instanceof HTTPError) {
      this.logger.error(`[${err.context}] Ошибка ${err.statusCode}: ${err.message}`);
      res.status(err.statusCode).send({ err: err.message });
    } else {
      // обрабатываем обычный Error, потому что с нашим сервисом можем работать не только мы
      this.logger.error(`${err.message}`);
      res.status(500).send({ err: err.message });
    }
  }
}
