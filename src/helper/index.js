import { unwrapResult } from "@reduxjs/toolkit";

export const isObjectEmpty = (obj) => Object.keys(obj).length === 0;

export class UnauthorizedError extends Error {
  constructor(message) {
    super(message);
    this.name = "UnauthorizedError";
  }
}

export function DecodeBase64(value){
  return `data:image/jpeg;base64,${value}`;
}

export function RemoveBase64(value){
  const result = value.substring('data:image/jpeg;base64,'.length - 1);
  return result;
}