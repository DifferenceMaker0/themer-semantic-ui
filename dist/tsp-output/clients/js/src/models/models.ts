/**
 * A sequence of textual characters.
 */
export type String = string;
/**
 * A 32-bit integer. (`-2,147,483,648` to `2,147,483,647`)
 */
export type Int32 = number;
/**
 * A 64-bit integer. (`-9,223,372,036,854,775,808` to `9,223,372,036,854,775,807`)
 */
export type Int64 = bigint;
/**
 * A whole number. This represent any `integer` value possible.
 * It is commonly represented as `BigInteger` in some languages.
 */
export type Integer = number;
/**
 * A numeric type
 */
export type Numeric = number;

export interface Toy {
  id: number;
  name: string;
}
export interface NotFoundError {
  code: "NOT_FOUND";
  message: string;
}
export interface ValidationError {
  code: "VALIDATION_ERROR";
  message: string;
  details: Array<string>;
}

export interface UnauthorizedError {
  code: "UNAUTHORIZED";
  message: string;
}

export interface Pet {
  id: number;
  name: string;
  age: number;
  kind: PetType;
}
export enum PetType {
  Dog = "dog",
  Cat = "cat",
  Fish = "fish",
  Bird = "bird",
  Reptile = "reptile"
}
export interface InternalServerError {
  code: "INTERNAL_SERVER_ERROR";
  message: string;
}
