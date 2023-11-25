import express, { Application, Request, Response } from 'express'
const app: Application = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
  return res.status(200).send({
    message: 'Server is up and running',
    status: 200,
  })
})

export default app
