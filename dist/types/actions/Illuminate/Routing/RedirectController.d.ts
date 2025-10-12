import { type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder';
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/settings'
 */
declare const RedirectController: {
    (options?: RouteQueryOptions): RouteDefinition<"get">;
    definition: {
        methods: ["get", "head", "post", "put", "patch", "delete", "options"];
        url: string;
    };
    url(options?: RouteQueryOptions): string;
    get(options?: RouteQueryOptions): RouteDefinition<"get">;
    head(options?: RouteQueryOptions): RouteDefinition<"head">;
    post(options?: RouteQueryOptions): RouteDefinition<"post">;
    put(options?: RouteQueryOptions): RouteDefinition<"put">;
    patch(options?: RouteQueryOptions): RouteDefinition<"patch">;
    delete(options?: RouteQueryOptions): RouteDefinition<"delete">;
    options(options?: RouteQueryOptions): RouteDefinition<"options">;
    form: {
        (options?: RouteQueryOptions): RouteFormDefinition<"get">;
        get(options?: RouteQueryOptions): RouteFormDefinition<"get">;
        head(options?: RouteQueryOptions): RouteFormDefinition<"get">;
        post(options?: RouteQueryOptions): RouteFormDefinition<"post">;
        put(options?: RouteQueryOptions): RouteFormDefinition<"post">;
        patch(options?: RouteQueryOptions): RouteFormDefinition<"post">;
        delete(options?: RouteQueryOptions): RouteFormDefinition<"post">;
        options(options?: RouteQueryOptions): RouteFormDefinition<"get">;
    };
};
export default RedirectController;
//# sourceMappingURL=RedirectController.d.ts.map