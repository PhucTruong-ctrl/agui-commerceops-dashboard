import type { Prisma } from '@prisma/client'

import { prisma } from '../lib/prisma.js'

const userWithRoleSelect = {
  id: true,
  email: true,
  fullName: true,
  passwordHash: true,
  role: {
    select: {
      name: true,
    },
  },
} satisfies Prisma.UserSelect

async function findByEmail(email: string) {
  return prisma.user.findUnique({
    where: { email },
    select: userWithRoleSelect,
  })
}

export const userRepository = {
  findByEmail,
}
