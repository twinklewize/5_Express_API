import express, { Express } from 'express'
import { userRouter } from './users/users'
import { Server } from 'http'
import { LoggerService } from './logger/logger.service'
import { UserController } from './users/users.conroller'

export class App {
    app: Express
    server: Server
    port: number
    logger: LoggerService
    userConroller: UserController

    constructor(logger: LoggerService,
        userConroller: UserController) {
        this.app = express()
        this.port = 8000
        this.logger = logger
        this.userConroller = userConroller
    }

    useRoutes() {
        this.app.use('/users', this.userConroller.router)
    }

    public async init() {
        this.useRoutes()
        this.server = this.app.listen(this.port)
        this.logger.log(`Сервер запущен на http://localhost:${this.port}`)
    }
}