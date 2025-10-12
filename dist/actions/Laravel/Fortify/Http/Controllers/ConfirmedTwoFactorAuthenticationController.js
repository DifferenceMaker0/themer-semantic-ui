import { queryParams } from './../../../../../wayfinder';
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmedTwoFactorAuthenticationController::store
 * @see vendor/laravel/fortify/src/Http/Controllers/ConfirmedTwoFactorAuthenticationController.php:19
 * @route '/user/confirmed-two-factor-authentication'
 */
export const store = (options) => ({
    url: store.url(options),
    method: 'post',
});
store.definition = {
    methods: ["post"],
    url: '/user/confirmed-two-factor-authentication',
};
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmedTwoFactorAuthenticationController::store
 * @see vendor/laravel/fortify/src/Http/Controllers/ConfirmedTwoFactorAuthenticationController.php:19
 * @route '/user/confirmed-two-factor-authentication'
 */
store.url = (options) => {
    return store.definition.url + queryParams(options);
};
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmedTwoFactorAuthenticationController::store
 * @see vendor/laravel/fortify/src/Http/Controllers/ConfirmedTwoFactorAuthenticationController.php:19
 * @route '/user/confirmed-two-factor-authentication'
 */
store.post = (options) => ({
    url: store.url(options),
    method: 'post',
});
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmedTwoFactorAuthenticationController::store
* @see vendor/laravel/fortify/src/Http/Controllers/ConfirmedTwoFactorAuthenticationController.php:19
* @route '/user/confirmed-two-factor-authentication'
*/
const storeForm = (options) => ({
    action: store.url(options),
    method: 'post',
});
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmedTwoFactorAuthenticationController::store
* @see vendor/laravel/fortify/src/Http/Controllers/ConfirmedTwoFactorAuthenticationController.php:19
* @route '/user/confirmed-two-factor-authentication'
*/
storeForm.post = (options) => ({
    action: store.url(options),
    method: 'post',
});
store.form = storeForm;
const ConfirmedTwoFactorAuthenticationController = { store };
export default ConfirmedTwoFactorAuthenticationController;
//# sourceMappingURL=ConfirmedTwoFactorAuthenticationController.js.map