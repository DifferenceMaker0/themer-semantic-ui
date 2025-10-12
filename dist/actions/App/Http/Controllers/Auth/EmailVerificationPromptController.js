import { queryParams } from './../../../../../wayfinder';
/**
* @see \App\Http\Controllers\Auth\EmailVerificationPromptController::__invoke
 * @see app/Http/Controllers/Auth/EmailVerificationPromptController.php:16
 * @route '/verify-email'
 */
const EmailVerificationPromptController = (options) => ({
    url: EmailVerificationPromptController.url(options),
    method: 'get',
});
EmailVerificationPromptController.definition = {
    methods: ["get", "head"],
    url: '/verify-email',
};
/**
* @see \App\Http\Controllers\Auth\EmailVerificationPromptController::__invoke
 * @see app/Http/Controllers/Auth/EmailVerificationPromptController.php:16
 * @route '/verify-email'
 */
EmailVerificationPromptController.url = (options) => {
    return EmailVerificationPromptController.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\Auth\EmailVerificationPromptController::__invoke
 * @see app/Http/Controllers/Auth/EmailVerificationPromptController.php:16
 * @route '/verify-email'
 */
EmailVerificationPromptController.get = (options) => ({
    url: EmailVerificationPromptController.url(options),
    method: 'get',
});
/**
* @see \App\Http\Controllers\Auth\EmailVerificationPromptController::__invoke
 * @see app/Http/Controllers/Auth/EmailVerificationPromptController.php:16
 * @route '/verify-email'
 */
EmailVerificationPromptController.head = (options) => ({
    url: EmailVerificationPromptController.url(options),
    method: 'head',
});
/**
* @see \App\Http\Controllers\Auth\EmailVerificationPromptController::__invoke
* @see app/Http/Controllers/Auth/EmailVerificationPromptController.php:16
* @route '/verify-email'
*/
const EmailVerificationPromptControllerForm = (options) => ({
    action: EmailVerificationPromptController.url(options),
    method: 'get',
});
/**
* @see \App\Http\Controllers\Auth\EmailVerificationPromptController::__invoke
* @see app/Http/Controllers/Auth/EmailVerificationPromptController.php:16
* @route '/verify-email'
*/
EmailVerificationPromptControllerForm.get = (options) => ({
    action: EmailVerificationPromptController.url(options),
    method: 'get',
});
/**
* @see \App\Http\Controllers\Auth\EmailVerificationPromptController::__invoke
* @see app/Http/Controllers/Auth/EmailVerificationPromptController.php:16
* @route '/verify-email'
*/
EmailVerificationPromptControllerForm.head = (options) => ({
    action: EmailVerificationPromptController.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
});
EmailVerificationPromptController.form = EmailVerificationPromptControllerForm;
export default EmailVerificationPromptController;
//# sourceMappingURL=EmailVerificationPromptController.js.map