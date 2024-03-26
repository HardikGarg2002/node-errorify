export interface IFieldError {
  field: string;
  message: string;
  errorCode: string;
}

export default class ValidationErrors extends Error {
  public fieldErrors: IFieldError[];
  public status: number;

  constructor(message = "Validation failed") {
    super(message);
    this.status = 400;
    this.fieldErrors = [];
    Object.setPrototypeOf(this, new.target.prototype);
    this.name = this.constructor.name;
  }

  addError(field: string, message: string, errorCode: string) {
    this.fieldErrors.push({ field, message, errorCode });
  }

  fromValidationLibrary(errors: any) {
    errors.forEach((err: any) => {
      this.addError(err.path || "unknown", err.message, "VALIDATION_ERROR");
    });
  }

  toJSON() {
    return {
      message: this.message,
      errorCode: "VALIDATION_ERROR",
      errors: this.fieldErrors,
    };
  }

  hasErrors() {
    return this.fieldErrors.length > 0;
  }
}
