declare const App: {
    Http: {
        Controllers: {
            Auth: {
                AuthenticatedSessionController: {
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
                    destroy: {
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
                RegisteredUserController: {
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
                PasswordResetLinkController: {
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
                NewPasswordController: {
                    create: {
                        (args: {
                            token: string | number;
                        } | [token: string | number] | string | number, options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteDefinition<"get">;
                        definition: {
                            methods: ["get", "head"];
                            url: string;
                        };
                        url(args: {
                            token: string | number;
                        } | [token: string | number] | string | number, options?: import("../../wayfinder").RouteQueryOptions): string;
                        get(args: {
                            token: string | number;
                        } | [token: string | number] | string | number, options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteDefinition<"get">;
                        head(args: {
                            token: string | number;
                        } | [token: string | number] | string | number, options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteDefinition<"head">;
                        form: {
                            (args: {
                                token: string | number;
                            } | [token: string | number] | string | number, options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteFormDefinition<"get">;
                            get(args: {
                                token: string | number;
                            } | [token: string | number] | string | number, options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteFormDefinition<"get">;
                            head(args: {
                                token: string | number;
                            } | [token: string | number] | string | number, options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteFormDefinition<"get">;
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
                EmailVerificationPromptController: {
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
                VerifyEmailController: {
                    (args: {
                        id: string | number;
                        hash: string | number;
                    } | [id: string | number, hash: string | number], options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteDefinition<"get">;
                    definition: {
                        methods: ["get", "head"];
                        url: string;
                    };
                    url(args: {
                        id: string | number;
                        hash: string | number;
                    } | [id: string | number, hash: string | number], options?: import("../../wayfinder").RouteQueryOptions): string;
                    get(args: {
                        id: string | number;
                        hash: string | number;
                    } | [id: string | number, hash: string | number], options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteDefinition<"get">;
                    head(args: {
                        id: string | number;
                        hash: string | number;
                    } | [id: string | number, hash: string | number], options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteDefinition<"head">;
                    form: {
                        (args: {
                            id: string | number;
                            hash: string | number;
                        } | [id: string | number, hash: string | number], options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteFormDefinition<"get">;
                        get(args: {
                            id: string | number;
                            hash: string | number;
                        } | [id: string | number, hash: string | number], options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteFormDefinition<"get">;
                        head(args: {
                            id: string | number;
                            hash: string | number;
                        } | [id: string | number, hash: string | number], options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteFormDefinition<"get">;
                    };
                };
                EmailVerificationNotificationController: {
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
            Settings: {
                ProfileController: {
                    edit: {
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
                    update: {
                        (options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteDefinition<"patch">;
                        definition: {
                            methods: ["patch"];
                            url: string;
                        };
                        url(options?: import("../../wayfinder").RouteQueryOptions): string;
                        patch(options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteDefinition<"patch">;
                        form: {
                            (options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteFormDefinition<"post">;
                            patch(options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteFormDefinition<"post">;
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
                PasswordController: {
                    edit: {
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
                    update: {
                        (options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteDefinition<"put">;
                        definition: {
                            methods: ["put"];
                            url: string;
                        };
                        url(options?: import("../../wayfinder").RouteQueryOptions): string;
                        put(options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteDefinition<"put">;
                        form: {
                            (options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteFormDefinition<"post">;
                            put(options?: import("../../wayfinder").RouteQueryOptions): import("../../wayfinder").RouteFormDefinition<"post">;
                        };
                    };
                };
                TwoFactorAuthenticationController: {
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
            };
        };
    };
};
export default App;
//# sourceMappingURL=index.d.ts.map