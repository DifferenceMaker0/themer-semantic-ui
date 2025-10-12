import { queryParams } from './../../wayfinder';
/**
 * @see routes/settings.php:22
 * @route '/settings/appearance'
 */
export const edit = (options) => ({
    url: edit.url(options),
    method: 'get',
});
edit.definition = {
    methods: ["get", "head"],
    url: '/settings/appearance',
};
/**
 * @see routes/settings.php:22
 * @route '/settings/appearance'
 */
edit.url = (options) => {
    return edit.definition.url + queryParams(options);
};
/**
 * @see routes/settings.php:22
 * @route '/settings/appearance'
 */
edit.get = (options) => ({
    url: edit.url(options),
    method: 'get',
});
/**
 * @see routes/settings.php:22
 * @route '/settings/appearance'
 */
edit.head = (options) => ({
    url: edit.url(options),
    method: 'head',
});
/**
* @see routes/settings.php:22
* @route '/settings/appearance'
*/
const editForm = (options) => ({
    action: edit.url(options),
    method: 'get',
});
/**
* @see routes/settings.php:22
* @route '/settings/appearance'
*/
editForm.get = (options) => ({
    action: edit.url(options),
    method: 'get',
});
/**
* @see routes/settings.php:22
* @route '/settings/appearance'
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
const appearance = {
    edit: Object.assign(edit, edit),
};
export default appearance;
//# sourceMappingURL=index.js.map