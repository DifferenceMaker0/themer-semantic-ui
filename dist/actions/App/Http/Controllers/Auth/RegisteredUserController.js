import { queryParams } from './../../../../../wayfinder';
/**
* @see \App\Http\Controllers\Auth\RegisteredUserController::create
 * @see app/Http/Controllers/Auth/RegisteredUserController.php:21
 * @route '/register'
 */
export const create = (options) => ({
    url: create.url(options),
    method: 'get',
});
create.definition = {
    methods: ["get", "head"],
    url: '/register',
};
/**
* @see \App\Http\Controllers\Auth\RegisteredUserController::create
 * @see app/Http/Controllers/Auth/RegisteredUserController.php:21
 * @route '/register'
 */
create.url = (options) => {
    return create.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\Auth\RegisteredUserController::create
 * @see app/Http/Controllers/Auth/RegisteredUserController.php:21
 * @route '/register'
 */
create.get = (options) => ({
    url: create.url(options),
    method: 'get',
});
/**
* @see \App\Http\Controllers\Auth\RegisteredUserController::create
 * @see app/Http/Controllers/Auth/RegisteredUserController.php:21
 * @route '/register'
 */
create.head = (options) => ({
    url: create.url(options),
    method: 'head',
});
/**
* @see \App\Http\Controllers\Auth\RegisteredUserController::create
* @see app/Http/Controllers/Auth/RegisteredUserController.php:21
* @route '/register'
*/
const createForm = (options) => ({
    action: create.url(options),
    method: 'get',
});
/**
* @see \App\Http\Controllers\Auth\RegisteredUserController::create
* @see app/Http/Controllers/Auth/RegisteredUserController.php:21
* @route '/register'
*/
createForm.get = (options) => ({
    action: create.url(options),
    method: 'get',
});
/**
* @see \App\Http\Controllers\Auth\RegisteredUserController::create
* @see app/Http/Controllers/Auth/RegisteredUserController.php:21
* @route '/register'
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
const RegisteredUserController = { create, store };
export default RegisteredUserController;
//# sourceMappingURL=RegisteredUserController.js.map