import { AxiosError } from 'axios';

enum ErrorMessages {
  badRequest = 'Invalid Request! pleach check the inputs.',
  unauthorized = 'Your session has expired. Please sign in again!',
  notFound = 'Requested resource not found!',
  serverError = 'Sorry something went wrong from our side, please try again.',
  default = 'Sorry something went wrong from our side, please try again.',
}

export class CustomError extends Error {
  constructor(error: unknown | string) {
    super();
    if (typeof error === 'string') {
      this.message = error;
    } else {
      this.message = this.getMessage(error);
    }
    Object.setPrototypeOf(this, CustomError.prototype);
  }

  getMessage(error: unknown): string {
    const err = error as AxiosError;
    switch (err?.response?.status) {
      case 400:
        return ErrorMessages.badRequest;

      case 401:
        return ErrorMessages.unauthorized;

      case 404:
        return ErrorMessages.notFound;

      case 500:
        return ErrorMessages.serverError;

      default:
        return ErrorMessages.default;
    }
  }
}
