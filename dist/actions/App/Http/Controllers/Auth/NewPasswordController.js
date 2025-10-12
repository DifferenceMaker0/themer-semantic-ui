import { queryParams, applyUrlDefaults } from './../../../../../wayfinder';
/**
* @see \App\Http\Controllers\Auth\NewPasswordController::create
 * @see app/Http/Controllers/Auth/NewPasswordController.php:23
 * @route '/reset-password/{token}'
 */
export const create = (args, options) => ({
    url: create.url(args, options),
    method: 'get',
});
create.definition = {
    methods: ["get", "head"],
    url: '/reset-password/{token}',
};
/**
* @see \App\Http\Controllers\Auth\NewPasswordController::create
 * @see app/Http/Controllers/Auth/NewPasswordController.php:23
 * @route '/reset-password/{token}'
 */
create.url = (args, options) => {
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
    return create.definition.url
        .replace('{token}', parsedArgs.token.toString())
        .replace(/\/+$/, '') + queryParams(options);
};
/**
* @see \App\Http\Controllers\Auth\NewPasswordController::create
 * @see app/Http/Controllers/Auth/NewPasswordController.php:23
 * @route '/reset-password/{token}'
 */
create.get = (args, options) => ({
    url: create.url(args, options),
    method: 'get',
});
/**
* @see \App\Http\Controllers\Auth\NewPasswordController::create
 * @see app/Http/Controllers/Auth/NewPasswordController.php:23
 * @route '/reset-password/{token}'
 */
create.head = (args, options) => ({
    url: create.url(args, options),
    method: 'head',
});
/**
* @see \App\Http\Controllers\Auth\NewPasswordController::create
* @see app/Http/Controllers/Auth/NewPasswordController.php:23
* @route '/reset-password/{token}'
*/
const createForm = (args, options) => ({
    action: create.url(args, options),
    method: 'get',
});
/**
* @see \App\Http\Controllers\Auth\NewPasswordController::create
* @see app/Http/Controllers/Auth/NewPasswordController.php:23
* @route '/reset-password/{token}'
*/
createForm.get = (args, options) => ({
    action: create.url(args, options),
    method: 'get',
});
/**
* @see \App\Http\Controllers\Auth\NewPasswordController::create
* @see app/Http/Controllers/Auth/NewPasswordController.php:23
* @route '/reset-password/{token}'
*/
createForm.head = (args, options) => ({
    action: create.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
});
create.form = createForm;
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
const NewPasswordController = { create, store };
export default NewPasswordController;
//# sourceMappingURL=NewPasswordController.js.map