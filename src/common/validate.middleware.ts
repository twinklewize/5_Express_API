import { IMiddleWare } from './middleware.interface';
import { Request, Response, NextFunction } from 'express';
import { ClassConstructor, plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

// берем body, преобразуем его в класс, который преедали в конструктор
// после этого валидируем, если есть ошибки возвращаем ошибку, работу не продолжаем
export class ValidateMiddleware implements IMiddleWare {
  constructor(private classToValidate: ClassConstructor<object>) {}

  execute({ body }: Request, res: Response, next: NextFunction): void {
    const instance = plainToClass(this.classToValidate, body);
    validate(instance).then((errors) => {
      if (errors.length > 0) {
        res.status(422).send(errors);
      } else {
        // если нет ошибок переходим к следующему обработчику
        next();
      }
    });
  }
}
