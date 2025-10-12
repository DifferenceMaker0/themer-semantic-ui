import { queryParams } from './../../../../../wayfinder';
/**
* @see \App\Http\Controllers\Auth\PasswordResetLinkController::create
 * @see app/Http/Controllers/Auth/PasswordResetLinkController.php:17
 * @route '/forgot-password'
 */
export const create = (options) => ({
    url: create.url(options),
    method: 'get',
});
create.definition = {
    methods: ["get", "head"],
    url: '/forgot-password',
};
/**
* @see \App\Http\Controllers\Auth\PasswordResetLinkController::create
 * @see app/Http/Controllers/Auth/PasswordResetLinkController.php:17
 * @route '/forgot-password'
 */
create.url = (options) => {
    return create.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\Auth\PasswordResetLinkController::create
 * @see app/Http/Controllers/Auth/PasswordResetLinkController.php:17
 * @route '/forgot-password'
 */
create.get = (options) => ({
    url: create.url(options),
    method: 'get',
});
/**
* @see \App\Http\Controllers\Auth\PasswordResetLinkController::create
 * @see app/Http/Controllers/Auth/PasswordResetLinkController.php:17
 * @route '/forgot-password'
 */
create.head = (options) => ({
    url: create.url(options),
    method: 'head',
});
/**
* @see \App\Http\Controllers\Auth\PasswordResetLinkController::create
* @see app/Http/Controllers/Auth/PasswordResetLinkController.php:17
* @route '/forgot-password'
*/
const createForm = (options) => ({
    action: create.url(options),
    method: 'get',
});
/**
* @see \App\Http\Controllers\Auth\PasswordResetLinkController::create
* @see app/Http/Controllers/Auth/PasswordResetLinkController.php:17
* @route '/forgot-password'
*/
createForm.get = (options) => ({
    action: create.url(options),
    method: 'get',
});
/**
* @see \App\Http\Controllers\Auth\PasswordResetLinkController::create
* @see app/Http/Controllers/Auth/PasswordResetLinkController.php:17
* @route '/forgot-password'
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
* @see \App\Http\Controllers\Auth\PasswordResetLinkController::store
 * @see app/Http/Controllers/Auth/PasswordResetLinkController.php:29
 * @route '/forgot-password'
 */
export const store = (options) => ({
    url: store.url(options),
    method: 'post',
});
store.definition = {
    methods: ["post"],
    url: '/forgot-password',
};
/**
* @see \App\Http\Controllers\Auth\PasswordResetLinkController::store
 * @see app/Http/Controllers/Auth/PasswordResetLinkController.php:29
 * @route '/forgot-password'
 */
store.url = (options) => {
    return store.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\Auth\PasswordResetLinkController::store
 * @see app/Http/Controllers/Auth/PasswordResetLinkController.php:29
 * @route '/forgot-password'
 */
store.post = (options) => ({
    url: store.url(options),
    method: 'post',
});
/**
* @see \App\Http\Controllers\Auth\PasswordResetLinkController::store
* @see app/Http/Controllers/Auth/PasswordResetLinkController.php:29
* @route '/forgot-password'
*/
const storeForm = (options) => ({
    action: store.url(options),
    method: 'post',
});
/**
* @see \App\Http\Controllers\Auth\PasswordResetLinkController::store
* @see app/Http/Controllers/Auth/PasswordResetLinkController.php:29
* @route '/forgot-password'
*/
storeForm.post = (options) => ({
    action: store.url(options),
    method: 'post',
});
store.form = storeForm;
const PasswordResetLinkController = { create, store };
export default PasswordResetLinkController;
//# sourceMappingURL=PasswordResetLinkController.js.map