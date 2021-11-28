import { App } from "./app"
import { LoggerService } from "./logger/logger.service"

async function bootstrap() {
    const app = new App(new LoggerService()) // простейший Dependency Injection
    // проблема такого DI в том, что придется пробрасывать на несколько уровней один Logger
    await app.init()
}

bootstrap()