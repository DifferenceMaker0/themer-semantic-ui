import { parse } from "uri-template";
import type { ToysClientContext } from "./toysClientContext.js";
import { createRestError } from "../../helpers/error.js";
import type { OperationOptions } from "../../helpers/interfaces.js";
import { jsonArrayToyToApplicationTransform, jsonNotFoundErrorToApplicationTransform, jsonToyToApplicationTransform, jsonToyToTransportTransform, jsonUnauthorizedErrorToApplicationTransform, jsonValidationErrorToApplicationTransform } from "../../models/internal/serializers.js";
import { NotFoundError, Toy, UnauthorizedError, ValidationError } from "../../models/models.js";

export interface ListToysOptions extends OperationOptions {
  locale?: string
  clientVersion?: string
}
export async function listToys(
  client: ToysClientContext,
  petId: number,
  requestId: string,
  options?: ListToysOptions,
): Promise<Array<Toy> | NotFoundError> {
  const path = parse("/pets/{petId}/toys{?locale}").expand({
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
    return jsonArrayToyToApplicationTransform(response.body)!;
  }
  if (+response.status === 404 && response.headers["content-type"]?.includes("application/json")) {
    return jsonNotFoundErrorToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
export interface CreateToyOptions extends OperationOptions {
  locale?: string
  clientVersion?: string
}
export async function createToy(
  client: ToysClientContext,
  petId: number,
  toy: Toy,
  requestId: string,
  options?: CreateToyOptions,
): Promise<Toy | ValidationError | UnauthorizedError> {
  const path = parse("/pets/{petId}/toys{?locale}").expand({
    petId: petId,
    ...(options?.locale && {locale: options.locale})
  });
  const httpRequestOptions = {
    headers: {
      "request-id": requestId,
      ...(options?.clientVersion && {"client-version": options.clientVersion})
    },body: jsonToyToTransportTransform(toy),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);

  ;
  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 201 && response.headers["content-type"]?.includes("application/json")) {
    return jsonToyToApplicationTransform(response.body)!;
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
export interface UpdateToyOptions extends OperationOptions {
  locale?: string
  clientVersion?: string
}
export async function updateToy(
  client: ToysClientContext,
  petId: number,
  toyId: number,
  toy: Toy,
  requestId: string,
  options?: UpdateToyOptions,
): Promise<Toy | ValidationError | UnauthorizedError | NotFoundError> {
  const path = parse("/pets/{petId}/toys/{toyId}{?locale}").expand({
    petId: petId,
    toyId: toyId,
    ...(options?.locale && {locale: options.locale})
  });
  const httpRequestOptions = {
    headers: {
      "request-id": requestId,
      ...(options?.clientVersion && {"client-version": options.clientVersion})
    },body: jsonToyToTransportTransform(toy),
  };
  const response = await client.pathUnchecked(path).put(httpRequestOptions);

  ;
  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonToyToApplicationTransform(response.body)!;
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
  throw createRestError(response);
}
;
export interface DeleteToyOptions extends OperationOptions {
  locale?: string
  clientVersion?: string
}
export async function deleteToy(
  client: ToysClientContext,
  petId: number,
  toyId: number,
  requestId: string,
  options?: DeleteToyOptions,
): Promise<void | UnauthorizedError> {
  const path = parse("/pets/{petId}/toys/{toyId}{?locale}").expand({
    petId: petId,
    toyId: toyId,
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
