import { Router } from 'express'

import { v1Router } from './v1/index.js'

export const apiRouter = Router()

apiRouter.get('/', (_req, res) => {
  res.status(200).json({ message: 'AGUI CommerceOps API' })
})

apiRouter.use('/v1', v1Router)
