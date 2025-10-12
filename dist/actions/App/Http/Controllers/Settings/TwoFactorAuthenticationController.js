import { queryParams } from './../../../../../wayfinder';
/**
* @see \App\Http\Controllers\Settings\TwoFactorAuthenticationController::show
 * @see app/Http/Controllers/Settings/TwoFactorAuthenticationController.php:28
 * @route '/settings/two-factor'
 */
export const show = (options) => ({
    url: show.url(options),
    method: 'get',
});
show.definition = {
    methods: ["get", "head"],
    url: '/settings/two-factor',
};
/**
* @see \App\Http\Controllers\Settings\TwoFactorAuthenticationController::show
 * @see app/Http/Controllers/Settings/TwoFactorAuthenticationController.php:28
 * @route '/settings/two-factor'
 */
show.url = (options) => {
    return show.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\Settings\TwoFactorAuthenticationController::show
 * @see app/Http/Controllers/Settings/TwoFactorAuthenticationController.php:28
 * @route '/settings/two-factor'
 */
show.get = (options) => ({
    url: show.url(options),
    method: 'get',
});
/**
* @see \App\Http\Controllers\Settings\TwoFactorAuthenticationController::show
 * @see app/Http/Controllers/Settings/TwoFactorAuthenticationController.php:28
 * @route '/settings/two-factor'
 */
show.head = (options) => ({
    url: show.url(options),
    method: 'head',
});
/**
* @see \App\Http\Controllers\Settings\TwoFactorAuthenticationController::show
* @see app/Http/Controllers/Settings/TwoFactorAuthenticationController.php:28
* @route '/settings/two-factor'
*/
const showForm = (options) => ({
    action: show.url(options),
    method: 'get',
});
/**
* @see \App\Http\Controllers\Settings\TwoFactorAuthenticationController::show
* @see app/Http/Controllers/Settings/TwoFactorAuthenticationController.php:28
* @route '/settings/two-factor'
*/
showForm.get = (options) => ({
    action: show.url(options),
    method: 'get',
});
/**
* @see \App\Http\Controllers\Settings\TwoFactorAuthenticationController::show
* @see app/Http/Controllers/Settings/TwoFactorAuthenticationController.php:28
* @route '/settings/two-factor'
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
const TwoFactorAuthenticationController = { show };
export default TwoFactorAuthenticationController;
//# sourceMappingURL=TwoFactorAuthenticationController.js.map