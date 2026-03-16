import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import { env } from '../config/env.js'
import type { LoginInput } from '../schemas/auth.schema.js'
import { userRepository } from '../repositories/user.repository.js'

type LoginSuccess = {
  ok: true
  token: string
  user: {
    id: string
    email: string
    fullName: string | null
    role: string
  }
}

type LoginFailure = {
  ok: false
  message: string
}

type LoginResult = LoginSuccess | LoginFailure

async function login(input: LoginInput): Promise<LoginResult> {
  const user = await userRepository.findByEmail(input.email)

  if (!user) {
    return { ok: false, message: 'Invalid credentials' }
  }

  const isPasswordValid = await bcrypt.compare(input.password, user.passwordHash)

  if (!isPasswordValid) {
    return { ok: false, message: 'Invalid credentials' }
  }

  const token = jwt.sign(
    {
      sub: user.id,
      role: user.role.name,
      email: user.email,
    },
    env.JWT_SECRET,
    { expiresIn: '1d' },
  )

  return {
    ok: true,
    token,
    user: {
      id: user.id,
      email: user.email,
      fullName: user.fullName,
      role: user.role.name,
    },
  }
}

export const authService = {
  login,
}
