import { type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder';
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticatedSessionController.php:42
 * @route '/two-factor-challenge'
 */
export declare const login: {
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
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticationController::enable
 * @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticationController.php:21
 * @route '/user/two-factor-authentication'
 */
export declare const enable: {
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
* @see \Laravel\Fortify\Http\Controllers\ConfirmedTwoFactorAuthenticationController::confirm
 * @see vendor/laravel/fortify/src/Http/Controllers/ConfirmedTwoFactorAuthenticationController.php:19
 * @route '/user/confirmed-two-factor-authentication'
 */
export declare const confirm: {
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
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticationController::disable
 * @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticationController.php:35
 * @route '/user/two-factor-authentication'
 */
export declare const disable: {
    (options?: RouteQueryOptions): RouteDefinition<"delete">;
    definition: {
        methods: ["delete"];
        url: string;
    };
    url(options?: RouteQueryOptions): string;
    delete(options?: RouteQueryOptions): RouteDefinition<"delete">;
    form: {
        (options?: RouteQueryOptions): RouteFormDefinition<"post">;
        delete(options?: RouteQueryOptions): RouteFormDefinition<"post">;
    };
};
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorQrCodeController::qrCode
 * @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorQrCodeController.php:16
 * @route '/user/two-factor-qr-code'
 */
export declare const qrCode: {
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
* @see \Laravel\Fortify\Http\Controllers\TwoFactorSecretKeyController::secretKey
 * @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorSecretKeyController.php:17
 * @route '/user/two-factor-secret-key'
 */
export declare const secretKey: {
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
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::recoveryCodes
 * @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:19
 * @route '/user/two-factor-recovery-codes'
 */
export declare const recoveryCodes: {
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
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::regenerateRecoveryCodes
 * @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:38
 * @route '/user/two-factor-recovery-codes'
 */
export declare const regenerateRecoveryCodes: {
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
* @see \App\Http\Controllers\Settings\TwoFactorAuthenticationController::show
 * @see app/Http/Controllers/Settings/TwoFactorAuthenticationController.php:28
 * @route '/settings/two-factor'
 */
export declare const show: {
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
declare const twoFactor: {
    login: {
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
    enable: {
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
    confirm: {
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
    disable: {
        (options?: RouteQueryOptions): RouteDefinition<"delete">;
        definition: {
            methods: ["delete"];
            url: string;
        };
        url(options?: RouteQueryOptions): string;
        delete(options?: RouteQueryOptions): RouteDefinition<"delete">;
        form: {
            (options?: RouteQueryOptions): RouteFormDefinition<"post">;
            delete(options?: RouteQueryOptions): RouteFormDefinition<"post">;
        };
    };
    qrCode: {
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
    secretKey: {
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
    recoveryCodes: {
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
    regenerateRecoveryCodes: {
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
    show: {
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
};
export default twoFactor;
//# sourceMappingURL=index.d.ts.map