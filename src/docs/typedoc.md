# TypeDoc

## TypeDoc converts comments in TypeScript's source code into HTML documentation or a JSON model

```bash
npm install --save-dev typedoc

npx typedoc

npx typedoc src/index.ts
npx typedoc --entryPointStrategy Expand src
```

##### TypeDoc generates documentation based on your exports

Build docs using package.json "exports" or "main" fields as entry points

in addition to your main entry point, create `lib/helpers.js` and `lib/hooks.js`

```json
"exports": {
        ".": {
          "types": "./dist/main.d.ts",
          "default": "./dist/main.js"
        },
        "./helpers": {
          "types": "./dist/helpers.d.ts",
          "default": "./dist/helpers.js"
        },
        "./hooks": {
          "types": "./dist/hooks.d.ts",
          "default": "./dist/hooks.js"
        }
      }
```

---

Specify a `tsconfig.json` file that options

```bash
typedoc --tsconfig tsconfig.json

```

---

    locales
        lang
        html
        json
        emit
        name
        inlineTags
        sort
        help
        options
        exclude
        out
        theme
        cname
        favicon
        titleLink
        version


    "files": [

    "./clients/js/src/index.ts",

    "./clients/js/src/models/index.ts",

    "./server/js/src/generated/models/all/pet-store/index.ts"

    ],

,

  "exports": {

    ".": {

    "types": "main.tsp",

    "default": "./clients/js/src/petStore.ts"

    },

    "./clients/js/src": {

    "api": {

    "context": {

    "pets": "./api/petsClientContext.ts",

    "toys": "./api/toysClient/toysClientContext.ts"

    },

    "operations": {

    "pets": "./api/petsClientOperations.ts",

    "toys": "./api/toysClient/toysClientOperations.ts"

    }

    },

    "helpers": {

    "error": "./helpers/error.ts",

    "interfaces": "./helpers/interfaces.ts",

    "multipart-helpers": "./helpers/multipart-helpers",

    "pagingHelpers": "./helpers/pagingHelpers"

    },

    "models": {

    "serializers": "./models/serializers.ts",

    "default": "./models/models.ts"

    },

    "default": "./petsClient.ts"

    }

  },
