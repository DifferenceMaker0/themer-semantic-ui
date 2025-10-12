import { type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder';
/**
* @see \App\Http\Controllers\Auth\EmailVerificationPromptController::__invoke
 * @see app/Http/Controllers/Auth/EmailVerificationPromptController.php:16
 * @route '/verify-email'
 */
declare const EmailVerificationPromptController: {
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
export default EmailVerificationPromptController;
//# sourceMappingURL=EmailVerificationPromptController.d.ts.map