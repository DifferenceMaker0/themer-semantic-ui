import { queryParams } from './../../../../../wayfinder';
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticationController::store
 * @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticationController.php:21
 * @route '/user/two-factor-authentication'
 */
export const store = (options) => ({
    url: store.url(options),
    method: 'post',
});
store.definition = {
    methods: ["post"],
    url: '/user/two-factor-authentication',
};
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticationController::store
 * @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticationController.php:21
 * @route '/user/two-factor-authentication'
 */
store.url = (options) => {
    return store.definition.url + queryParams(options);
};
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticationController::store
 * @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticationController.php:21
 * @route '/user/two-factor-authentication'
 */
store.post = (options) => ({
    url: store.url(options),
    method: 'post',
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticationController::store
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticationController.php:21
* @route '/user/two-factor-authentication'
*/
const storeForm = (options) => ({
    action: store.url(options),
    method: 'post',
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticationController::store
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticationController.php:21
* @route '/user/two-factor-authentication'
*/
storeForm.post = (options) => ({
    action: store.url(options),
    method: 'post',
});
store.form = storeForm;
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticationController::destroy
 * @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticationController.php:35
 * @route '/user/two-factor-authentication'
 */
export const destroy = (options) => ({
    url: destroy.url(options),
    method: 'delete',
});
destroy.definition = {
    methods: ["delete"],
    url: '/user/two-factor-authentication',
};
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticationController::destroy
 * @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticationController.php:35
 * @route '/user/two-factor-authentication'
 */
destroy.url = (options) => {
    return destroy.definition.url + queryParams(options);
};
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticationController::destroy
 * @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticationController.php:35
 * @route '/user/two-factor-authentication'
 */
destroy.delete = (options) => ({
    url: destroy.url(options),
    method: 'delete',
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticationController::destroy
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticationController.php:35
* @route '/user/two-factor-authentication'
*/
const destroyForm = (options) => ({
    action: destroy.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticationController::destroy
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticationController.php:35
* @route '/user/two-factor-authentication'
*/
destroyForm.delete = (options) => ({
    action: destroy.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
});
destroy.form = destroyForm;
const TwoFactorAuthenticationController = { store, destroy };
export default TwoFactorAuthenticationController;
//# sourceMappingURL=TwoFactorAuthenticationController.js.map