import { type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder';
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmedPasswordStatusController::show
 * @see vendor/laravel/fortify/src/Http/Controllers/ConfirmedPasswordStatusController.php:17
 * @route '/user/confirmed-password-status'
 */
export declare const show: {
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
declare const ConfirmedPasswordStatusController: {
    show: {
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
};
export default ConfirmedPasswordStatusController;
//# sourceMappingURL=ConfirmedPasswordStatusController.d.ts.map