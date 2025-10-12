import { queryParams, applyUrlDefaults } from './../../wayfinder';
import confirmD7e05f from './confirm';
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmablePasswordController::confirm
 * @see vendor/laravel/fortify/src/Http/Controllers/ConfirmablePasswordController.php:40
 * @route '/user/confirm-password'
 */
export const confirm = (options) => ({
    url: confirm.url(options),
    method: 'get',
});
confirm.definition = {
    methods: ["get", "head"],
    url: '/user/confirm-password',
};
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmablePasswordController::confirm
 * @see vendor/laravel/fortify/src/Http/Controllers/ConfirmablePasswordController.php:40
 * @route '/user/confirm-password'
 */
confirm.url = (options) => {
    return confirm.definition.url + queryParams(options);
};
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmablePasswordController::confirm
 * @see vendor/laravel/fortify/src/Http/Controllers/ConfirmablePasswordController.php:40
 * @route '/user/confirm-password'
 */
confirm.get = (options) => ({
    url: confirm.url(options),
    method: 'get',
});
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmablePasswordController::confirm
 * @see vendor/laravel/fortify/src/Http/Controllers/ConfirmablePasswordController.php:40
 * @route '/user/confirm-password'
 */
confirm.head = (options) => ({
    url: confirm.url(options),
    method: 'head',
});
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmablePasswordController::confirm
* @see vendor/laravel/fortify/src/Http/Controllers/ConfirmablePasswordController.php:40
* @route '/user/confirm-password'
*/
const confirmForm = (options) => ({
    action: confirm.url(options),
    method: 'get',
});
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmablePasswordController::confirm
* @see vendor/laravel/fortify/src/Http/Controllers/ConfirmablePasswordController.php:40
* @route '/user/confirm-password'
*/
confirmForm.get = (options) => ({
    action: confirm.url(options),
    method: 'get',
});
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmablePasswordController::confirm
* @see vendor/laravel/fortify/src/Http/Controllers/ConfirmablePasswordController.php:40
* @route '/user/confirm-password'
*/
confirmForm.head = (options) => ({
    action: confirm.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
});
confirm.form = confirmForm;
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmedPasswordStatusController::confirmation
 * @see vendor/laravel/fortify/src/Http/Controllers/ConfirmedPasswordStatusController.php:17
 * @route '/user/confirmed-password-status'
 */
export const confirmation = (options) => ({
    url: confirmation.url(options),
    method: 'get',
});
confirmation.definition = {
    methods: ["get", "head"],
    url: '/user/confirmed-password-status',
};
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmedPasswordStatusController::confirmation
 * @see vendor/laravel/fortify/src/Http/Controllers/ConfirmedPasswordStatusController.php:17
 * @route '/user/confirmed-password-status'
 */
confirmation.url = (options) => {
    return confirmation.definition.url + queryParams(options);
};
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmedPasswordStatusController::confirmation
 * @see vendor/laravel/fortify/src/Http/Controllers/ConfirmedPasswordStatusController.php:17
 * @route '/user/confirmed-password-status'
 */
confirmation.get = (options) => ({
    url: confirmation.url(options),
    method: 'get',
});
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmedPasswordStatusController::confirmation
 * @see vendor/laravel/fortify/src/Http/Controllers/ConfirmedPasswordStatusController.php:17
 * @route '/user/confirmed-password-status'
 */
confirmation.head = (options) => ({
    url: confirmation.url(options),
    method: 'head',
});
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmedPasswordStatusController::confirmation
* @see vendor/laravel/fortify/src/Http/Controllers/ConfirmedPasswordStatusController.php:17
* @route '/user/confirmed-password-status'
*/
const confirmationForm = (options) => ({
    action: confirmation.url(options),
    method: 'get',
});
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmedPasswordStatusController::confirmation
* @see vendor/laravel/fortify/src/Http/Controllers/ConfirmedPasswordStatusController.php:17
* @route '/user/confirmed-password-status'
*/
confirmationForm.get = (options) => ({
    action: confirmation.url(options),
    method: 'get',
});
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmedPasswordStatusController::confirmation
* @see vendor/laravel/fortify/src/Http/Controllers/ConfirmedPasswordStatusController.php:17
* @route '/user/confirmed-password-status'
*/
confirmationForm.head = (options) => ({
    action: confirmation.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
});
confirmation.form = confirmationForm;
/**
* @see \App\Http\Controllers\Settings\PasswordController::edit
 * @see app/Http/Controllers/Settings/PasswordController.php:18
 * @route '/settings/password'
 */
export const edit = (options) => ({
    url: edit.url(options),
    method: 'get',
});
edit.definition = {
    methods: ["get", "head"],
    url: '/settings/password',
};
/**
* @see \App\Http\Controllers\Settings\PasswordController::edit
 * @see app/Http/Controllers/Settings/PasswordController.php:18
 * @route '/settings/password'
 */
