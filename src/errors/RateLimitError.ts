export default class RateLimitError extends Error {
  static DEFAULT_ERROR_CODE = "RATE_LIMIT_EXCEEDED";

  errorCode: string;
  status: number;

  constructor(message = "Too many requests, please try again later.") {
    super(message);
    this.errorCode = RateLimitError.DEFAULT_ERROR_CODE;
    this.status = 429;

    Object.setPrototypeOf(this, new.target.prototype);
    this.name = this.constructor.name;
  }
}
