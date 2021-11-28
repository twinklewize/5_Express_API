import { App } from "./app"
import { ExceptionFilter } from "./errors/exception.filter"
import { LoggerService } from "./logger/logger.service"
import { UserController } from "./users/users.conroller"

async function bootstrap() {
    const logger = new LoggerService
    const app = new App(
        logger,
        new UserController(logger),
        new ExceptionFilter(logger)
    )
    // простейший Dependency Injection
    // проблема такого DI в том, что придется пробрасывать на несколько уровней один Logger
    await app.init()
}

bootstrap()