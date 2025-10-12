import { queryParams } from './../../../../../wayfinder';
/**
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::index
 * @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:19
 * @route '/user/two-factor-recovery-codes'
 */
export const index = (options) => ({
    url: index.url(options),
    method: 'get',
});
index.definition = {
    methods: ["get", "head"],
    url: '/user/two-factor-recovery-codes',
};
/**
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::index
 * @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:19
 * @route '/user/two-factor-recovery-codes'
 */
index.url = (options) => {
    return index.definition.url + queryParams(options);
};
/**
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::index
 * @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:19
 * @route '/user/two-factor-recovery-codes'
 */
index.get = (options) => ({
    url: index.url(options),
    method: 'get',
});
/**
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::index
 * @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:19
 * @route '/user/two-factor-recovery-codes'
 */
index.head = (options) => ({
    url: index.url(options),
    method: 'head',
});
/**
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::index
* @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:19
* @route '/user/two-factor-recovery-codes'
*/
const indexForm = (options) => ({
    action: index.url(options),
    method: 'get',
});
/**
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::index
* @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:19
* @route '/user/two-factor-recovery-codes'
*/
indexForm.get = (options) => ({
    action: index.url(options),
    method: 'get',
});
/**
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::index
* @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:19
* @route '/user/two-factor-recovery-codes'
*/
indexForm.head = (options) => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
});
index.form = indexForm;
/**
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::store
 * @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:38
 * @route '/user/two-factor-recovery-codes'
 */
export const store = (options) => ({
    url: store.url(options),
    method: 'post',
});
store.definition = {
    methods: ["post"],
    url: '/user/two-factor-recovery-codes',
};
/**
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::store
 * @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:38
 * @route '/user/two-factor-recovery-codes'
 */
store.url = (options) => {
    return store.definition.url + queryParams(options);
};
/**
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::store
 * @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:38
 * @route '/user/two-factor-recovery-codes'
 */
store.post = (options) => ({
    url: store.url(options),
    method: 'post',
});
/**
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::store
* @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:38
* @route '/user/two-factor-recovery-codes'
*/
const storeForm = (options) => ({
    action: store.url(options),
    method: 'post',
});
/**
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::store
* @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:38
* @route '/user/two-factor-recovery-codes'
*/
storeForm.post = (options) => ({
    action: store.url(options),
    method: 'post',
});
store.form = storeForm;
const RecoveryCodeController = { index, store };
export default RecoveryCodeController;
//# sourceMappingURL=RecoveryCodeController.js.map