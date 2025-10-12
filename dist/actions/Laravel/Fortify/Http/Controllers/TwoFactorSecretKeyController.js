import { queryParams } from './../../../../../wayfinder';
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorSecretKeyController::show
 * @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorSecretKeyController.php:17
 * @route '/user/two-factor-secret-key'
 */
export const show = (options) => ({
    url: show.url(options),
    method: 'get',
});
show.definition = {
    methods: ["get", "head"],
    url: '/user/two-factor-secret-key',
};
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorSecretKeyController::show
 * @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorSecretKeyController.php:17
 * @route '/user/two-factor-secret-key'
 */
show.url = (options) => {
    return show.definition.url + queryParams(options);
};
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorSecretKeyController::show
 * @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorSecretKeyController.php:17
 * @route '/user/two-factor-secret-key'
 */
show.get = (options) => ({
    url: show.url(options),
    method: 'get',
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorSecretKeyController::show
 * @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorSecretKeyController.php:17
 * @route '/user/two-factor-secret-key'
 */
show.head = (options) => ({
    url: show.url(options),
    method: 'head',
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorSecretKeyController::show
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorSecretKeyController.php:17
* @route '/user/two-factor-secret-key'
*/
const showForm = (options) => ({
    action: show.url(options),
    method: 'get',
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorSecretKeyController::show
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorSecretKeyController.php:17
* @route '/user/two-factor-secret-key'
*/
showForm.get = (options) => ({
    action: show.url(options),
    method: 'get',
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorSecretKeyController::show
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorSecretKeyController.php:17
* @route '/user/two-factor-secret-key'
*/
showForm.head = (options) => ({
    action: show.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
});
show.form = showForm;
const TwoFactorSecretKeyController = { show };
export default TwoFactorSecretKeyController;
//# sourceMappingURL=TwoFactorSecretKeyController.js.map