import { IConfigService } from './config.service.interface';
import { config, DotenvConfigOutput, DotenvParseOutput } from 'dotenv';
import { ILogger } from '../logger/logger.interface';
import { TYPES } from '../types';
import { inject, injectable } from 'inversify';

@injectable()
export class ConfigService implements IConfigService {
  private config: DotenvParseOutput;
  constructor(@inject(TYPES.ILogger) private logger: ILogger) {
    const result: DotenvConfigOutput = config(); // Имеет тип Error, если не спарсили, и тип DotEnvParse Output, если смогли
    if (result.error) {
      this.logger.error('[Config Service] Не удалось прочитать файл .env или он отсутствует');
    } else {
      this.logger.log('[Config Service] Конфигурация .env загружена');
      this.config = result.parsed as DotenvParseOutput; // если нет ошибки жестко присваиваем тип
    }
  }
  get(key: string): string {
    // можно улучшить сделав через generic
    return this.config[key];
  }
}
