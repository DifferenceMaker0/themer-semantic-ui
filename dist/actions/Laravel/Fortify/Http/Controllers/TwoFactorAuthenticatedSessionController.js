import { queryParams } from './../../../../../wayfinder';
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticatedSessionController::create
 * @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticatedSessionController.php:42
 * @route '/two-factor-challenge'
 */
export const create = (options) => ({
    url: create.url(options),
    method: 'get',
});
create.definition = {
    methods: ["get", "head"],
    url: '/two-factor-challenge',
};
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticatedSessionController::create
 * @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticatedSessionController.php:42
 * @route '/two-factor-challenge'
 */
create.url = (options) => {
    return create.definition.url + queryParams(options);
};
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticatedSessionController::create
 * @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticatedSessionController.php:42
 * @route '/two-factor-challenge'
 */
create.get = (options) => ({
    url: create.url(options),
    method: 'get',
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticatedSessionController::create
 * @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticatedSessionController.php:42
 * @route '/two-factor-challenge'
 */
create.head = (options) => ({
    url: create.url(options),
    method: 'head',
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticatedSessionController::create
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticatedSessionController.php:42
* @route '/two-factor-challenge'
*/
const createForm = (options) => ({
    action: create.url(options),
    method: 'get',
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticatedSessionController::create
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticatedSessionController.php:42
* @route '/two-factor-challenge'
*/
createForm.get = (options) => ({
    action: create.url(options),
    method: 'get',
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticatedSessionController::create
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticatedSessionController.php:42
* @route '/two-factor-challenge'
*/
createForm.head = (options) => ({
    action: create.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
});
create.form = createForm;
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
const TwoFactorAuthenticatedSessionController = { create, store };
export default TwoFactorAuthenticatedSessionController;
//# sourceMappingURL=TwoFactorAuthenticatedSessionController.js.map