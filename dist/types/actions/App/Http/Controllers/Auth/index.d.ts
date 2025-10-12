declare const Auth: {
    AuthenticatedSessionController: {
        create: {
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
        store: {
            (options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteDefinition<"post">;
            definition: {
                methods: ["post"];
                url: string;
            };
            url(options?: import("../../../../../wayfinder").RouteQueryOptions): string;
            post(options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteDefinition<"post">;
            form: {
                (options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteFormDefinition<"post">;
                post(options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteFormDefinition<"post">;
            };
        };
        destroy: {
            (options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteDefinition<"post">;
            definition: {
                methods: ["post"];
                url: string;
            };
            url(options?: import("../../../../../wayfinder").RouteQueryOptions): string;
            post(options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteDefinition<"post">;
            form: {
                (options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteFormDefinition<"post">;
                post(options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteFormDefinition<"post">;
            };
        };
    };
    RegisteredUserController: {
        create: {
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
        store: {
            (options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteDefinition<"post">;
            definition: {
                methods: ["post"];
                url: string;
            };
            url(options?: import("../../../../../wayfinder").RouteQueryOptions): string;
            post(options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteDefinition<"post">;
            form: {
                (options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteFormDefinition<"post">;
                post(options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteFormDefinition<"post">;
            };
        };
    };
    PasswordResetLinkController: {
        create: {
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
        store: {
            (options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteDefinition<"post">;
            definition: {
                methods: ["post"];
                url: string;
            };
            url(options?: import("../../../../../wayfinder").RouteQueryOptions): string;
            post(options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteDefinition<"post">;
            form: {
                (options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteFormDefinition<"post">;
                post(options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteFormDefinition<"post">;
            };
        };
    };
    NewPasswordController: {
        create: {
            (args: {
                token: string | number;
            } | [token: string | number] | string | number, options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteDefinition<"get">;
            definition: {
                methods: ["get", "head"];
                url: string;
            };
            url(args: {
                token: string | number;
            } | [token: string | number] | string | number, options?: import("../../../../../wayfinder").RouteQueryOptions): string;
            get(args: {
                token: string | number;
            } | [token: string | number] | string | number, options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteDefinition<"get">;
            head(args: {
                token: string | number;
            } | [token: string | number] | string | number, options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteDefinition<"head">;
            form: {
                (args: {
                    token: string | number;
                } | [token: string | number] | string | number, options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteFormDefinition<"get">;
                get(args: {
                    token: string | number;
                } | [token: string | number] | string | number, options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteFormDefinition<"get">;
                head(args: {
                    token: string | number;
                } | [token: string | number] | string | number, options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteFormDefinition<"get">;
            };
        };
        store: {
            (options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteDefinition<"post">;
            definition: {
                methods: ["post"];
                url: string;
            };
            url(options?: import("../../../../../wayfinder").RouteQueryOptions): string;
            post(options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteDefinition<"post">;
            form: {
                (options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteFormDefinition<"post">;
                post(options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteFormDefinition<"post">;
            };
        };
    };
    EmailVerificationPromptController: {
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
    VerifyEmailController: {
        (args: {
            id: string | number;
            hash: string | number;
        } | [id: string | number, hash: string | number], options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteDefinition<"get">;
        definition: {
            methods: ["get", "head"];
            url: string;
        };
        url(args: {
            id: string | number;
            hash: string | number;
        } | [id: string | number, hash: string | number], options?: import("../../../../../wayfinder").RouteQueryOptions): string;
        get(args: {
            id: string | number;
            hash: string | number;
        } | [id: string | number, hash: string | number], options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteDefinition<"get">;
        head(args: {
            id: string | number;
            hash: string | number;
        } | [id: string | number, hash: string | number], options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteDefinition<"head">;
        form: {
            (args: {
                id: string | number;
                hash: string | number;
            } | [id: string | number, hash: string | number], options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteFormDefinition<"get">;
            get(args: {
                id: string | number;
                hash: string | number;
            } | [id: string | number, hash: string | number], options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteFormDefinition<"get">;
            head(args: {
                id: string | number;
                hash: string | number;
            } | [id: string | number, hash: string | number], options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteFormDefinition<"get">;
        };
    };
    EmailVerificationNotificationController: {
        store: {
            (options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteDefinition<"post">;
            definition: {
                methods: ["post"];
                url: string;
            };
            url(options?: import("../../../../../wayfinder").RouteQueryOptions): string;
            post(options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteDefinition<"post">;
            form: {
                (options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteFormDefinition<"post">;
                post(options?: import("../../../../../wayfinder").RouteQueryOptions): import("../../../../../wayfinder").RouteFormDefinition<"post">;
            };
        };
    };
};
export default Auth;
//# sourceMappingURL=index.d.ts.map