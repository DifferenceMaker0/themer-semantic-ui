import { queryParams } from './../wayfinder';
/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::login
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:20
 * @route '/login'
 */
export const login = (options) => ({
    url: login.url(options),
    method: 'get',
});
login.definition = {
    methods: ["get", "head"],
    url: '/login',
};
/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::login
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:20
 * @route '/login'
 */
login.url = (options) => {
    return login.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::login
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:20
 * @route '/login'
 */
login.get = (options) => ({
    url: login.url(options),
    method: 'get',
});
/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::login
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:20
 * @route '/login'
 */
login.head = (options) => ({
    url: login.url(options),
    method: 'head',
});
/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::login
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:20
* @route '/login'
*/
const loginForm = (options) => ({
    action: login.url(options),
    method: 'get',
});
/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::login
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:20
* @route '/login'
*/
loginForm.get = (options) => ({
    action: login.url(options),
    method: 'get',
});
/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::login
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:20
* @route '/login'
*/
loginForm.head = (options) => ({
    action: login.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
});
login.form = loginForm;
/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::logout
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:54
 * @route '/logout'
 */
export const logout = (options) => ({
    url: logout.url(options),
    method: 'post',
});
logout.definition = {
    methods: ["post"],
    url: '/logout',
};
/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::logout
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:54
 * @route '/logout'
 */
logout.url = (options) => {
    return logout.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::logout
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:54
 * @route '/logout'
 */
logout.post = (options) => ({
    url: logout.url(options),
    method: 'post',
});
/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::logout
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:54
* @route '/logout'
*/
const logoutForm = (options) => ({
    action: logout.url(options),
    method: 'post',
});
/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::logout
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:54
* @route '/logout'
*/
logoutForm.post = (options) => ({
    action: logout.url(options),
    method: 'post',
});
logout.form = logoutForm;
/**
 * @see routes/web.php:6
 * @route '/'
 */
export const home = (options) => ({
    url: home.url(options),
    method: 'get',
});
home.definition = {
    methods: ["get", "head"],
    url: '/',
};
/**
 * @see routes/web.php:6
 * @route '/'
 */
home.url = (options) => {
    return home.definition.url + queryParams(options);
};
/**
 * @see routes/web.php:6
 * @route '/'
 */
home.get = (options) => ({
    url: home.url(options),
    method: 'get',
});
/**
 * @see routes/web.php:6
 * @route '/'
 */
home.head = (options) => ({
    url: home.url(options),
    method: 'head',
});
/**
* @see routes/web.php:6
* @route '/'
*/
const homeForm = (options) => ({
    action: home.url(options),
    method: 'get',
});
/**
* @see routes/web.php:6
* @route '/'
*/
homeForm.get = (options) => ({
    action: home.url(options),
    method: 'get',
});
/**
* @see routes/web.php:6
* @route '/'
*/
homeForm.head = (options) => ({
    action: home.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
});
home.form = homeForm;
/**
 * @see routes/web.php:11
 * @route '/dashboard'
 */
export const dashboard = (options) => ({
    url: dashboard.url(options),
    method: 'get',
});
dashboard.definition = {
    methods: ["get", "head"],
    url: '/dashboard',
};
/**
 * @see routes/web.php:11
 * @route '/dashboard'
 */
dashboard.url = (options) => {
    return dashboard.definition.url + queryParams(options);
};
/**
 * @see routes/web.php:11
 * @route '/dashboard'
 */
dashboard.get = (options) => ({
    url: dashboard.url(options),
    method: 'get',
});
/**
 * @see routes/web.php:11
 * @route '/dashboard'
 */
dashboard.head = (options) => ({
    url: dashboard.url(options),
    method: 'head',
});
/**
* @see routes/web.php:11
* @route '/dashboard'
*/
const dashboardForm = (options) => ({
    action: dashboard.url(options),
    method: 'get',
});
/**
* @see routes/web.php:11
* @route '/dashboard'
*/
dashboardForm.get = (options) => ({
    action: dashboard.url(options),
    method: 'get',
});
/**
* @see routes/web.php:11
* @route '/dashboard'
*/
dashboardForm.head = (options) => ({
    action: dashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
});
dashboard.form = dashboardForm;
/**
* @see \App\Http\Controllers\Auth\RegisteredUserController::register
 * @see app/Http/Controllers/Auth/RegisteredUserController.php:21
 * @route '/register'
 */
export const register = (options) => ({
    url: register.url(options),
    method: 'get',
});
register.definition = {
    methods: ["get", "head"],
    url: '/register',
};
/**
* @see \App\Http\Controllers\Auth\RegisteredUserController::register
 * @see app/Http/Controllers/Auth/RegisteredUserController.php:21
 * @route '/register'
 */
register.url = (options) => {
    return register.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\Auth\RegisteredUserController::register
 * @see app/Http/Controllers/Auth/RegisteredUserController.php:21
 * @route '/register'
 */
register.get = (options) => ({
    url: register.url(options),
    method: 'get',
});
/**
* @see \App\Http\Controllers\Auth\RegisteredUserController::register
 * @see app/Http/Controllers/Auth/RegisteredUserController.php:21
 * @route '/register'
 */
register.head = (options) => ({
    url: register.url(options),
    method: 'head',
});
/**
* @see \App\Http\Controllers\Auth\RegisteredUserController::register
* @see app/Http/Controllers/Auth/RegisteredUserController.php:21
* @route '/register'
*/
const registerForm = (options) => ({
    action: register.url(options),
    method: 'get',
});
/**
* @see \App\Http\Controllers\Auth\RegisteredUserController::register
* @see app/Http/Controllers/Auth/RegisteredUserController.php:21
* @route '/register'
*/
registerForm.get = (options) => ({
    action: register.url(options),
    method: 'get',
});
/**
* @see \App\Http\Controllers\Auth\RegisteredUserController::register
* @see app/Http/Controllers/Auth/RegisteredUserController.php:21
* @route '/register'
*/
registerForm.head = (options) => ({
    action: register.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
});
register.form = registerForm;
//# sourceMappingURL=index.js.map