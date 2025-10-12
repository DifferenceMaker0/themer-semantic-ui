# About Generated Projects

<https://aka.ms/tsp/hsjs/start>
<https://www.youtube.com/watch?v=1wem38tWCbU&list=PLYWCCsom5Txglkl_I1XvwzrzM5G3SuVsR&index=2>

YOUR API HTTP ROUTE GENERATED IMPLIMENTATION

- HTTP Operations & Responses
- Error Handling
- Paramater Url & Header Data
- Auth Guard
- Versioning
- Custom Response Models

### The router implementation

@typespec/http-server-js  --  bind to an implementation of an HTTP server

- generated in the `http/router.js`  --  within the output directory
- Each service will have its own router

service namespace `Todo`, will export a function `createTodoRouter`

##### router that dispatches methods

---

```
import { createTodoRouter } from "../tsp-output/@typespec/http-server-js/http/router.js";

const router = createTodoRouter(users, todoItems, attachments);
```

#### `createTodoRouter` function expects interfaces are explained

---

- handler signature for the `request` is the `dispatch` method
- dispatch is the default for Node Http Server

```
const server = http.createServer();

server.on("request", router.dispatch);

server.listen(8080, () => {
  console.log("Server listening on http://localhost:8080");
});
```

---

expressMiddleware is default for express

```
import express from "express";

const app = express();

app.use(router.expressMiddleware);

app.listen(8080, () => {
  console.log("Server listening on http://localhost:8080");
});
```

---

yuo

uik

afd

### Service Interfaces - represent the model types ...carried over the HTTP protocol

methods that exists, [emitter]() generates [interfaces]() for each

    -***to instantiate the router, [Implement]()ations of [these interfaces]()***

Example:

TypeSpec namespace `Users` within the `Todo`

```
namespace Users {
  @route("/users")
  @post
  op create(
    user: User,
  ): WithStandardErrors<UserCreatedResponse | UserExistsResponse | InvalidUserResponse>;
}
```

corresponding interface `Users`  --  `models/all/todo/index.js` in the output dir

```
export interface Users<Context = unknown> {
  create(
    ctx: Context,
    user: User,
  ): Promise<
    | UserCreatedResponse
    | UserExistsResponse
    | InvalidUserResponse
    | Standard4XxResponse
    | Standard5XxResponse
  >;
}
```

*object implementing this `Users` interface must be passed to the router*

Context = protocol or framework-specific context

If you need to access request, response in  methods

    - the implementation objects directly, use the`HttpContext` `Context` argument

    - Otherwise default`unknown`

```
import { HttpContext } from "../tsp-output/@typespec/http-server-js/helpers/router.js";
import { Users } from "../tsp-output/@typespec/http-server-js/models/all/todo/index.js";

export const users: Users<HttpContext> = {
  async create(ctx, user) {
    // Implementation
  },
};
```

implementation written in types and values  --  rather than raw HTTP

### Request/Response Flow

1. HTTP server application (your code)  --  serialized

- request body,
- query parameters,
- headers

(your code)->(generated code)

2. Which (generated code) operation   --  based on

- the route
- method *POST,*GET, etc
- metadata in shared routes

deserialized into  -- types, and may perform request validation

operation (generated code) calls implementation (your code) with deserialized request($data)

3. Implementation (your code) returns result or throws error
4. (generated code) responds to the HTTP request  --  converting result or error into HTTP (response, $data)

---

### The [requestId]() paramater

can be set in header:  X-Request-ID | or |  url query param

Example case:

1. user initiates a purchase, a `requestId` is generated.
2. This `requestId` would then be included in logs for:
   - web server initial request,
   - application server processing order,
   - the payment gateway, and potentially
   - inventory management system.

If a problem arises during the payment process, the `requestId` tracked in all related logs

---

[spread operator](https://typespec.io/docs/language-basics/models/#spread) `(...)`, which tells the TypeSpec compiler to expand the model definition inline.

    main.tsp  --

```
model CommonParameters {
@header
    requestID: string;
@query
    locale?: string;
@header
    clientVersion?: string;
}
```

```
 @delete
    op deletePet(@path petId: int32, ...CommonParameters): {
        @statusCode statusCode: 204;
    };
```

is ...spread across in the generated code

- $ref: "#/components/parameters/CommonParameters.requestID"
- $ref: "#/components/parameters/CommonParameters.locale"
- $ref: "#/components/parameters/CommonParameters.clientVersion"

#### Generated OpenAPI Specification

**Parameters Section**  **note: this is the process I'm always truncating urls of Googles tracking

```
paths:
  /pets/{petId}:
    delete:
      operationId: Pets_deletePet
      parameters:
 - name: petId
          in: path
          required: true
          schema:
            type: integer
            format: int32
        // highlight-start
        - $ref: "#/components/parameters/CommonParameters.requestID"
        - $ref: "#/components/parameters/CommonParameters.locale"
        - $ref: "#/components/parameters/CommonParameters.clientVersion"
        // highlight-end
      responses:
        "204":
          description: "There is no content to send for this request, but the headers may be useful."
        "404":
          description: "Not Found"
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/NotFoundError"
components:
  parameters:
    // highlight-start
    CommonParameters.clientVersion:
      name: client-version
      in: header
      required: false
      schema:
        type: string
    CommonParameters.locale:
      name: locale
      in: query
      required: false
      schema:
        type: string
    CommonParameters.requestID:
      name: request-id
      in: header
      required: true
      schema:
        type: string
    // highlight-end
  schemas:
    NotFoundError:
      type: object
      properties:
        code:
          type: string
          example: "NOT_FOUND"
        message:
          type: string
```

---

<https://typespec.io/docs/getting-started/getting-started-rest/05-authentication/>

<https://www.youtube.com/watch?v=y0LOXYklsMg&list=PLYWCCsom5Txglkl_I1XvwzrzM5G3SuVsR>

@typespec/ts-http-runtime

@typespec/json-schema

Using TypeSpec in an existing project

tsp init
tsp install
tsp compile --w

Method 1:

- Run tsp init in a subdirectory
  create a subdirectory, such as spec
  tsp init inside the new subdirectory
  manually merge the generated package.json with existing
  if desired, move the main.tsp and tspconfig.yaml files
  tsp compile to generate your API artifact

Method 2: Manual setup
    npm install @typespec/compiler --save-dev
    Create a tspconfig.yaml
     configure and specify emitters, such as @typespec/openapi3
    Create a .tsp file (e.g., main.tsp) and define your API
        split large API definition across .tsp files
        import statements to link them
    Install emitters
        npm install @typespec/http @typespec/openapi3 --save-dev
    Add build scripts
        "typespec": "tsp compile ."
    Run your new script

Things to Remember:
    main.tsp        *entry point*
    tspconfig.yaml  *configuration file*
    package.json
    `<!-- tsconfig.json -->`

Manual Setup of TypeSpec *so it doesn't overwrite your project by auto

npm install -g @typespec/compiler

<!-- tsp install @typespec/rest
tsp install @typespec/openapi3
tsp install @typespec/http
tsp install @typespec/versioning
tsp install @typespec/azure
tsp install @typespec/asyncapi
tsp install @typespec/odata
tsp install @typespec/odata-v4
tsp install @typespec/odata-v4 -->

tsp init
**Well Idk because it ALWAYS overwrites your project.**
tsp install

ChatGPT Agent Builder
---------------------

Agent Builder
Connector Registry - integrations
ChatKit - embed starter kit
Reinforcement Fine-Tuning Built-in
    (custom tool calls)
Dev Features:
    - Datasets
    - Tracing
    - Prompt Optimization
    - Third Party Plugins
