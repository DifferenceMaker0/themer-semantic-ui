import { type BearerTokenCredential, type Client, type ClientOptions, getClient } from "@typespec/ts-http-runtime";

export interface ToysClientContext extends Client {

}export interface ToysClientOptions extends ClientOptions {
  endpoint?: string;
}export function createToysClientContext(
  credential: BearerTokenCredential,
  options?: ToysClientOptions,
): ToysClientContext {
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
