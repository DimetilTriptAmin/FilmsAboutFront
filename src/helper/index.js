export const isObjectEmpty = (obj) => Object.keys(obj).length === 0;

export class UnauthorizedError extends Error {
  constructor(message) {
    super(message);
    this.name = "UnauthorizedError";
  }
}
