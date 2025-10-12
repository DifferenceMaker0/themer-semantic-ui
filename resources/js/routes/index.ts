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
 * @see routes/web.php:6
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
 * @see routes/web.php:6
 * @route '/'
 */
home.url = (options?: RouteQueryOptions) => {
    return home.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:6
 * @route '/'
 */
home.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:6
 * @route '/'
 */
home.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:6
 * @route '/'
 */
    const homeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: home.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:6
 * @route '/'
 */
        homeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: home.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:6
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
 * @see routes/web.php:11
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
 * @see routes/web.php:11
 * @route '/dashboard'
 */
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:11
 * @route '/dashboard'
 */
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:11
 * @route '/dashboard'
 */
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:11
 * @route '/dashboard'
 */
    const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: dashboard.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:11
 * @route '/dashboard'
 */
        dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:11
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
 * @see routes/web.php:16
 * @route '/project-dashboard'
 */
export const projectDashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: projectDashboard.url(options),
    method: 'get',
})

projectDashboard.definition = {
    methods: ["get","head"],
    url: '/project-dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:16
 * @route '/project-dashboard'
 */
projectDashboard.url = (options?: RouteQueryOptions) => {
    return projectDashboard.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:16
 * @route '/project-dashboard'
 */
projectDashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: projectDashboard.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:16
 * @route '/project-dashboard'
 */
projectDashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: projectDashboard.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:16
 * @route '/project-dashboard'
 */
    const projectDashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: projectDashboard.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:16
 * @route '/project-dashboard'
 */
        projectDashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: projectDashboard.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:16
 * @route '/project-dashboard'
 */
        projectDashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: projectDashboard.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    projectDashboard.form = projectDashboardForm
/**
 * @see routes/web.php:25
 * @route '/projects'
 */
export const projects = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: projects.url(options),
    method: 'get',
})

projects.definition = {
    methods: ["get","head"],
    url: '/projects',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:25
 * @route '/projects'
 */
projects.url = (options?: RouteQueryOptions) => {
    return projects.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:25
 * @route '/projects'
 */
projects.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: projects.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:25
 * @route '/projects'
 */
projects.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: projects.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:25
 * @route '/projects'
 */
    const projectsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: projects.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:25
 * @route '/projects'
 */
        projectsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: projects.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:25
 * @route '/projects'
 */
        projectsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: projects.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    projects.form = projectsForm
/**
 * @see routes/web.php:32
 * @route '/tasks'
 */
export const tasks = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: tasks.url(options),
    method: 'get',
})

tasks.definition = {
    methods: ["get","head"],
    url: '/tasks',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:32
 * @route '/tasks'
 */
tasks.url = (options?: RouteQueryOptions) => {
    return tasks.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:32
 * @route '/tasks'
 */
tasks.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: tasks.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:32
 * @route '/tasks'
 */
tasks.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: tasks.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:32
 * @route '/tasks'
 */
    const tasksForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: tasks.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:32
 * @route '/tasks'
 */
        tasksForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: tasks.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:32
 * @route '/tasks'
 */
        tasksForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: tasks.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    tasks.form = tasksForm
/**
 * @see routes/web.php:39
 * @route '/clients'
 */
export const clients = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: clients.url(options),
    method: 'get',
})

clients.definition = {
    methods: ["get","head"],
    url: '/clients',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:39
 * @route '/clients'
 */
clients.url = (options?: RouteQueryOptions) => {
    return clients.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:39
 * @route '/clients'
 */
clients.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: clients.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:39
 * @route '/clients'
 */
clients.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: clients.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:39
 * @route '/clients'
 */
    const clientsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: clients.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:39
 * @route '/clients'
 */
        clientsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: clients.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:39
 * @route '/clients'
 */
        clientsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: clients.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    clients.form = clientsForm
/**
 * @see routes/web.php:45
 * @route '/time-tracking'
 */
export const timeTracking = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: timeTracking.url(options),
    method: 'get',
})

