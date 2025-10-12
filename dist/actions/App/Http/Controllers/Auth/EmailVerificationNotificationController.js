import { queryParams } from './../../../../../wayfinder';
/**
* @see \App\Http\Controllers\Auth\EmailVerificationNotificationController::store
 * @see app/Http/Controllers/Auth/EmailVerificationNotificationController.php:14
 * @route '/email/verification-notification'
 */
export const store = (options) => ({
    url: store.url(options),
    method: 'post',
});
store.definition = {
    methods: ["post"],
    url: '/email/verification-notification',
};
/**
* @see \App\Http\Controllers\Auth\EmailVerificationNotificationController::store
 * @see app/Http/Controllers/Auth/EmailVerificationNotificationController.php:14
 * @route '/email/verification-notification'
 */
store.url = (options) => {
    return store.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\Auth\EmailVerificationNotificationController::store
 * @see app/Http/Controllers/Auth/EmailVerificationNotificationController.php:14
 * @route '/email/verification-notification'
 */
store.post = (options) => ({
    url: store.url(options),
    method: 'post',
});
/**
* @see \App\Http\Controllers\Auth\EmailVerificationNotificationController::store
* @see app/Http/Controllers/Auth/EmailVerificationNotificationController.php:14
* @route '/email/verification-notification'
*/
const storeForm = (options) => ({
    action: store.url(options),
    method: 'post',
});
/**
* @see \App\Http\Controllers\Auth\EmailVerificationNotificationController::store
* @see app/Http/Controllers/Auth/EmailVerificationNotificationController.php:14
* @route '/email/verification-notification'
*/
storeForm.post = (options) => ({
    action: store.url(options),
    method: 'post',
});
store.form = storeForm;
const EmailVerificationNotificationController = { store };
export default EmailVerificationNotificationController;
//# sourceMappingURL=EmailVerificationNotificationController.js.map