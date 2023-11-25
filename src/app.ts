import express, { Application, Request, Response } from 'express'
import router from './app/modules/user/user.routes'
const app: Application = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routes

app.use('/api/users', router)

app.get('/', (req: Request, res: Response) => {
  return res.status(200).send({
    message: 'Server is up and running',
    status: 200,
  })
})

export default app
