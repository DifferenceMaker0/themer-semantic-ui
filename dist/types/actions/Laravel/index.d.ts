declare const Laravel: {
    Fortify: {
        Http: {
            Controllers: {
                ConfirmablePasswordController: {
                    show: {
                        (options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteDefinition<"get">;
                        definition: {
                            methods: ["get", "head"];
                            url: string;
                        };
                        url(options?: import("../../wayfinder").RouteQueryOptions): string;
                        get(options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteDefinition<"get">;
                        head(options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteDefinition<"head">;
                        form: {
                            (options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteFormDefinition<"get">;
                            get(options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteFormDefinition<"get">;
                            head(options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteFormDefinition<"get">;
                        };
                    };
                    store: {
                        (options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteDefinition<"post">;
                        definition: {
                            methods: ["post"];
                            url: string;
                        };
                        url(options?: import("../../wayfinder").RouteQueryOptions): string;
                        post(options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteDefinition<"post">;
                        form: {
                            (options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteFormDefinition<"post">;
                            post(options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteFormDefinition<"post">;
                        };
                    };
                };
                ConfirmedPasswordStatusController: {
                    show: {
                        (options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteDefinition<"get">;
                        definition: {
                            methods: ["get", "head"];
                            url: string;
                        };
                        url(options?: import("../../wayfinder").RouteQueryOptions): string;
                        get(options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteDefinition<"get">;
                        head(options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteDefinition<"head">;
                        form: {
                            (options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteFormDefinition<"get">;
                            get(options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteFormDefinition<"get">;
                            head(options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteFormDefinition<"get">;
                        };
                    };
                };
                TwoFactorAuthenticatedSessionController: {
                    create: {
                        (options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteDefinition<"get">;
                        definition: {
                            methods: ["get", "head"];
                            url: string;
                        };
                        url(options?: import("../../wayfinder").RouteQueryOptions): string;
                        get(options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteDefinition<"get">;
                        head(options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteDefinition<"head">;
                        form: {
                            (options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteFormDefinition<"get">;
                            get(options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteFormDefinition<"get">;
                            head(options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteFormDefinition<"get">;
                        };
                    };
                    store: {
                        (options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteDefinition<"post">;
                        definition: {
                            methods: ["post"];
                            url: string;
                        };
                        url(options?: import("../../wayfinder").RouteQueryOptions): string;
                        post(options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteDefinition<"post">;
                        form: {
                            (options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteFormDefinition<"post">;
                            post(options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteFormDefinition<"post">;
                        };
                    };
                };
                TwoFactorAuthenticationController: {
                    store: {
                        (options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteDefinition<"post">;
                        definition: {
                            methods: ["post"];
                            url: string;
                        };
                        url(options?: import("../../wayfinder").RouteQueryOptions): string;
                        post(options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteDefinition<"post">;
                        form: {
                            (options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteFormDefinition<"post">;
                            post(options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteFormDefinition<"post">;
                        };
                    };
                    destroy: {
                        (options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteDefinition<"delete">;
                        definition: {
                            methods: ["delete"];
                            url: string;
                        };
                        url(options?: import("../../wayfinder").RouteQueryOptions): string;
                        delete(options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteDefinition<"delete">;
                        form: {
                            (options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteFormDefinition<"post">;
                            delete(options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteFormDefinition<"post">;
                        };
                    };
                };
                ConfirmedTwoFactorAuthenticationController: {
                    store: {
                        (options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteDefinition<"post">;
                        definition: {
                            methods: ["post"];
                            url: string;
                        };
                        url(options?: import("../../wayfinder").RouteQueryOptions): string;
                        post(options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteDefinition<"post">;
                        form: {
                            (options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteFormDefinition<"post">;
                            post(options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteFormDefinition<"post">;
                        };
                    };
                };
                TwoFactorQrCodeController: {
                    show: {
                        (options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteDefinition<"get">;
                        definition: {
                            methods: ["get", "head"];
                            url: string;
                        };
                        url(options?: import("../../wayfinder").RouteQueryOptions): string;
                        get(options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteDefinition<"get">;
                        head(options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteDefinition<"head">;
                        form: {
                            (options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteFormDefinition<"get">;
                            get(options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteFormDefinition<"get">;
                            head(options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteFormDefinition<"get">;
                        };
                    };
                };
                TwoFactorSecretKeyController: {
                    show: {
                        (options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteDefinition<"get">;
                        definition: {
                            methods: ["get", "head"];
                            url: string;
                        };
                        url(options?: import("../../wayfinder").RouteQueryOptions): string;
                        get(options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteDefinition<"get">;
                        head(options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteDefinition<"head">;
                        form: {
                            (options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteFormDefinition<"get">;
                            get(options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteFormDefinition<"get">;
                            head(options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteFormDefinition<"get">;
                        };
                    };
                };
                RecoveryCodeController: {
                    index: {
                        (options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteDefinition<"get">;
                        definition: {
                            methods: ["get", "head"];
                            url: string;
                        };
                        url(options?: import("../../wayfinder").RouteQueryOptions): string;
                        get(options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteDefinition<"get">;
                        head(options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteDefinition<"head">;
                        form: {
                            (options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteFormDefinition<"get">;
                            get(options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteFormDefinition<"get">;
                            head(options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteFormDefinition<"get">;
                        };
                    };
                    store: {
                        (options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteDefinition<"post">;
                        definition: {
                            methods: ["post"];
                            url: string;
                        };
                        url(options?: import("../../wayfinder").RouteQueryOptions): string;
                        post(options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteDefinition<"post">;
                        form: {
                            (options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteFormDefinition<"post">;
                            post(options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteFormDefinition<"post">;
                        };
                    };
                };
            };
        };
    };
};
export default Laravel;
//# sourceMappingURL=index.d.ts.map