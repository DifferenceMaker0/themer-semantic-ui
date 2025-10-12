import { queryParams } from './../../../../../wayfinder';
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmedPasswordStatusController::show
 * @see vendor/laravel/fortify/src/Http/Controllers/ConfirmedPasswordStatusController.php:17
 * @route '/user/confirmed-password-status'
 */
export const show = (options) => ({
    url: show.url(options),
    method: 'get',
});
show.definition = {
    methods: ["get", "head"],
    url: '/user/confirmed-password-status',
};
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmedPasswordStatusController::show
 * @see vendor/laravel/fortify/src/Http/Controllers/ConfirmedPasswordStatusController.php:17
 * @route '/user/confirmed-password-status'
 */
show.url = (options) => {
    return show.definition.url + queryParams(options);
};
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmedPasswordStatusController::show
 * @see vendor/laravel/fortify/src/Http/Controllers/ConfirmedPasswordStatusController.php:17
 * @route '/user/confirmed-password-status'
 */
show.get = (options) => ({
    url: show.url(options),
    method: 'get',
});
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmedPasswordStatusController::show
 * @see vendor/laravel/fortify/src/Http/Controllers/ConfirmedPasswordStatusController.php:17
 * @route '/user/confirmed-password-status'
 */
show.head = (options) => ({
    url: show.url(options),
    method: 'head',
});
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmedPasswordStatusController::show
* @see vendor/laravel/fortify/src/Http/Controllers/ConfirmedPasswordStatusController.php:17
* @route '/user/confirmed-password-status'
*/
const showForm = (options) => ({
    action: show.url(options),
    method: 'get',
});
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmedPasswordStatusController::show
* @see vendor/laravel/fortify/src/Http/Controllers/ConfirmedPasswordStatusController.php:17
* @route '/user/confirmed-password-status'
*/
showForm.get = (options) => ({
    action: show.url(options),
    method: 'get',
});
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmedPasswordStatusController::show
* @see vendor/laravel/fortify/src/Http/Controllers/ConfirmedPasswordStatusController.php:17
* @route '/user/confirmed-password-status'
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
const ConfirmedPasswordStatusController = { show };
export default ConfirmedPasswordStatusController;
//# sourceMappingURL=ConfirmedPasswordStatusController.js.map