import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'

const debug = true
const enableSentry = true
const dsn = 'https://c0994a426b864dcbabeda5892683ebf5@o227565.ingest.sentry.io/5947225'
const commitRef = process.env.COMMIT_REF ||
  process.env.REACT_APP_COMMIT_REF
const environmentName = process.env.NODE_ENV

if (enableSentry)
  Sentry.init({
    dsn,
    environment: environmentName,
    release: commitRef,
    debug,
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 0.2,
    attachStacktrace: true
  })
