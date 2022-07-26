import Launcher from '@aktiv/launcher';
import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';
import RouterConfig from './config/router.config';

const app = new Launcher({
    routes: RouterConfig,
});

Sentry.init({
    dsn: 'https://c31e50ccade94d8cae4608282e23846d@o1335044.ingest.sentry.io/6602466',
    integrations: [new BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
});

app.start();
