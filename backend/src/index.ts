import cors from 'cors'
import express from 'express'
import { env } from './config/env.js'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok' })
})

app.listen(env.PORT, () => {
  console.log(`Backend listening on port ${env.PORT}`)
})
