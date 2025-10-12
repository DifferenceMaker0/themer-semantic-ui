import { queryParams } from './../../wayfinder';
/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::store
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:31
 * @route '/login'
 */
export const store = (options) => ({
    url: store.url(options),
    method: 'post',
});
store.definition = {
    methods: ["post"],
    url: '/login',
};
/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::store
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:31
 * @route '/login'
 */
store.url = (options) => {
    return store.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::store
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:31
 * @route '/login'
 */
store.post = (options) => ({
    url: store.url(options),
    method: 'post',
});
/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::store
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:31
* @route '/login'
*/
const storeForm = (options) => ({
    action: store.url(options),
    method: 'post',
});
/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::store
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:31
* @route '/login'
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