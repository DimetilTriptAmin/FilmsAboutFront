export const isObjectEmpty = (obj) => Object.keys(obj).length === 0;

export class UnauthorizedError extends Error {
  constructor(message) {
    super(message);
    this.name = "UnauthorizedError";
  }
}

export const DecodeBase64 = (value) => `data:image/jpeg;base64,${value}`;

export const RemoveBase64 = (value) =>
  value.substring("data:image/jpeg;base64,".length);
