import { queryParams } from './../../../wayfinder';
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticatedSessionController::store
 * @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticatedSessionController.php:57
 * @route '/two-factor-challenge'
 */
export const store = (options) => ({
    url: store.url(options),
    method: 'post',
});
store.definition = {
    methods: ["post"],
    url: '/two-factor-challenge',
};
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticatedSessionController::store
 * @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticatedSessionController.php:57
 * @route '/two-factor-challenge'
 */
store.url = (options) => {
    return store.definition.url + queryParams(options);
};
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticatedSessionController::store
 * @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticatedSessionController.php:57
 * @route '/two-factor-challenge'
 */
store.post = (options) => ({
    url: store.url(options),
    method: 'post',
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticatedSessionController::store
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticatedSessionController.php:57
* @route '/two-factor-challenge'
*/
const storeForm = (options) => ({
    action: store.url(options),
    method: 'post',
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticatedSessionController::store
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticatedSessionController.php:57
* @route '/two-factor-challenge'
*/
storeForm.post = (options) => ({
    action: store.url(options),
    method: 'post',
});
store.form = storeForm;
const login = {
    store: Object.assign(store, store),
};
export default login;
//# sourceMappingURL=index.js.map