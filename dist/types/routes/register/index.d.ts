import { type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder';
/**
* @see \App\Http\Controllers\Auth\RegisteredUserController::store
 * @see app/Http/Controllers/Auth/RegisteredUserController.php:31
 * @route '/register'
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
declare const register: {
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
export default register;
//# sourceMappingURL=index.d.ts.map