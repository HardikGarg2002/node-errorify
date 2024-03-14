export default class APIError extends Error {
  static DEFAULT_ERROR_CODE = "ERR_DEFAULT";

  errorCode: string;
  status: number;
  metadata?: Record<string, unknown>;

  constructor(
    message: string,
    errorCode: string,
    status: number,
    metadata?: Record<string, unknown>
  ) {
    super(message);
    this.errorCode = errorCode;
    this.status = status;
    this.metadata = metadata;

    Object.setPrototypeOf(this, new.target.prototype);
    this.name = this.constructor.name;
  }

  static badRequest(
    message: string,
    errorCode = APIError.DEFAULT_ERROR_CODE,
    metadata?: Record<string, unknown>
  ) {
    return new APIError(message, errorCode, 400, metadata);
  }

  static internal(
    message: string,
    errorCode = APIError.DEFAULT_ERROR_CODE,
    metadata?: Record<string, unknown>
  ) {
    return new APIError(message, errorCode, 500, metadata);
  }

  static notFound(
    message: string,
    errorCode = APIError.DEFAULT_ERROR_CODE,
    metadata?: Record<string, unknown>
  ) {
    return new APIError(message, errorCode, 404, metadata);
  }

  static unauthorized(
    message: string,
    errorCode = APIError.DEFAULT_ERROR_CODE,
    metadata?: Record<string, unknown>
  ) {
    return new APIError(message, errorCode, 401, metadata);
  }

  static forbidden(
    message: string,
    errorCode = APIError.DEFAULT_ERROR_CODE,
    metadata?: Record<string, unknown>
  ) {
    return new APIError(message, errorCode, 403, metadata);
  }
}
