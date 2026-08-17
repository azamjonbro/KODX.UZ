export class AppError extends Error {
  public readonly statusCode: number;
  public readonly code: string;
  public readonly details?: any[];

  constructor(message: string, statusCode = 400, code = 'BAD_REQUEST', details?: any[]) {
    super(message);
    this.statusCode = statusCode;
    this.code = code;
    this.details = details;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class NotFoundError extends AppError {
  constructor(message = 'Resource topilmadi', code = 'NOT_FOUND') {
    super(message, 404, code);
  }
}

export class UnauthorizedError extends AppError {
  constructor(message = 'Avtorizatsiyadan o‘tilmagan', code = 'UNAUTHORIZED') {
    super(message, 401, code);
  }
}

export class ForbiddenError extends AppError {
  constructor(message = 'Ruxsat berilmagan', code = 'FORBIDDEN') {
    super(message, 403, code);
  }
}

export class ValidationError extends AppError {
  constructor(message = 'Validatsiya xatosi', details?: any[]) {
    super(message, 422, 'VALIDATION_ERROR', details);
  }
}
