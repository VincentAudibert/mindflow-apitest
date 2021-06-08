export class Result<T> {
  private constructor(
    readonly isOk: boolean,
    readonly error?: string,
    private _value?: T,
  ) {
    if (isOk && error)
      throw new Error(
        'Invalid result definition : cannot be ok and have an error',
      );
    if (!isOk && !error)
      throw new Error(
        'Invalid result definition : failure needs an error message',
      );
  }

  get isFail() {
    return !this.isOk;
  }

  get value(): T {
    if (!this.isOk) throw new Error('Cannot retrieve value of a failed result');

    return this._value;
  }

  static ok<U>(value?: U): Result<U> {
    return new Result<U>(true, null, value);
  }

  static fail<U>(error: string): Result<U> {
    return new Result<U>(false, error);
  }
}
