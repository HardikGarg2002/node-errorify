import { createLogger, transports, format } from "winston";

const logger = createLogger({
  level: "error",
  format: format.combine(format.timestamp(), format.json()),
  transports: [
    new transports.Console(),
    new transports.File({ filename: "errors.log" }),
  ],
});

export default logger;
