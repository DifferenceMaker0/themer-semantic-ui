import { queryParams } from './../../../../../wayfinder';
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmablePasswordController::show
 * @see vendor/laravel/fortify/src/Http/Controllers/ConfirmablePasswordController.php:40
 * @route '/user/confirm-password'
 */
export const show = (options) => ({
    url: show.url(options),
    method: 'get',
});
show.definition = {
    methods: ["get", "head"],
    url: '/user/confirm-password',
};
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmablePasswordController::show
 * @see vendor/laravel/fortify/src/Http/Controllers/ConfirmablePasswordController.php:40
 * @route '/user/confirm-password'
 */
show.url = (options) => {
    return show.definition.url + queryParams(options);
};
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmablePasswordController::show
 * @see vendor/laravel/fortify/src/Http/Controllers/ConfirmablePasswordController.php:40
 * @route '/user/confirm-password'
 */
show.get = (options) => ({
    url: show.url(options),
    method: 'get',
});
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmablePasswordController::show
 * @see vendor/laravel/fortify/src/Http/Controllers/ConfirmablePasswordController.php:40
 * @route '/user/confirm-password'
 */
show.head = (options) => ({
    url: show.url(options),
    method: 'head',
});
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmablePasswordController::show
* @see vendor/laravel/fortify/src/Http/Controllers/ConfirmablePasswordController.php:40
* @route '/user/confirm-password'
*/
const showForm = (options) => ({
    action: show.url(options),
    method: 'get',
});
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmablePasswordController::show
* @see vendor/laravel/fortify/src/Http/Controllers/ConfirmablePasswordController.php:40
* @route '/user/confirm-password'
*/
showForm.get = (options) => ({
    action: show.url(options),
    method: 'get',
});
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmablePasswordController::show
* @see vendor/laravel/fortify/src/Http/Controllers/ConfirmablePasswordController.php:40
* @route '/user/confirm-password'
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
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmablePasswordController::store
 * @see vendor/laravel/fortify/src/Http/Controllers/ConfirmablePasswordController.php:51
 * @route '/user/confirm-password'
 */
export const store = (options) => ({
    url: store.url(options),
    method: 'post',
});
store.definition = {
    methods: ["post"],
    url: '/user/confirm-password',
};
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmablePasswordController::store
 * @see vendor/laravel/fortify/src/Http/Controllers/ConfirmablePasswordController.php:51
 * @route '/user/confirm-password'
 */
store.url = (options) => {
    return store.definition.url + queryParams(options);
};
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmablePasswordController::store
 * @see vendor/laravel/fortify/src/Http/Controllers/ConfirmablePasswordController.php:51
 * @route '/user/confirm-password'
 */
store.post = (options) => ({
    url: store.url(options),
    method: 'post',
});
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmablePasswordController::store
* @see vendor/laravel/fortify/src/Http/Controllers/ConfirmablePasswordController.php:51
* @route '/user/confirm-password'
*/
const storeForm = (options) => ({
    action: store.url(options),
    method: 'post',
});
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmablePasswordController::store
* @see vendor/laravel/fortify/src/Http/Controllers/ConfirmablePasswordController.php:51
* @route '/user/confirm-password'
*/
storeForm.post = (options) => ({
    action: store.url(options),
    method: 'post',
});
store.form = storeForm;
const ConfirmablePasswordController = { show, store };
export default ConfirmablePasswordController;
//# sourceMappingURL=ConfirmablePasswordController.js.map