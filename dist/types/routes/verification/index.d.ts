import { type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder';
/**
* @see \App\Http\Controllers\Auth\EmailVerificationPromptController::__invoke
 * @see app/Http/Controllers/Auth/EmailVerificationPromptController.php:16
 * @route '/verify-email'
 */
export declare const notice: {
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
* @see \App\Http\Controllers\Auth\VerifyEmailController::__invoke
 * @see app/Http/Controllers/Auth/VerifyEmailController.php:14
 * @route '/verify-email/{id}/{hash}'
 */
export declare const verify: {
    (args: {
        id: string | number;
        hash: string | number;
    } | [id: string | number, hash: string | number], options?: RouteQueryOptions): RouteDefinition<"get">;
    definition: {
        methods: ["get", "head"];
        url: string;
    };
    url(args: {
        id: string | number;
        hash: string | number;
    } | [id: string | number, hash: string | number], options?: RouteQueryOptions): string;
    get(args: {
        id: string | number;
        hash: string | number;
    } | [id: string | number, hash: string | number], options?: RouteQueryOptions): RouteDefinition<"get">;
    head(args: {
        id: string | number;
        hash: string | number;
    } | [id: string | number, hash: string | number], options?: RouteQueryOptions): RouteDefinition<"head">;
    form: {
        (args: {
            id: string | number;
            hash: string | number;
        } | [id: string | number, hash: string | number], options?: RouteQueryOptions): RouteFormDefinition<"get">;
        get(args: {
            id: string | number;
            hash: string | number;
        } | [id: string | number, hash: string | number], options?: RouteQueryOptions): RouteFormDefinition<"get">;
        head(args: {
            id: string | number;
            hash: string | number;
        } | [id: string | number, hash: string | number], options?: RouteQueryOptions): RouteFormDefinition<"get">;
    };
};
/**
* @see \App\Http\Controllers\Auth\EmailVerificationNotificationController::send
 * @see app/Http/Controllers/Auth/EmailVerificationNotificationController.php:14
 * @route '/email/verification-notification'
 */
export declare const send: {
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
declare const verification: {
    notice: {
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
    verify: {
        (args: {
            id: string | number;
            hash: string | number;
        } | [id: string | number, hash: string | number], options?: RouteQueryOptions): RouteDefinition<"get">;
        definition: {
            methods: ["get", "head"];
            url: string;
        };
        url(args: {
            id: string | number;
            hash: string | number;
        } | [id: string | number, hash: string | number], options?: RouteQueryOptions): string;
        get(args: {
            id: string | number;
            hash: string | number;
        } | [id: string | number, hash: string | number], options?: RouteQueryOptions): RouteDefinition<"get">;
        head(args: {
            id: string | number;
            hash: string | number;
        } | [id: string | number, hash: string | number], options?: RouteQueryOptions): RouteDefinition<"head">;
        form: {
            (args: {
                id: string | number;
                hash: string | number;
            } | [id: string | number, hash: string | number], options?: RouteQueryOptions): RouteFormDefinition<"get">;
            get(args: {
                id: string | number;
                hash: string | number;
            } | [id: string | number, hash: string | number], options?: RouteQueryOptions): RouteFormDefinition<"get">;
            head(args: {
                id: string | number;
                hash: string | number;
            } | [id: string | number, hash: string | number], options?: RouteQueryOptions): RouteFormDefinition<"get">;
        };
    };
    send: {
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
export default verification;
//# sourceMappingURL=index.d.ts.map