declare const Illuminate: {
    Routing: {
        RedirectController: {
            (options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteDefinition<"get">;
            definition: {
                methods: ["get", "head", "post", "put", "patch", "delete", "options"];
                url: string;
            };
            url(options?: import("../../wayfinder").RouteQueryOptions): string;
            get(options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteDefinition<"get">;
            head(options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteDefinition<"head">;
            post(options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteDefinition<"post">;
            put(options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteDefinition<"put">;
            patch(options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteDefinition<"patch">;
            delete(options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteDefinition<"delete">;
            options(options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteDefinition<"options">;
            form: {
                (options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteFormDefinition<"get">;
                get(options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteFormDefinition<"get">;
                head(options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteFormDefinition<"get">;
                post(options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteFormDefinition<"post">;
                put(options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteFormDefinition<"post">;
                patch(options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteFormDefinition<"post">;
                delete(options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteFormDefinition<"post">;
                options(options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteFormDefinition<"get">;
            };
        };
    };
};
export default Illuminate;
//# sourceMappingURL=index.d.ts.map