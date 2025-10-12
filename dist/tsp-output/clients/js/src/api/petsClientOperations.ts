import { parse } from "uri-template";
import type { PetsClientContext } from "./petsClientContext.js";
import { createRestError } from "../helpers/error.js";
import type { OperationOptions } from "../helpers/interfaces.js";
import { jsonArrayPetToApplicationTransform, jsonInternalServerErrorToApplicationTransform, jsonNotFoundErrorToApplicationTransform, jsonPetToApplicationTransform, jsonPetToTransportTransform, jsonUnauthorizedErrorToApplicationTransform, jsonValidationErrorToApplicationTransform } from "../models/internal/serializers.js";
import { InternalServerError, NotFoundError, Pet, UnauthorizedError, ValidationError } from "../models/models.js";

export interface ListPetsOptions extends OperationOptions {
  locale?: string
  clientVersion?: string
}
export async function listPets(
  client: PetsClientContext,
  requestId: string,
  options?: ListPetsOptions,
): Promise<Array<Pet>> {
  const path = parse("/pets{?locale}").expand({
    ...(options?.locale && {locale: options.locale})
  });
  const httpRequestOptions = {
    headers: {
      "request-id": requestId,
      ...(options?.clientVersion && {"client-version": options.clientVersion})
    },
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);

  ;
  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonArrayPetToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface GetPetOptions extends OperationOptions {
  locale?: string
  clientVersion?: string
}
export async function getPet(
  client: PetsClientContext,
  petId: number,
  requestId: string,
  options?: GetPetOptions,
): Promise<Pet | NotFoundError> {
  const path = parse("/pets/{petId}{?locale}").expand({
    petId: petId,
    ...(options?.locale && {locale: options.locale})
  });
  const httpRequestOptions = {
    headers: {
      "request-id": requestId,
      ...(options?.clientVersion && {"client-version": options.clientVersion})
    },
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions);

  ;
  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonPetToApplicationTransform(response.body)!;
  }
  if (+response.status === 404 && response.headers["content-type"]?.includes("application/json")) {
    return jsonNotFoundErrorToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface CreatePetOptions extends OperationOptions {
  locale?: string
  clientVersion?: string
}
export async function createPet(
  client: PetsClientContext,
  pet: Pet,
  requestId: string,
  options?: CreatePetOptions,
): Promise<Pet | ValidationError | UnauthorizedError> {
  const path = parse("/pets{?locale}").expand({
    ...(options?.locale && {locale: options.locale})
  });
  const httpRequestOptions = {
    headers: {
      "request-id": requestId,
      ...(options?.clientVersion && {"client-version": options.clientVersion})
    },body: jsonPetToTransportTransform(pet),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);

  ;
  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 201 && response.headers["content-type"]?.includes("application/json")) {
    return jsonPetToApplicationTransform(response.body)!;
  }
  if (+response.status === 202 && response.headers["content-type"]?.includes("application/json")) {
    return jsonPetToApplicationTransform(response.body)!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return jsonValidationErrorToApplicationTransform(response.body)!;
  }
  if (+response.status === 401 && response.headers["content-type"]?.includes("application/json")) {
    return jsonUnauthorizedErrorToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface UpdatePetOptions extends OperationOptions {
  locale?: string
  clientVersion?: string
}
export async function updatePet(
  client: PetsClientContext,
  petId: number,
  pet: Pet,
  requestId: string,
  options?: UpdatePetOptions,
): Promise<Pet | ValidationError | UnauthorizedError | NotFoundError | InternalServerError> {
  const path = parse("/pets/{petId}{?locale}").expand({
    petId: petId,
    ...(options?.locale && {locale: options.locale})
  });
  const httpRequestOptions = {
    headers: {
      "request-id": requestId,
      ...(options?.clientVersion && {"client-version": options.clientVersion})
    },body: jsonPetToTransportTransform(pet),
  };
  const response = await client.pathUnchecked(path).put(httpRequestOptions);

  ;
  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonPetToApplicationTransform(response.body)!;
  }
  if (+response.status === 400 && response.headers["content-type"]?.includes("application/json")) {
    return jsonValidationErrorToApplicationTransform(response.body)!;
  }
  if (+response.status === 401 && response.headers["content-type"]?.includes("application/json")) {
    return jsonUnauthorizedErrorToApplicationTransform(response.body)!;
  }
  if (+response.status === 404 && response.headers["content-type"]?.includes("application/json")) {
    return jsonNotFoundErrorToApplicationTransform(response.body)!;
  }
  if (+response.status === 500 && response.headers["content-type"]?.includes("application/json")) {
    return jsonInternalServerErrorToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface DeletePetOptions extends OperationOptions {
  locale?: string
  clientVersion?: string
}
export async function deletePet(
  client: PetsClientContext,
  petId: number,
  requestId: string,
  options?: DeletePetOptions,
): Promise<void | UnauthorizedError> {
  const path = parse("/pets/{petId}{?locale}").expand({
    petId: petId,
    ...(options?.locale && {locale: options.locale})
  });
  const httpRequestOptions = {
    headers: {
      "request-id": requestId,
      ...(options?.clientVersion && {"client-version": options.clientVersion})
    },
  };
  const response = await client.pathUnchecked(path).delete(httpRequestOptions);

  ;
  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 204 && !response.body) {
    return;
  }
  if (+response.status === 401 && response.headers["content-type"]?.includes("application/json")) {
    return jsonUnauthorizedErrorToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
