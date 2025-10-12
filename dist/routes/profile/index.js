import { queryParams } from './../../wayfinder';
/**
* @see \App\Http\Controllers\Settings\ProfileController::edit
 * @see app/Http/Controllers/Settings/ProfileController.php:19
 * @route '/settings/profile'
 */
export const edit = (options) => ({
    url: edit.url(options),
    method: 'get',
});
edit.definition = {
    methods: ["get", "head"],
    url: '/settings/profile',
};
/**
* @see \App\Http\Controllers\Settings\ProfileController::edit
 * @see app/Http/Controllers/Settings/ProfileController.php:19
 * @route '/settings/profile'
 */
edit.url = (options) => {
    return edit.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\Settings\ProfileController::edit
 * @see app/Http/Controllers/Settings/ProfileController.php:19
 * @route '/settings/profile'
 */
edit.get = (options) => ({
    url: edit.url(options),
    method: 'get',
});
/**
* @see \App\Http\Controllers\Settings\ProfileController::edit
 * @see app/Http/Controllers/Settings/ProfileController.php:19
 * @route '/settings/profile'
 */
edit.head = (options) => ({
    url: edit.url(options),
    method: 'head',
});
/**
* @see \App\Http\Controllers\Settings\ProfileController::edit
* @see app/Http/Controllers/Settings/ProfileController.php:19
* @route '/settings/profile'
*/
const editForm = (options) => ({
    action: edit.url(options),
    method: 'get',
});
/**
* @see \App\Http\Controllers\Settings\ProfileController::edit
* @see app/Http/Controllers/Settings/ProfileController.php:19
* @route '/settings/profile'
*/
editForm.get = (options) => ({
    action: edit.url(options),
    method: 'get',
});
/**
* @see \App\Http\Controllers\Settings\ProfileController::edit
* @see app/Http/Controllers/Settings/ProfileController.php:19
* @route '/settings/profile'
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
* @see \App\Http\Controllers\Settings\ProfileController::update
 * @see app/Http/Controllers/Settings/ProfileController.php:30
 * @route '/settings/profile'
 */
export const update = (options) => ({
    url: update.url(options),
    method: 'patch',
});
update.definition = {
    methods: ["patch"],
    url: '/settings/profile',
};
/**
* @see \App\Http\Controllers\Settings\ProfileController::update
 * @see app/Http/Controllers/Settings/ProfileController.php:30
 * @route '/settings/profile'
 */
update.url = (options) => {
    return update.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\Settings\ProfileController::update
 * @see app/Http/Controllers/Settings/ProfileController.php:30
 * @route '/settings/profile'
 */
update.patch = (options) => ({
    url: update.url(options),
    method: 'patch',
});
/**
* @see \App\Http\Controllers\Settings\ProfileController::update
* @see app/Http/Controllers/Settings/ProfileController.php:30
* @route '/settings/profile'
*/
const updateForm = (options) => ({
    action: update.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
});
/**
* @see \App\Http\Controllers\Settings\ProfileController::update
* @see app/Http/Controllers/Settings/ProfileController.php:30
* @route '/settings/profile'
*/
updateForm.patch = (options) => ({
    action: update.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
});
update.form = updateForm;
/**
* @see \App\Http\Controllers\Settings\ProfileController::destroy
 * @see app/Http/Controllers/Settings/ProfileController.php:46
 * @route '/settings/profile'
 */
export const destroy = (options) => ({
    url: destroy.url(options),
    method: 'delete',
});
destroy.definition = {
    methods: ["delete"],
    url: '/settings/profile',
};
/**
* @see \App\Http\Controllers\Settings\ProfileController::destroy
 * @see app/Http/Controllers/Settings/ProfileController.php:46
 * @route '/settings/profile'
 */
destroy.url = (options) => {
    return destroy.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\Settings\ProfileController::destroy
 * @see app/Http/Controllers/Settings/ProfileController.php:46
 * @route '/settings/profile'
 */
destroy.delete = (options) => ({
    url: destroy.url(options),
    method: 'delete',
});
/**
* @see \App\Http\Controllers\Settings\ProfileController::destroy
* @see app/Http/Controllers/Settings/ProfileController.php:46
* @route '/settings/profile'
*/
const destroyForm = (options) => ({
    action: destroy.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
});
/**
* @see \App\Http\Controllers\Settings\ProfileController::destroy
* @see app/Http/Controllers/Settings/ProfileController.php:46
* @route '/settings/profile'
*/
destroyForm.delete = (options) => ({
    action: destroy.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
});
destroy.form = destroyForm;
const profile = {
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
};
export default profile;
//# sourceMappingURL=index.js.map