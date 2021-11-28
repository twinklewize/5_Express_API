import express, { Express } from 'express'
import { userRouter } from './users/users'
import { Server } from 'http'
import { LoggerService } from './logger/logger.service'
import { UserController } from './users/users.conroller'
import { ExceptionFilter } from './errors/exception.filter'

export class App {
    app: Express
    server: Server
    port: number
    logger: LoggerService
    userConroller: UserController
    exceptionFilter: ExceptionFilter

    constructor(
        logger: LoggerService,
        userConroller: UserController,
        exceptionFilter: ExceptionFilter,
    ) {
        this.app = express()
        this.port = 8000
        this.logger = logger
        this.userConroller = userConroller
        this.exceptionFilter = exceptionFilter
    }

    useRoutes() {
        this.app.use('/users', this.userConroller.router)
    }

    useExceptionFilters() {
        this.app.use(this.exceptionFilter.catch.bind(this.exceptionFilter))
    }

    public async init() {
        this.useRoutes()
        this.useExceptionFilters()
        this.server = this.app.listen(this.port)
        this.logger.log(`Сервер запущен на http://localhost:${this.port}`)
    }
}