edit.url = (options) => {
    return edit.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\Settings\PasswordController::edit
 * @see app/Http/Controllers/Settings/PasswordController.php:18
 * @route '/settings/password'
 */
edit.get = (options) => ({
    url: edit.url(options),
    method: 'get',
});
/**
* @see \App\Http\Controllers\Settings\PasswordController::edit
 * @see app/Http/Controllers/Settings/PasswordController.php:18
 * @route '/settings/password'
 */
edit.head = (options) => ({
    url: edit.url(options),
    method: 'head',
});
/**
* @see \App\Http\Controllers\Settings\PasswordController::edit
* @see app/Http/Controllers/Settings/PasswordController.php:18
* @route '/settings/password'
*/
const editForm = (options) => ({
    action: edit.url(options),
    method: 'get',
});
/**
* @see \App\Http\Controllers\Settings\PasswordController::edit
* @see app/Http/Controllers/Settings/PasswordController.php:18
* @route '/settings/password'
*/
editForm.get = (options) => ({
    action: edit.url(options),
    method: 'get',
});
/**
* @see \App\Http\Controllers\Settings\PasswordController::edit
* @see app/Http/Controllers/Settings/PasswordController.php:18
* @route '/settings/password'
*/
editForm.head = (options) => ({
    action: edit.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
});
edit.form = editForm;
/**
* @see \App\Http\Controllers\Settings\PasswordController::update
 * @see app/Http/Controllers/Settings/PasswordController.php:26
 * @route '/settings/password'
 */
export const update = (options) => ({
    url: update.url(options),
    method: 'put',
});
update.definition = {
    methods: ["put"],
    url: '/settings/password',
};
/**
* @see \App\Http\Controllers\Settings\PasswordController::update
 * @see app/Http/Controllers/Settings/PasswordController.php:26
 * @route '/settings/password'
 */
update.url = (options) => {
    return update.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\Settings\PasswordController::update
 * @see app/Http/Controllers/Settings/PasswordController.php:26
 * @route '/settings/password'
 */
update.put = (options) => ({
    url: update.url(options),
    method: 'put',
});
/**
* @see \App\Http\Controllers\Settings\PasswordController::update
* @see app/Http/Controllers/Settings/PasswordController.php:26
* @route '/settings/password'
*/
const updateForm = (options) => ({
    action: update.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
});
/**
* @see \App\Http\Controllers\Settings\PasswordController::update
* @see app/Http/Controllers/Settings/PasswordController.php:26
* @route '/settings/password'
*/
updateForm.put = (options) => ({
    action: update.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
});
update.form = updateForm;
/**
* @see \App\Http\Controllers\Auth\PasswordResetLinkController::request
 * @see app/Http/Controllers/Auth/PasswordResetLinkController.php:17
 * @route '/forgot-password'
 */
export const request = (options) => ({
    url: request.url(options),
    method: 'get',
});
request.definition = {
    methods: ["get", "head"],
    url: '/forgot-password',
};
/**
* @see \App\Http\Controllers\Auth\PasswordResetLinkController::request
 * @see app/Http/Controllers/Auth/PasswordResetLinkController.php:17
 * @route '/forgot-password'
 */
request.url = (options) => {
    return request.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\Auth\PasswordResetLinkController::request
 * @see app/Http/Controllers/Auth/PasswordResetLinkController.php:17
 * @route '/forgot-password'
 */
request.get = (options) => ({
    url: request.url(options),
    method: 'get',
});
/**
* @see \App\Http\Controllers\Auth\PasswordResetLinkController::request
 * @see app/Http/Controllers/Auth/PasswordResetLinkController.php:17
 * @route '/forgot-password'
 */
request.head = (options) => ({
    url: request.url(options),
    method: 'head',
});
/**
* @see \App\Http\Controllers\Auth\PasswordResetLinkController::request
* @see app/Http/Controllers/Auth/PasswordResetLinkController.php:17
* @route '/forgot-password'
*/
const requestForm = (options) => ({
    action: request.url(options),
    method: 'get',
});
/**
* @see \App\Http\Controllers\Auth\PasswordResetLinkController::request
* @see app/Http/Controllers/Auth/PasswordResetLinkController.php:17
* @route '/forgot-password'
*/
requestForm.get = (options) => ({
    action: request.url(options),
    method: 'get',
});
/**
* @see \App\Http\Controllers\Auth\PasswordResetLinkController::request
* @see app/Http/Controllers/Auth/PasswordResetLinkController.php:17
* @route '/forgot-password'
*/
requestForm.head = (options) => ({
    action: request.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
});
request.form = requestForm;
/**
* @see \App\Http\Controllers\Auth\PasswordResetLinkController::email
 * @see app/Http/Controllers/Auth/PasswordResetLinkController.php:29
 * @route '/forgot-password'
 */
export const email = (options) => ({
    url: email.url(options),
    method: 'post',
});
email.definition = {
    methods: ["post"],
    url: '/forgot-password',
};
/**
* @see \App\Http\Controllers\Auth\PasswordResetLinkController::email
 * @see app/Http/Controllers/Auth/PasswordResetLinkController.php:29
 * @route '/forgot-password'
 */
email.url = (options) => {
    return email.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\Auth\PasswordResetLinkController::email
 * @see app/Http/Controllers/Auth/PasswordResetLinkController.php:29
 * @route '/forgot-password'
 */
email.post = (options) => ({
    url: email.url(options),
    method: 'post',
});
/**
* @see \App\Http\Controllers\Auth\PasswordResetLinkController::email
* @see app/Http/Controllers/Auth/PasswordResetLinkController.php:29
* @route '/forgot-password'
*/
const emailForm = (options) => ({
    action: email.url(options),
    method: 'post',
});
/**
* @see \App\Http\Controllers\Auth\PasswordResetLinkController::email
* @see app/Http/Controllers/Auth/PasswordResetLinkController.php:29
* @route '/forgot-password'
*/
emailForm.post = (options) => ({
    action: email.url(options),
    method: 'post',
});
email.form = emailForm;
/**
* @see \App\Http\Controllers\Auth\NewPasswordController::reset
 * @see app/Http/Controllers/Auth/NewPasswordController.php:23
 * @route '/reset-password/{token}'
 */
export const reset = (args, options) => ({
    url: reset.url(args, options),
    method: 'get',
});
reset.definition = {
    methods: ["get", "head"],
    url: '/reset-password/{token}',
};
/**
* @see \App\Http\Controllers\Auth\NewPasswordController::reset
 * @see app/Http/Controllers/Auth/NewPasswordController.php:23
 * @route '/reset-password/{token}'
 */
reset.url = (args, options) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { token: args };
    }
    if (Array.isArray(args)) {
        args = {
            token: args[0],
        };
    }
    args = applyUrlDefaults(args);
    const parsedArgs = {
        token: args.token,
    };
    return reset.definition.url
        .replace('{token}', parsedArgs.token.toString())
        .replace(/\/+$/, '') + queryParams(options);
};
/**
* @see \App\Http\Controllers\Auth\NewPasswordController::reset
 * @see app/Http/Controllers/Auth/NewPasswordController.php:23
 * @route '/reset-password/{token}'
 */
reset.get = (args, options) => ({
    url: reset.url(args, options),
    method: 'get',
});
/**
* @see \App\Http\Controllers\Auth\NewPasswordController::reset
 * @see app/Http/Controllers/Auth/NewPasswordController.php:23
 * @route '/reset-password/{token}'
 */
reset.head = (args, options) => ({
    url: reset.url(args, options),
    method: 'head',
});
/**
* @see \App\Http\Controllers\Auth\NewPasswordController::reset
* @see app/Http/Controllers/Auth/NewPasswordController.php:23
* @route '/reset-password/{token}'
*/
const resetForm = (args, options) => ({
    action: reset.url(args, options),
    method: 'get',
});
/**
* @see \App\Http\Controllers\Auth\NewPasswordController::reset
* @see app/Http/Controllers/Auth/NewPasswordController.php:23
* @route '/reset-password/{token}'
*/
resetForm.get = (args, options) => ({
    action: reset.url(args, options),
    method: 'get',
});
/**
* @see \App\Http\Controllers\Auth\NewPasswordController::reset
* @see app/Http/Controllers/Auth/NewPasswordController.php:23
* @route '/reset-password/{token}'
*/
resetForm.head = (args, options) => ({
    action: reset.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
});
reset.form = resetForm;
/**
* @see \App\Http\Controllers\Auth\NewPasswordController::store
 * @see app/Http/Controllers/Auth/NewPasswordController.php:36
 * @route '/reset-password'
 */
export const store = (options) => ({
    url: store.url(options),
    method: 'post',
});
store.definition = {
    methods: ["post"],
    url: '/reset-password',
};
/**
* @see \App\Http\Controllers\Auth\NewPasswordController::store
 * @see app/Http/Controllers/Auth/NewPasswordController.php:36
 * @route '/reset-password'
 */
store.url = (options) => {
    return store.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\Auth\NewPasswordController::store
 * @see app/Http/Controllers/Auth/NewPasswordController.php:36
 * @route '/reset-password'
 */
store.post = (options) => ({
    url: store.url(options),
    method: 'post',
});
/**
* @see \App\Http\Controllers\Auth\NewPasswordController::store
* @see app/Http/Controllers/Auth/NewPasswordController.php:36
* @route '/reset-password'
*/
const storeForm = (options) => ({
    action: store.url(options),
    method: 'post',
});
/**
* @see \App\Http\Controllers\Auth\NewPasswordController::store
* @see app/Http/Controllers/Auth/NewPasswordController.php:36
* @route '/reset-password'
*/
storeForm.post = (options) => ({
    action: store.url(options),
    method: 'post',
});
store.form = storeForm;
const password = {
    confirm: Object.assign(confirm, confirmD7e05f),
    confirmation: Object.assign(confirmation, confirmation),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    request: Object.assign(request, request),
    email: Object.assign(email, email),
    reset: Object.assign(reset, reset),
    store: Object.assign(store, store),
};
export default password;
//# sourceMappingURL=index.js.map