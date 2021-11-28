import { App } from "./app"
import { LoggerService } from "./logger/logger.service"
import { UserController } from "./users/users.conroller"

async function bootstrap() {
    const logger = new LoggerService
    const app = new App(logger, new UserController(logger)) // простейший Dependency Injection
    // проблема такого DI в том, что придется пробрасывать на несколько уровней один Logger
    await app.init()
}

bootstrap()