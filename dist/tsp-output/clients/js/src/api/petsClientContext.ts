import { type BearerTokenCredential, type Client, type ClientOptions, getClient } from "@typespec/ts-http-runtime";

export interface PetsClientContext extends Client {

}export interface PetsClientOptions extends ClientOptions {
  endpoint?: string;
}export function createPetsClientContext(
  credential: BearerTokenCredential,
  options?: PetsClientOptions,
): PetsClientContext {
  const params: Record<string, any> = {

  };
  const resolvedEndpoint = "http://localhost:8000/api/v2".replace(/{([^}]+)}/g, (_, key) =>
    key in params ? String(params[key]) : (() => { throw new Error(`Missing parameter: ${key}`); })()
  );;return getClient(resolvedEndpoint,{
    ...options,credential,authSchemes: [{
      kind: "http",
      scheme: "bearer"
    }]
  })
}
