import { queryParams, applyUrlDefaults } from './../../../../../wayfinder';
/**
* @see \App\Http\Controllers\Auth\VerifyEmailController::__invoke
 * @see app/Http/Controllers/Auth/VerifyEmailController.php:14
 * @route '/verify-email/{id}/{hash}'
 */
const VerifyEmailController = (args, options) => ({
    url: VerifyEmailController.url(args, options),
    method: 'get',
});
VerifyEmailController.definition = {
    methods: ["get", "head"],
    url: '/verify-email/{id}/{hash}',
};
/**
* @see \App\Http\Controllers\Auth\VerifyEmailController::__invoke
 * @see app/Http/Controllers/Auth/VerifyEmailController.php:14
 * @route '/verify-email/{id}/{hash}'
 */
VerifyEmailController.url = (args, options) => {
    if (Array.isArray(args)) {
        args = {
            id: args[0],
            hash: args[1],
        };
    }
    args = applyUrlDefaults(args);
    const parsedArgs = {
        id: args.id,
        hash: args.hash,
    };
    return VerifyEmailController.definition.url
        .replace('{id}', parsedArgs.id.toString())
        .replace('{hash}', parsedArgs.hash.toString())
        .replace(/\/+$/, '') + queryParams(options);
};
/**
* @see \App\Http\Controllers\Auth\VerifyEmailController::__invoke
 * @see app/Http/Controllers/Auth/VerifyEmailController.php:14
 * @route '/verify-email/{id}/{hash}'
 */
VerifyEmailController.get = (args, options) => ({
    url: VerifyEmailController.url(args, options),
    method: 'get',
});
/**
* @see \App\Http\Controllers\Auth\VerifyEmailController::__invoke
 * @see app/Http/Controllers/Auth/VerifyEmailController.php:14
 * @route '/verify-email/{id}/{hash}'
 */
VerifyEmailController.head = (args, options) => ({
    url: VerifyEmailController.url(args, options),
    method: 'head',
});
/**
* @see \App\Http\Controllers\Auth\VerifyEmailController::__invoke
* @see app/Http/Controllers/Auth/VerifyEmailController.php:14
* @route '/verify-email/{id}/{hash}'
*/
const VerifyEmailControllerForm = (args, options) => ({
    action: VerifyEmailController.url(args, options),
    method: 'get',
});
/**
* @see \App\Http\Controllers\Auth\VerifyEmailController::__invoke
* @see app/Http/Controllers/Auth/VerifyEmailController.php:14
* @route '/verify-email/{id}/{hash}'
*/
VerifyEmailControllerForm.get = (args, options) => ({
    action: VerifyEmailController.url(args, options),
    method: 'get',
});
/**
* @see \App\Http\Controllers\Auth\VerifyEmailController::__invoke
* @see app/Http/Controllers/Auth/VerifyEmailController.php:14
* @route '/verify-email/{id}/{hash}'
*/
VerifyEmailControllerForm.head = (args, options) => ({
    action: VerifyEmailController.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
});
VerifyEmailController.form = VerifyEmailControllerForm;
export default VerifyEmailController;
//# sourceMappingURL=VerifyEmailController.js.map