import { createEnv } from '@t3-oss/env-nextjs';

export const clientEnvs = createEnv({
    client: {},
    experimental__runtimeEnv: {},
    emptyStringAsUndefined: true,
});

export type ClientEnvs = typeof clientEnvs;
