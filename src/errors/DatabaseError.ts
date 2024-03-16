export default class DatabaseError extends Error {
  static DEFAULT_ERROR_CODE = "DB_ERROR";

  errorCode: string;
  status: number;
  details?: any;

  constructor(
    message: string,
    errorCode = DatabaseError.DEFAULT_ERROR_CODE,
    details?: any
  ) {
    super(message);
    this.errorCode = errorCode;
    this.status = 500;
    this.details = details;

    Object.setPrototypeOf(this, new.target.prototype);
    this.name = this.constructor.name;
  }

  static connectionError(details?: any) {
    return new DatabaseError(
      "Database connection error",
      "DB_CONNECTION_ERROR",
      details
    );
  }

  static queryError(message: string, details?: any) {
    return new DatabaseError(message, "DB_QUERY_ERROR", details);
  }
}
