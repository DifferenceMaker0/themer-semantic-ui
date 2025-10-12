import { queryParams } from './../../../../../wayfinder';
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
const PasswordController = { edit, update };
export default PasswordController;
//# sourceMappingURL=PasswordController.js.map