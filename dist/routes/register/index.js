import { queryParams } from './../../wayfinder';
/**
* @see \App\Http\Controllers\Auth\RegisteredUserController::store
 * @see app/Http/Controllers/Auth/RegisteredUserController.php:31
 * @route '/register'
 */
export const store = (options) => ({
    url: store.url(options),
    method: 'post',
});
store.definition = {
    methods: ["post"],
    url: '/register',
};
/**
* @see \App\Http\Controllers\Auth\RegisteredUserController::store
 * @see app/Http/Controllers/Auth/RegisteredUserController.php:31
 * @route '/register'
 */
store.url = (options) => {
    return store.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\Auth\RegisteredUserController::store
 * @see app/Http/Controllers/Auth/RegisteredUserController.php:31
 * @route '/register'
 */
store.post = (options) => ({
    url: store.url(options),
    method: 'post',
});
/**
* @see \App\Http\Controllers\Auth\RegisteredUserController::store
* @see app/Http/Controllers/Auth/RegisteredUserController.php:31
* @route '/register'
*/
const storeForm = (options) => ({
    action: store.url(options),
    method: 'post',
});
/**
* @see \App\Http\Controllers\Auth\RegisteredUserController::store
* @see app/Http/Controllers/Auth/RegisteredUserController.php:31
* @route '/register'
*/
storeForm.post = (options) => ({
    action: store.url(options),
    method: 'post',
});
store.form = storeForm;
const register = {
    store: Object.assign(store, store),
};
export default register;
//# sourceMappingURL=index.js.map