timeTracking.definition = {
    methods: ["get","head"],
    url: '/time-tracking',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:45
 * @route '/time-tracking'
 */
timeTracking.url = (options?: RouteQueryOptions) => {
    return timeTracking.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:45
 * @route '/time-tracking'
 */
timeTracking.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: timeTracking.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:45
 * @route '/time-tracking'
 */
timeTracking.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: timeTracking.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:45
 * @route '/time-tracking'
 */
    const timeTrackingForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: timeTracking.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:45
 * @route '/time-tracking'
 */
        timeTrackingForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: timeTracking.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:45
 * @route '/time-tracking'
 */
        timeTrackingForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: timeTracking.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    timeTracking.form = timeTrackingForm
/**
 * @see routes/web.php:53
 * @route '/communication'
 */
export const communication = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: communication.url(options),
    method: 'get',
})

communication.definition = {
    methods: ["get","head"],
    url: '/communication',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:53
 * @route '/communication'
 */
communication.url = (options?: RouteQueryOptions) => {
    return communication.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:53
 * @route '/communication'
 */
communication.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: communication.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:53
 * @route '/communication'
 */
communication.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: communication.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:53
 * @route '/communication'
 */
    const communicationForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: communication.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:53
 * @route '/communication'
 */
        communicationForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: communication.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:53
 * @route '/communication'
 */
        communicationForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: communication.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    communication.form = communicationForm
/**
 * @see routes/web.php:60
 * @route '/financial-dashboard'
 */
export const financialDashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: financialDashboard.url(options),
    method: 'get',
})

financialDashboard.definition = {
    methods: ["get","head"],
    url: '/financial-dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:60
 * @route '/financial-dashboard'
 */
financialDashboard.url = (options?: RouteQueryOptions) => {
    return financialDashboard.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:60
 * @route '/financial-dashboard'
 */
financialDashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: financialDashboard.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:60
 * @route '/financial-dashboard'
 */
financialDashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: financialDashboard.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:60
 * @route '/financial-dashboard'
 */
    const financialDashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: financialDashboard.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:60
 * @route '/financial-dashboard'
 */
        financialDashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: financialDashboard.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:60
 * @route '/financial-dashboard'
 */
        financialDashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: financialDashboard.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    financialDashboard.form = financialDashboardForm
/**
 * @see routes/web.php:68
 * @route '/analytics'
 */
export const analytics = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: analytics.url(options),
    method: 'get',
})

analytics.definition = {
    methods: ["get","head"],
    url: '/analytics',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:68
 * @route '/analytics'
 */
analytics.url = (options?: RouteQueryOptions) => {
    return analytics.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:68
 * @route '/analytics'
 */
analytics.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: analytics.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:68
 * @route '/analytics'
 */
analytics.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: analytics.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:68
 * @route '/analytics'
 */
    const analyticsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: analytics.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:68
 * @route '/analytics'
 */
        analyticsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: analytics.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:68
 * @route '/analytics'
 */
        analyticsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: analytics.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    analytics.form = analyticsForm
/**
 * @see routes/web.php:76
 * @route '/calendar'
 */
export const calendar = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: calendar.url(options),
    method: 'get',
})

calendar.definition = {
    methods: ["get","head"],
    url: '/calendar',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:76
 * @route '/calendar'
 */
calendar.url = (options?: RouteQueryOptions) => {
    return calendar.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:76
 * @route '/calendar'
 */
calendar.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: calendar.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:76
 * @route '/calendar'
 */
calendar.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: calendar.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:76
 * @route '/calendar'
 */
    const calendarForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: calendar.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:76
 * @route '/calendar'
 */
        calendarForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: calendar.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:76
 * @route '/calendar'
 */
        calendarForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: calendar.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    calendar.form = calendarForm
/**
 * @see routes/web.php:83
 * @route '/themer-dashboard'
 */
export const themerDashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: themerDashboard.url(options),
    method: 'get',
})

themerDashboard.definition = {
    methods: ["get","head"],
    url: '/themer-dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:83
 * @route '/themer-dashboard'
 */
themerDashboard.url = (options?: RouteQueryOptions) => {
    return themerDashboard.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:83
 * @route '/themer-dashboard'
 */
themerDashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: themerDashboard.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:83
 * @route '/themer-dashboard'
 */
themerDashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: themerDashboard.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:83
 * @route '/themer-dashboard'
 */
    const themerDashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: themerDashboard.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:83
 * @route '/themer-dashboard'
 */
        themerDashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: themerDashboard.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:83
 * @route '/themer-dashboard'
 */
        themerDashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: themerDashboard.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    themerDashboard.form = themerDashboardForm
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