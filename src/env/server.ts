import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const serverEnvs = createEnv({
    server: {
        NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
        DATABASE_URL: z.string().default('postgresql://postgres:232409@localhost:5432/personal-website'),

        EMAIL_PROVIDER: z.enum(['console', 'smtp', 'resend']).default('console'),

        // if email provider is smtp
        SMTP_HOST: z.string().default('default'),
        SMTP_PORT: z.preprocess(Number, z.number()).default(587),
        SMTP_USERNAME: z.string().default('default'),
        SMTP_PASSWORD: z.string().default('default'),
        SMTP_SECURE: z.preprocess(v => v === 'true' || v === '1', z.boolean()).default(true),

        // if email provider is resend
        RESEND_API_KEY: z.string().default('default'),

        // always required regardless of email provider
        EMAIL_FROM: z.string().default('default'),

        STANDALONE: z.coerce.number().default(0),
    },
    experimental__runtimeEnv: process.env,
    emptyStringAsUndefined: false,
});

export type ServerEnvs = typeof serverEnvs;
