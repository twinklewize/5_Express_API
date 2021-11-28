import { Request, NextFunction, Response } from 'express'
import { Logger } from 'tslog';
import { LoggerService } from '../logger/logger.service';
import { IExceptionFilter } from './exception.filter.interface';
import { HTTPError } from './http-error.class';

export class ExceptionFilter implements IExceptionFilter {
    logger: LoggerService
    constructor(logger: LoggerService) {
        this.logger = logger
    }
    catch(err: Error | HTTPError, req: Request, res: Response, next: NextFunction) {
        if (err instanceof HTTPError) {
            this.logger.error(`[${err.context}] Ошибка ${err.statusCode}: ${err.message}`)
            res.status(err.statusCode).send({ err: err.message })
        } else { // обрабатываем обычный Error, потому что с нашим сервисом можем работать не только мы
            this.logger.error(`${err.message}`)
        }
    }
}