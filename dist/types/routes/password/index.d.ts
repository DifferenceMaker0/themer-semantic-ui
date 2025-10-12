import { type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder';
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmablePasswordController::confirm
 * @see vendor/laravel/fortify/src/Http/Controllers/ConfirmablePasswordController.php:40
 * @route '/user/confirm-password'
 */
export declare const confirm: {
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
* @see \Laravel\Fortify\Http\Controllers\ConfirmedPasswordStatusController::confirmation
 * @see vendor/laravel/fortify/src/Http/Controllers/ConfirmedPasswordStatusController.php:17
 * @route '/user/confirmed-password-status'
 */
export declare const confirmation: {
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
/**
* @see \App\Http\Controllers\Auth\PasswordResetLinkController::request
 * @see app/Http/Controllers/Auth/PasswordResetLinkController.php:17
 * @route '/forgot-password'
 */
export declare const request: {
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
* @see \App\Http\Controllers\Auth\PasswordResetLinkController::email
 * @see app/Http/Controllers/Auth/PasswordResetLinkController.php:29
 * @route '/forgot-password'
 */
export declare const email: {
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
/**
* @see \App\Http\Controllers\Auth\NewPasswordController::reset
 * @see app/Http/Controllers/Auth/NewPasswordController.php:23
 * @route '/reset-password/{token}'
 */
export declare const reset: {
    (args: {
        token: string | number;
    } | [token: string | number] | string | number, options?: RouteQueryOptions): RouteDefinition<"get">;
    definition: {
        methods: ["get", "head"];
        url: string;
    };
    url(args: {
        token: string | number;
    } | [token: string | number] | string | number, options?: RouteQueryOptions): string;
    get(args: {
        token: string | number;
    } | [token: string | number] | string | number, options?: RouteQueryOptions): RouteDefinition<"get">;
    head(args: {
        token: string | number;
    } | [token: string | number] | string | number, options?: RouteQueryOptions): RouteDefinition<"head">;
    form: {
        (args: {
            token: string | number;
        } | [token: string | number] | string | number, options?: RouteQueryOptions): RouteFormDefinition<"get">;
        get(args: {
            token: string | number;
        } | [token: string | number] | string | number, options?: RouteQueryOptions): RouteFormDefinition<"get">;
        head(args: {
            token: string | number;
        } | [token: string | number] | string | number, options?: RouteQueryOptions): RouteFormDefinition<"get">;
    };
};
/**
* @see \App\Http\Controllers\Auth\NewPasswordController::store
 * @see app/Http/Controllers/Auth/NewPasswordController.php:36
 * @route '/reset-password'
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
declare const password: {
    confirm: {
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
    } & {
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
    confirmation: {
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
    request: {
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
    email: {
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
    reset: {
        (args: {
            token: string | number;
        } | [token: string | number] | string | number, options?: RouteQueryOptions): RouteDefinition<"get">;
        definition: {
            methods: ["get", "head"];
            url: string;
        };
        url(args: {
            token: string | number;
        } | [token: string | number] | string | number, options?: RouteQueryOptions): string;
        get(args: {
            token: string | number;
        } | [token: string | number] | string | number, options?: RouteQueryOptions): RouteDefinition<"get">;
        head(args: {
            token: string | number;
        } | [token: string | number] | string | number, options?: RouteQueryOptions): RouteDefinition<"head">;
        form: {
            (args: {
                token: string | number;
            } | [token: string | number] | string | number, options?: RouteQueryOptions): RouteFormDefinition<"get">;
            get(args: {
                token: string | number;
            } | [token: string | number] | string | number, options?: RouteQueryOptions): RouteFormDefinition<"get">;
            head(args: {
                token: string | number;
            } | [token: string | number] | string | number, options?: RouteQueryOptions): RouteFormDefinition<"get">;
        };
    };
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
export default password;
//# sourceMappingURL=index.d.ts.map