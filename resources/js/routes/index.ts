import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../wayfinder'
/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::login
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:20
 * @route '/login'
 */
export const login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ["get","head"],
    url: '/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::login
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:20
 * @route '/login'
 */
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::login
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:20
 * @route '/login'
 */
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::login
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:20
 * @route '/login'
 */
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::login
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:20
 * @route '/login'
 */
    const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: login.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::login
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:20
 * @route '/login'
 */
        loginForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: login.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::login
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:20
 * @route '/login'
 */
        loginForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: login.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    login.form = loginForm
/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::logout
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:54
 * @route '/logout'
 */
export const logout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::logout
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:54
 * @route '/logout'
 */
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::logout
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:54
 * @route '/logout'
 */
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::logout
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:54
 * @route '/logout'
 */
    const logoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: logout.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::logout
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:54
 * @route '/logout'
 */
        logoutForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: logout.url(options),
            method: 'post',
        })
    
    logout.form = logoutForm
/**
 * @see routes/web.php:11
 * @route '/themer'
 */
export const themer = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: themer.url(options),
    method: 'get',
})

themer.definition = {
    methods: ["get","head"],
    url: '/themer',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:11
 * @route '/themer'
 */
themer.url = (options?: RouteQueryOptions) => {
    return themer.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:11
 * @route '/themer'
 */
themer.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: themer.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:11
 * @route '/themer'
 */
themer.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: themer.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:11
 * @route '/themer'
 */
    const themerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: themer.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:11
 * @route '/themer'
 */
        themerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: themer.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:11
 * @route '/themer'
 */
        themerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: themer.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    themer.form = themerForm
/**
 * @see routes/web.php:15
 * @route '/theme-dashboard'
 */
export const themeDashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: themeDashboard.url(options),
    method: 'get',
})

themeDashboard.definition = {
    methods: ["get","head"],
    url: '/theme-dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:15
 * @route '/theme-dashboard'
 */
themeDashboard.url = (options?: RouteQueryOptions) => {
    return themeDashboard.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:15
 * @route '/theme-dashboard'
 */
themeDashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: themeDashboard.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:15
 * @route '/theme-dashboard'
 */
themeDashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: themeDashboard.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:15
 * @route '/theme-dashboard'
 */
    const themeDashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: themeDashboard.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:15
 * @route '/theme-dashboard'
 */
        themeDashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: themeDashboard.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:15
 * @route '/theme-dashboard'
 */
        themeDashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: themeDashboard.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    themeDashboard.form = themeDashboardForm
/**
 * @see routes/web.php:19
 * @route '/petstore'
 */
export const petstore = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: petstore.url(options),
    method: 'get',
})

petstore.definition = {
    methods: ["get","head"],
    url: '/petstore',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:19
 * @route '/petstore'
 */
petstore.url = (options?: RouteQueryOptions) => {
    return petstore.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:19
 * @route '/petstore'
 */
petstore.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: petstore.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:19
 * @route '/petstore'
 */
petstore.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: petstore.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:19
 * @route '/petstore'
 */
    const petstoreForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: petstore.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:19
 * @route '/petstore'
 */
        petstoreForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: petstore.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:19
 * @route '/petstore'
 */
        petstoreForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: petstore.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    petstore.form = petstoreForm
/**
 * @see routes/web.php:34
 * @route '/people'
 */
export const people = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: people.url(options),
    method: 'get',
})

people.definition = {
    methods: ["get","head"],
    url: '/people',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:34
 * @route '/people'
 */
people.url = (options?: RouteQueryOptions) => {
    return people.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:34
 * @route '/people'
 */
people.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: people.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:34
 * @route '/people'
 */
people.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: people.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:34
 * @route '/people'
 */
    const peopleForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: people.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:34
 * @route '/people'
 */
        peopleForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: people.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:34
 * @route '/people'
 */
        peopleForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: people.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    people.form = peopleForm
/**
 * @see routes/web.php:38
 * @route '/bunghole'
 */
export const bunghole = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: bunghole.url(options),
    method: 'get',
})

bunghole.definition = {
    methods: ["get","head"],
    url: '/bunghole',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:38
 * @route '/bunghole'
 */
bunghole.url = (options?: RouteQueryOptions) => {
    return bunghole.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:38
 * @route '/bunghole'
 */
bunghole.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: bunghole.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:38
 * @route '/bunghole'
 */
bunghole.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: bunghole.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:38
 * @route '/bunghole'
 */
    const bungholeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: bunghole.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:38
 * @route '/bunghole'
 */
        bungholeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: bunghole.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:38
 * @route '/bunghole'
 */
        bungholeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: bunghole.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    bunghole.form = bungholeForm
/**
 * @see routes/web.php:42
 * @route '/cshop'
 */
export const cshop = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cshop.url(options),
    method: 'get',
})

cshop.definition = {
    methods: ["get","head"],
    url: '/cshop',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:42
 * @route '/cshop'
 */
cshop.url = (options?: RouteQueryOptions) => {
    return cshop.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:42
 * @route '/cshop'
 */
cshop.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cshop.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:42
 * @route '/cshop'
 */
cshop.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: cshop.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:42
 * @route '/cshop'
 */
    const cshopForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: cshop.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:42
 * @route '/cshop'
 */
        cshopForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: cshop.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:42
 * @route '/cshop'
 */
        cshopForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: cshop.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    cshop.form = cshopForm
/**
 * @see routes/web.php:46
 * @route '/'
 */
export const home = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

home.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:46
 * @route '/'
 */
home.url = (options?: RouteQueryOptions) => {
    return home.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:46
 * @route '/'
 */
home.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:46
 * @route '/'
 */
home.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:46
 * @route '/'
 */
    const homeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: home.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:46
 * @route '/'
 */
        homeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: home.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:46
 * @route '/'
 */
        homeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: home.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    home.form = homeForm
/**
 * @see routes/web.php:51
 * @route '/dashboard'
 */
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:51
 * @route '/dashboard'
 */
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:51
 * @route '/dashboard'
 */
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:51
 * @route '/dashboard'
 */
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:51
 * @route '/dashboard'
 */
    const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: dashboard.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:51
 * @route '/dashboard'
 */
        dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:51
 * @route '/dashboard'
 */
        dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    dashboard.form = dashboardForm
/**
* @see \App\Http\Controllers\Auth\RegisteredUserController::register
 * @see app/Http/Controllers/Auth/RegisteredUserController.php:21
 * @route '/register'
 */
export const register = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})

register.definition = {
    methods: ["get","head"],
    url: '/register',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\RegisteredUserController::register
 * @see app/Http/Controllers/Auth/RegisteredUserController.php:21
 * @route '/register'
 */
register.url = (options?: RouteQueryOptions) => {
    return register.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\RegisteredUserController::register
 * @see app/Http/Controllers/Auth/RegisteredUserController.php:21
 * @route '/register'
 */
register.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Auth\RegisteredUserController::register
 * @see app/Http/Controllers/Auth/RegisteredUserController.php:21
 * @route '/register'
 */
register.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: register.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Auth\RegisteredUserController::register
 * @see app/Http/Controllers/Auth/RegisteredUserController.php:21
 * @route '/register'
 */
    const registerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: register.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Auth\RegisteredUserController::register
 * @see app/Http/Controllers/Auth/RegisteredUserController.php:21
 * @route '/register'
 */
        registerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: register.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Auth\RegisteredUserController::register
 * @see app/Http/Controllers/Auth/RegisteredUserController.php:21
 * @route '/register'
 */
        registerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: register.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    register.form = registerForm