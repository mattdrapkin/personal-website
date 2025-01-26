import { type Config } from 'drizzle-kit';

export default {
    schema: './src/services/db/schema.ts',
    out: './src/services/db',
    dialect: 'postgresql',
} satisfies Config;
