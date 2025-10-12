import { InternalServerError, NotFoundError, Pet, Toy, UnauthorizedError, ValidationError } from "../models.js";

export function decodeBase64(value: string): Uint8Array | undefined {
  if(!value) {
    return value as any;
  }
  // Normalize Base64URL to Base64
  const base64 = value.replace(/-/g, '+').replace(/_/g, '/')
    .padEnd(value.length + (4 - (value.length % 4)) % 4, '=');

  return new Uint8Array(Buffer.from(base64, 'base64'));
}export function encodeUint8Array(
  value: Uint8Array | undefined | null,
  encoding: BufferEncoding,
): string | undefined {
  if (!value) {
    return value as any;
  }
  return Buffer.from(value).toString(encoding);
}export function dateDeserializer(date?: string | null): Date {
  if (!date) {
    return date as any;
  }

  return new Date(date);
}export function dateRfc7231Deserializer(date?: string | null): Date {
  if (!date) {
    return date as any;
  }

  return new Date(date);
}export function dateRfc3339Serializer(date?: Date | null): string {
  if (!date) {
    return date as any
  }

  return date.toISOString();
}export function dateRfc7231Serializer(date?: Date | null): string {
  if (!date) {
    return date as any;
  }

  return date.toUTCString();
}export function dateUnixTimestampSerializer(date?: Date | null): number {
  if (!date) {
    return date as any;
  }

  return Math.floor(date.getTime() / 1000);
}export function dateUnixTimestampDeserializer(date?: number | null): Date {
  if (!date) {
    return date as any;
  }

  return new Date(date * 1000);
}export function createPetPayloadToTransport(payload: Pet) {
  return jsonPetToTransportTransform(payload)!;
}export function updatePetPayloadToTransport(payload: Pet) {
  return jsonPetToTransportTransform(payload)!;
}export function createToyPayloadToTransport(payload: Toy) {
  return jsonToyToTransportTransform(payload)!;
}export function updateToyPayloadToTransport(payload: Toy) {
  return jsonToyToTransportTransform(payload)!;
}export function jsonArrayToyToTransportTransform(
  items_?: Array<Toy> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonToyToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayToyToApplicationTransform(items_?: any): Array<Toy> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonToyToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonToyToTransportTransform(input_?: Toy | null): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,name: input_.name
  }!;
}export function jsonToyToApplicationTransform(input_?: any): Toy {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,name: input_.name
  }!;
}export function jsonNotFoundErrorToTransportTransform(
  input_?: NotFoundError | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    code: input_.code,message: input_.message
  }!;
}export function jsonNotFoundErrorToApplicationTransform(
  input_?: any,
): NotFoundError {
  if(!input_) {
    return input_ as any;
  }
    return {
    code: input_.code,message: input_.message
  }!;
}export function jsonValidationErrorToTransportTransform(
  input_?: ValidationError | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    code: input_.code,message: input_.message,details: jsonArrayStringToTransportTransform(input_.details)
  }!;
}export function jsonValidationErrorToApplicationTransform(
  input_?: any,
): ValidationError {
  if(!input_) {
    return input_ as any;
  }
    return {
    code: input_.code,message: input_.message,details: jsonArrayStringToApplicationTransform(input_.details)
  }!;
}export function jsonArrayStringToTransportTransform(
  items_?: Array<string> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = item as any;
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayStringToApplicationTransform(
  items_?: any,
): Array<string> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = item as any;
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonUnauthorizedErrorToTransportTransform(
  input_?: UnauthorizedError | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    code: input_.code,message: input_.message
  }!;
}export function jsonUnauthorizedErrorToApplicationTransform(
  input_?: any,
): UnauthorizedError {
  if(!input_) {
    return input_ as any;
  }
    return {
    code: input_.code,message: input_.message
  }!;
}export function jsonArrayPetToTransportTransform(
  items_?: Array<Pet> | null,
): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonPetToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayPetToApplicationTransform(items_?: any): Array<Pet> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonPetToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonPetToTransportTransform(input_?: Pet | null): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,name: input_.name,age: input_.age,kind: input_.kind
  }!;
}export function jsonPetToApplicationTransform(input_?: any): Pet {
  if(!input_) {
    return input_ as any;
  }
    return {
    id: input_.id,name: input_.name,age: input_.age,kind: input_.kind
  }!;
}export function jsonInternalServerErrorToTransportTransform(
  input_?: InternalServerError | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    code: input_.code,message: input_.message
  }!;
}export function jsonInternalServerErrorToApplicationTransform(
  input_?: any,
): InternalServerError {
  if(!input_) {
    return input_ as any;
  }
    return {
    code: input_.code,message: input_.message
  }!;
}
