import { type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder';
/**
 * @see vendor/laravel/framework/src/Illuminate/Filesystem/FilesystemServiceProvider.php:98
 * @route '/storage/{path}'
 */
export declare const local: {
    (args: {
        path: string | number;
    } | [path: string | number] | string | number, options?: RouteQueryOptions): RouteDefinition<"get">;
    definition: {
        methods: ["get", "head"];
        url: string;
    };
    url(args: {
        path: string | number;
    } | [path: string | number] | string | number, options?: RouteQueryOptions): string;
    get(args: {
        path: string | number;
    } | [path: string | number] | string | number, options?: RouteQueryOptions): RouteDefinition<"get">;
    head(args: {
        path: string | number;
    } | [path: string | number] | string | number, options?: RouteQueryOptions): RouteDefinition<"head">;
    form: {
        (args: {
            path: string | number;
        } | [path: string | number] | string | number, options?: RouteQueryOptions): RouteFormDefinition<"get">;
        get(args: {
            path: string | number;
        } | [path: string | number] | string | number, options?: RouteQueryOptions): RouteFormDefinition<"get">;
        head(args: {
            path: string | number;
        } | [path: string | number] | string | number, options?: RouteQueryOptions): RouteFormDefinition<"get">;
    };
};
declare const storage: {
    local: {
        (args: {
            path: string | number;
        } | [path: string | number] | string | number, options?: RouteQueryOptions): RouteDefinition<"get">;
        definition: {
            methods: ["get", "head"];
            url: string;
        };
        url(args: {
            path: string | number;
        } | [path: string | number] | string | number, options?: RouteQueryOptions): string;
        get(args: {
            path: string | number;
        } | [path: string | number] | string | number, options?: RouteQueryOptions): RouteDefinition<"get">;
        head(args: {
            path: string | number;
        } | [path: string | number] | string | number, options?: RouteQueryOptions): RouteDefinition<"head">;
        form: {
            (args: {
                path: string | number;
            } | [path: string | number] | string | number, options?: RouteQueryOptions): RouteFormDefinition<"get">;
            get(args: {
                path: string | number;
            } | [path: string | number] | string | number, options?: RouteQueryOptions): RouteFormDefinition<"get">;
            head(args: {
                path: string | number;
            } | [path: string | number] | string | number, options?: RouteQueryOptions): RouteFormDefinition<"get">;
        };
    };
};
export default storage;
//# sourceMappingURL=index.d.ts.map