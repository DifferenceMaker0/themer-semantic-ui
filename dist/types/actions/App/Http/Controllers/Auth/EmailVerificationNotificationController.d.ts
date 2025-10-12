import { type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder';
/**
* @see \App\Http\Controllers\Auth\EmailVerificationNotificationController::store
 * @see app/Http/Controllers/Auth/EmailVerificationNotificationController.php:14
 * @route '/email/verification-notification'
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
declare const EmailVerificationNotificationController: {
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
export default EmailVerificationNotificationController;
//# sourceMappingURL=EmailVerificationNotificationController.d.ts.map