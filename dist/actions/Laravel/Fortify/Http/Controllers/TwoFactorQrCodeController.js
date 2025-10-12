import { queryParams } from './../../../../../wayfinder';
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorQrCodeController::show
 * @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorQrCodeController.php:16
 * @route '/user/two-factor-qr-code'
 */
export const show = (options) => ({
    url: show.url(options),
    method: 'get',
});
show.definition = {
    methods: ["get", "head"],
    url: '/user/two-factor-qr-code',
};
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorQrCodeController::show
 * @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorQrCodeController.php:16
 * @route '/user/two-factor-qr-code'
 */
show.url = (options) => {
    return show.definition.url + queryParams(options);
};
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorQrCodeController::show
 * @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorQrCodeController.php:16
 * @route '/user/two-factor-qr-code'
 */
show.get = (options) => ({
    url: show.url(options),
    method: 'get',
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorQrCodeController::show
 * @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorQrCodeController.php:16
 * @route '/user/two-factor-qr-code'
 */
show.head = (options) => ({
    url: show.url(options),
    method: 'head',
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorQrCodeController::show
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorQrCodeController.php:16
* @route '/user/two-factor-qr-code'
*/
const showForm = (options) => ({
    action: show.url(options),
    method: 'get',
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorQrCodeController::show
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorQrCodeController.php:16
* @route '/user/two-factor-qr-code'
*/
showForm.get = (options) => ({
    action: show.url(options),
    method: 'get',
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorQrCodeController::show
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorQrCodeController.php:16
* @route '/user/two-factor-qr-code'
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
const TwoFactorQrCodeController = { show };
export default TwoFactorQrCodeController;
//# sourceMappingURL=TwoFactorQrCodeController.js.map