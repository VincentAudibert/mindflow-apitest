import { HttpException } from '@nestjs/common';

/**
 * Helper for testing,
 * TODO : should be exposed for all tests...
 * @param fn function expected to fail
 * @param statusCode HTTP status code expected in the exception
 */
export const expectHttpException = (fn: () => void, statusCode: number) => {
  try {
    fn();
    fail();
  } catch (error) {
    expect(error).toBeInstanceOf(HttpException);
    expect(error.getStatus()).toEqual(statusCode);
  }
};
