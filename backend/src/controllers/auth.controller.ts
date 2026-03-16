import type { Request, Response } from 'express'

import { loginSchema } from '../schemas/auth.schema.js'
import { authService } from '../services/auth.service.js'

export async function loginHandler(req: Request, res: Response) {
  const parsedInput = loginSchema.safeParse(req.body)

  if (!parsedInput.success) {
    return res.status(400).json({
      message: 'Invalid login payload',
      errors: parsedInput.error.flatten(),
    })
  }

  const result = await authService.login(parsedInput.data)

  if (!result.ok) {
    return res.status(401).json({ message: result.message })
  }

  return res.status(200).json({
    token: result.token,
    user: result.user,
  })
}
