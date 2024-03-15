import * as Sentry from "@sentry/node";

Sentry.init({ dsn: process.env.SENTRY_DSN || "" });

const captureException = (error: Error) => {
  if (process.env.SENTRY_DSN) {
    Sentry.captureException(error);
  }
};

export default captureException;
