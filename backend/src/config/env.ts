import dotenv from 'dotenv'
import { z } from 'zod'

dotenv.config()

const envSchema = z.object({
  PORT: z
    .string()
    .default('4000')
    .transform((value) => Number(value))
    .pipe(z.number().int().min(1).max(65535)),
  DATABASE_URL: z.string().min(1, 'DATABASE_URL is required'),
})

const parsedEnv = envSchema.safeParse(process.env)

if (!parsedEnv.success) {
  throw new Error(
    `Invalid environment variables: ${parsedEnv.error.issues
      .map((issue) => `${issue.path.join('.') || 'env'}: ${issue.message}`)
      .join(', ')}`,
  )
}

export const env = parsedEnv.data
