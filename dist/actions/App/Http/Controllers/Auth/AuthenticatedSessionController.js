import { queryParams } from './../../../../../wayfinder';
/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::create
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:20
 * @route '/login'
 */
export const create = (options) => ({
    url: create.url(options),
    method: 'get',
});
create.definition = {
    methods: ["get", "head"],
    url: '/login',
};
/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::create
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:20
 * @route '/login'
 */
create.url = (options) => {
    return create.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::create
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:20
 * @route '/login'
 */
create.get = (options) => ({
    url: create.url(options),
    method: 'get',
});
/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::create
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:20
 * @route '/login'
 */
create.head = (options) => ({
    url: create.url(options),
    method: 'head',
});
/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::create
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:20
* @route '/login'
*/
const createForm = (options) => ({
    action: create.url(options),
    method: 'get',
});
/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::create
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:20
* @route '/login'
*/
createForm.get = (options) => ({
    action: create.url(options),
    method: 'get',
});
/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::create
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:20
* @route '/login'
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
/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::destroy
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:54
 * @route '/logout'
 */
export const destroy = (options) => ({
    url: destroy.url(options),
    method: 'post',
});
destroy.definition = {
    methods: ["post"],
    url: '/logout',
};
/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::destroy
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:54
 * @route '/logout'
 */
destroy.url = (options) => {
    return destroy.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::destroy
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:54
 * @route '/logout'
 */
destroy.post = (options) => ({
    url: destroy.url(options),
    method: 'post',
});
/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::destroy
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:54
* @route '/logout'
*/
const destroyForm = (options) => ({
    action: destroy.url(options),
    method: 'post',
});
/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::destroy
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:54
* @route '/logout'
*/
destroyForm.post = (options) => ({
    action: destroy.url(options),
    method: 'post',
});
destroy.form = destroyForm;
const AuthenticatedSessionController = { create, store, destroy };
export default AuthenticatedSessionController;
//# sourceMappingURL=AuthenticatedSessionController.js.map