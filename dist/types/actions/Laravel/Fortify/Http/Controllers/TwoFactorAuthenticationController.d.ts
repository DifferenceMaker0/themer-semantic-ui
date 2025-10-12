import { type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder';
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticationController::store
 * @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticationController.php:21
 * @route '/user/two-factor-authentication'
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
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticationController::destroy
 * @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticationController.php:35
 * @route '/user/two-factor-authentication'
 */
export declare const destroy: {
    (options?: RouteQueryOptions): RouteDefinition<"delete">;
    definition: {
        methods: ["delete"];
        url: string;
    };
    url(options?: RouteQueryOptions): string;
    delete(options?: RouteQueryOptions): RouteDefinition<"delete">;
    form: {
        (options?: RouteQueryOptions): RouteFormDefinition<"post">;
        delete(options?: RouteQueryOptions): RouteFormDefinition<"post">;
    };
};
declare const TwoFactorAuthenticationController: {
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
    destroy: {
        (options?: RouteQueryOptions): RouteDefinition<"delete">;
        definition: {
            methods: ["delete"];
            url: string;
        };
        url(options?: RouteQueryOptions): string;
        delete(options?: RouteQueryOptions): RouteDefinition<"delete">;
        form: {
            (options?: RouteQueryOptions): RouteFormDefinition<"post">;
            delete(options?: RouteQueryOptions): RouteFormDefinition<"post">;
        };
    };
};
export default TwoFactorAuthenticationController;
//# sourceMappingURL=TwoFactorAuthenticationController.d.ts.map