export interface ICommonErrorResponse {
  status: number;
  errorCode: string;
  message: string;
  stack?: string;
}
