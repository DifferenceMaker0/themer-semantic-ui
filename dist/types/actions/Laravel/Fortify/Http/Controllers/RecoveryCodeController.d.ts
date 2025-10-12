import { type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder';
/**
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::index
 * @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:19
 * @route '/user/two-factor-recovery-codes'
 */
export declare const index: {
    (options?: RouteQueryOptions): RouteDefinition<"get">;
    definition: {
        methods: ["get", "head"];
        url: string;
    };
    url(options?: RouteQueryOptions): string;
    get(options?: RouteQueryOptions): RouteDefinition<"get">;
    head(options?: RouteQueryOptions): RouteDefinition<"head">;
    form: {
        (options?: RouteQueryOptions): RouteFormDefinition<"get">;
        get(options?: RouteQueryOptions): RouteFormDefinition<"get">;
        head(options?: RouteQueryOptions): RouteFormDefinition<"get">;
    };
};
/**
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::store
 * @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:38
 * @route '/user/two-factor-recovery-codes'
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
declare const RecoveryCodeController: {
    index: {
        (options?: RouteQueryOptions): RouteDefinition<"get">;
        definition: {
            methods: ["get", "head"];
            url: string;
        };
        url(options?: RouteQueryOptions): string;
        get(options?: RouteQueryOptions): RouteDefinition<"get">;
        head(options?: RouteQueryOptions): RouteDefinition<"head">;
        form: {
            (options?: RouteQueryOptions): RouteFormDefinition<"get">;
            get(options?: RouteQueryOptions): RouteFormDefinition<"get">;
            head(options?: RouteQueryOptions): RouteFormDefinition<"get">;
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
export default RecoveryCodeController;
//# sourceMappingURL=RecoveryCodeController.d.ts.map