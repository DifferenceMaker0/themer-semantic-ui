declare const Settings: {
    ProfileController: {
        edit: {
            (options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteDefinition<"get">;
            definition: {
                methods: ["get", "head"];
                url: string;
            };
            url(options?: import("../../../../../wayfinder").RouteQueryOptions): string;
            get(options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteDefinition<"get">;
            head(options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteDefinition<"head">;
            form: {
                (options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteFormDefinition<"get">;
                get(options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteFormDefinition<"get">;
                head(options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteFormDefinition<"get">;
            };
        };
        update: {
            (options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteDefinition<"patch">;
            definition: {
                methods: ["patch"];
                url: string;
            };
            url(options?: import("../../../../../wayfinder").RouteQueryOptions): string;
            patch(options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteDefinition<"patch">;
            form: {
                (options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteFormDefinition<"post">;
                patch(options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteFormDefinition<"post">;
            };
        };
        destroy: {
            (options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteDefinition<"delete">;
            definition: {
                methods: ["delete"];
                url: string;
            };
            url(options?: import("../../../../../wayfinder").RouteQueryOptions): string;
            delete(options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteDefinition<"delete">;
            form: {
                (options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteFormDefinition<"post">;
                delete(options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteFormDefinition<"post">;
            };
        };
    };
    PasswordController: {
        edit: {
            (options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteDefinition<"get">;
            definition: {
                methods: ["get", "head"];
                url: string;
            };
            url(options?: import("../../../../../wayfinder").RouteQueryOptions): string;
            get(options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteDefinition<"get">;
            head(options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteDefinition<"head">;
            form: {
                (options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteFormDefinition<"get">;
                get(options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteFormDefinition<"get">;
                head(options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteFormDefinition<"get">;
            };
        };
        update: {
            (options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteDefinition<"put">;
            definition: {
                methods: ["put"];
                url: string;
            };
            url(options?: import("../../../../../wayfinder").RouteQueryOptions): string;
            put(options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteDefinition<"put">;
            form: {
                (options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteFormDefinition<"post">;
                put(options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteFormDefinition<"post">;
            };
        };
    };
    TwoFactorAuthenticationController: {
        show: {
            (options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteDefinition<"get">;
            definition: {
                methods: ["get", "head"];
                url: string;
            };
            url(options?: import("../../../../../wayfinder").RouteQueryOptions): string;
            get(options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteDefinition<"get">;
            head(options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteDefinition<"head">;
            form: {
                (options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteFormDefinition<"get">;
                get(options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteFormDefinition<"get">;
                head(options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteFormDefinition<"get">;
            };
        };
    };
};
export default Settings;
//# sourceMappingURL=index.d.ts.map