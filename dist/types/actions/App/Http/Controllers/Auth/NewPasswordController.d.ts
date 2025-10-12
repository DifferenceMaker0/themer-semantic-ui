import { type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder';
/**
* @see \App\Http\Controllers\Auth\NewPasswordController::create
 * @see app/Http/Controllers/Auth/NewPasswordController.php:23
 * @route '/reset-password/{token}'
 */
export declare const create: {
    (args: {
        token: string | number;
    } | [token: string | number] | string | number, options?: RouteQueryOptions): RouteDefinition<"get">;
    definition: {
        methods: ["get", "head"];
        url: string;
    };
    url(args: {
        token: string | number;
    } | [token: string | number] | string | number, options?: RouteQueryOptions): string;
    get(args: {
        token: string | number;
    } | [token: string | number] | string | number, options?: RouteQueryOptions): RouteDefinition<"get">;
    head(args: {
        token: string | number;
    } | [token: string | number] | string | number, options?: RouteQueryOptions): RouteDefinition<"head">;
    form: {
        (args: {
            token: string | number;
        } | [token: string | number] | string | number, options?: RouteQueryOptions): RouteFormDefinition<"get">;
        get(args: {
            token: string | number;
        } | [token: string | number] | string | number, options?: RouteQueryOptions): RouteFormDefinition<"get">;
        head(args: {
            token: string | number;
        } | [token: string | number] | string | number, options?: RouteQueryOptions): RouteFormDefinition<"get">;
    };
};
/**
* @see \App\Http\Controllers\Auth\NewPasswordController::store
 * @see app/Http/Controllers/Auth/NewPasswordController.php:36
 * @route '/reset-password'
 */
export declare const store: {
    (options?: RouteQueryOptions): RouteDefinition<"post">;
    definition: {
        methods: ["post"];
        url: string;
    };
    url(options?: RouteQueryOptions): string;
    post(options?: RouteQueryOptions): RouteDefinition<"post">;
    form: {
        (options?: RouteQueryOptions): RouteFormDefinition<"post">;
        post(options?: RouteQueryOptions): RouteFormDefinition<"post">;
    };
};
declare const NewPasswordController: {
    create: {
        (args: {
            token: string | number;
        } | [token: string | number] | string | number, options?: RouteQueryOptions): RouteDefinition<"get">;
        definition: {
            methods: ["get", "head"];
            url: string;
        };
        url(args: {
            token: string | number;
        } | [token: string | number] | string | number, options?: RouteQueryOptions): string;
        get(args: {
            token: string | number;
        } | [token: string | number] | string | number, options?: RouteQueryOptions): RouteDefinition<"get">;
        head(args: {
            token: string | number;
        } | [token: string | number] | string | number, options?: RouteQueryOptions): RouteDefinition<"head">;
        form: {
            (args: {
                token: string | number;
            } | [token: string | number] | string | number, options?: RouteQueryOptions): RouteFormDefinition<"get">;
            get(args: {
                token: string | number;
            } | [token: string | number] | string | number, options?: RouteQueryOptions): RouteFormDefinition<"get">;
            head(args: {
                token: string | number;
            } | [token: string | number] | string | number, options?: RouteQueryOptions): RouteFormDefinition<"get">;
        };
    };
    store: {
        (options?: RouteQueryOptions): RouteDefinition<"post">;
        definition: {
            methods: ["post"];
            url: string;
        };
        url(options?: RouteQueryOptions): string;
        post(options?: RouteQueryOptions): RouteDefinition<"post">;
        form: {
            (options?: RouteQueryOptions): RouteFormDefinition<"post">;
            post(options?: RouteQueryOptions): RouteFormDefinition<"post">;
        };
    };
};
export default NewPasswordController;
//# sourceMappingURL=NewPasswordController.d.ts.map