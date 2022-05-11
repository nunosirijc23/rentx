import 'reflect-metadata'
import express, { NextFunction, Request, Response }  from 'express'
import "express-async-errors";
import swaggerUi from 'swagger-ui-express'

import createConnection from '@shared/infra/typeorm'
import '@shared/container' // import tsyringe
import { router } from '@shared/infra/http/routes'
import { AppError } from '@shared/errors/AppError'

import swaggerFile from '../../../swagger.json'

createConnection() // create database connection
const app = express()

app.use(express.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(router)

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  if(error instanceof AppError) {
    return response.status(error.statusCode).json({
      message: error.message
    });
  }

  return response.status(500).json({
    status: "error",
    message: `Internal server error - ${error.message}`
  })
}) 

export { app };