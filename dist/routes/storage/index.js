import { queryParams, applyUrlDefaults } from './../../wayfinder';
/**
 * @see vendor/laravel/framework/src/Illuminate/Filesystem/FilesystemServiceProvider.php:98
 * @route '/storage/{path}'
 */
export const local = (args, options) => ({
    url: local.url(args, options),
    method: 'get',
});
local.definition = {
    methods: ["get", "head"],
    url: '/storage/{path}',
};
/**
 * @see vendor/laravel/framework/src/Illuminate/Filesystem/FilesystemServiceProvider.php:98
 * @route '/storage/{path}'
 */
local.url = (args, options) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { path: args };
    }
    if (Array.isArray(args)) {
        args = {
            path: args[0],
        };
    }
    args = applyUrlDefaults(args);
    const parsedArgs = {
        path: args.path,
    };
    return local.definition.url
        .replace('{path}', parsedArgs.path.toString())
        .replace(/\/+$/, '') + queryParams(options);
};
/**
 * @see vendor/laravel/framework/src/Illuminate/Filesystem/FilesystemServiceProvider.php:98
 * @route '/storage/{path}'
 */
local.get = (args, options) => ({
    url: local.url(args, options),
    method: 'get',
});
/**
 * @see vendor/laravel/framework/src/Illuminate/Filesystem/FilesystemServiceProvider.php:98
 * @route '/storage/{path}'
 */
local.head = (args, options) => ({
    url: local.url(args, options),
    method: 'head',
});
/**
* @see vendor/laravel/framework/src/Illuminate/Filesystem/FilesystemServiceProvider.php:98
* @route '/storage/{path}'
*/
const localForm = (args, options) => ({
    action: local.url(args, options),
    method: 'get',
});
/**
* @see vendor/laravel/framework/src/Illuminate/Filesystem/FilesystemServiceProvider.php:98
* @route '/storage/{path}'
*/
localForm.get = (args, options) => ({
    action: local.url(args, options),
    method: 'get',
});
/**
* @see vendor/laravel/framework/src/Illuminate/Filesystem/FilesystemServiceProvider.php:98
* @route '/storage/{path}'
*/
localForm.head = (args, options) => ({
    action: local.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
});
local.form = localForm;
const storage = {
    local: Object.assign(local, local),
};
export default storage;
//# sourceMappingURL=index.js.map