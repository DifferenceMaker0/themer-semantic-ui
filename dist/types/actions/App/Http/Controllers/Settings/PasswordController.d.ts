import { type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder';
/**
* @see \App\Http\Controllers\Settings\PasswordController::edit
 * @see app/Http/Controllers/Settings/PasswordController.php:18
 * @route '/settings/password'
 */
export declare const edit: {
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
* @see \App\Http\Controllers\Settings\PasswordController::update
 * @see app/Http/Controllers/Settings/PasswordController.php:26
 * @route '/settings/password'
 */
export declare const update: {
    (options?: RouteQueryOptions): RouteDefinition<"put">;
    definition: {
        methods: ["put"];
        url: string;
    };
    url(options?: RouteQueryOptions): string;
    put(options?: RouteQueryOptions): RouteDefinition<"put">;
    form: {
        (options?: RouteQueryOptions): RouteFormDefinition<"post">;
        put(options?: RouteQueryOptions): RouteFormDefinition<"post">;
    };
};
declare const PasswordController: {
    edit: {
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
    update: {
        (options?: RouteQueryOptions): RouteDefinition<"put">;
        definition: {
            methods: ["put"];
            url: string;
        };
        url(options?: RouteQueryOptions): string;
        put(options?: RouteQueryOptions): RouteDefinition<"put">;
        form: {
            (options?: RouteQueryOptions): RouteFormDefinition<"post">;
            put(options?: RouteQueryOptions): RouteFormDefinition<"post">;
        };
    };
};
export default PasswordController;
//# sourceMappingURL=PasswordController.d.ts.map