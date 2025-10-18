import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\TimeEntryController::index
 * @see app/Http/Controllers/TimeEntryController.php:19
 * @route '/api/time-entries'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/time-entries',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TimeEntryController::index
 * @see app/Http/Controllers/TimeEntryController.php:19
 * @route '/api/time-entries'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TimeEntryController::index
 * @see app/Http/Controllers/TimeEntryController.php:19
 * @route '/api/time-entries'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\TimeEntryController::index
 * @see app/Http/Controllers/TimeEntryController.php:19
 * @route '/api/time-entries'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\TimeEntryController::index
 * @see app/Http/Controllers/TimeEntryController.php:19
 * @route '/api/time-entries'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\TimeEntryController::index
 * @see app/Http/Controllers/TimeEntryController.php:19
 * @route '/api/time-entries'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\TimeEntryController::index
 * @see app/Http/Controllers/TimeEntryController.php:19
 * @route '/api/time-entries'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\TimeEntryController::store
 * @see app/Http/Controllers/TimeEntryController.php:102
 * @route '/api/time-entries'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/time-entries',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\TimeEntryController::store
 * @see app/Http/Controllers/TimeEntryController.php:102
 * @route '/api/time-entries'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TimeEntryController::store
 * @see app/Http/Controllers/TimeEntryController.php:102
 * @route '/api/time-entries'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\TimeEntryController::store
 * @see app/Http/Controllers/TimeEntryController.php:102
 * @route '/api/time-entries'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\TimeEntryController::store
 * @see app/Http/Controllers/TimeEntryController.php:102
 * @route '/api/time-entries'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\TimeEntryController::show
 * @see app/Http/Controllers/TimeEntryController.php:125
 * @route '/api/time-entries/{time_entry}'
 */
export const show = (args: { time_entry: string | number } | [time_entry: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/time-entries/{time_entry}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TimeEntryController::show
 * @see app/Http/Controllers/TimeEntryController.php:125
 * @route '/api/time-entries/{time_entry}'
 */
show.url = (args: { time_entry: string | number } | [time_entry: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { time_entry: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    time_entry: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        time_entry: args.time_entry,
                }

    return show.definition.url
            .replace('{time_entry}', parsedArgs.time_entry.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TimeEntryController::show
 * @see app/Http/Controllers/TimeEntryController.php:125
 * @route '/api/time-entries/{time_entry}'
 */
show.get = (args: { time_entry: string | number } | [time_entry: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\TimeEntryController::show
 * @see app/Http/Controllers/TimeEntryController.php:125
 * @route '/api/time-entries/{time_entry}'
 */
show.head = (args: { time_entry: string | number } | [time_entry: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\TimeEntryController::show
 * @see app/Http/Controllers/TimeEntryController.php:125
 * @route '/api/time-entries/{time_entry}'
 */
    const showForm = (args: { time_entry: string | number } | [time_entry: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\TimeEntryController::show
 * @see app/Http/Controllers/TimeEntryController.php:125
 * @route '/api/time-entries/{time_entry}'
 */
        showForm.get = (args: { time_entry: string | number } | [time_entry: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\TimeEntryController::show
 * @see app/Http/Controllers/TimeEntryController.php:125
 * @route '/api/time-entries/{time_entry}'
 */
        showForm.head = (args: { time_entry: string | number } | [time_entry: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \App\Http\Controllers\TimeEntryController::update
 * @see app/Http/Controllers/TimeEntryController.php:147
 * @route '/api/time-entries/{time_entry}'
 */
export const update = (args: { time_entry: string | number } | [time_entry: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/time-entries/{time_entry}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\TimeEntryController::update
 * @see app/Http/Controllers/TimeEntryController.php:147
 * @route '/api/time-entries/{time_entry}'
 */
update.url = (args: { time_entry: string | number } | [time_entry: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { time_entry: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    time_entry: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        time_entry: args.time_entry,
                }

    return update.definition.url
            .replace('{time_entry}', parsedArgs.time_entry.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TimeEntryController::update
 * @see app/Http/Controllers/TimeEntryController.php:147
 * @route '/api/time-entries/{time_entry}'
 */
update.put = (args: { time_entry: string | number } | [time_entry: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\TimeEntryController::update
 * @see app/Http/Controllers/TimeEntryController.php:147
 * @route '/api/time-entries/{time_entry}'
 */
update.patch = (args: { time_entry: string | number } | [time_entry: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\TimeEntryController::update
 * @see app/Http/Controllers/TimeEntryController.php:147
 * @route '/api/time-entries/{time_entry}'
 */
    const updateForm = (args: { time_entry: string | number } | [time_entry: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\TimeEntryController::update
 * @see app/Http/Controllers/TimeEntryController.php:147
 * @route '/api/time-entries/{time_entry}'
 */
        updateForm.put = (args: { time_entry: string | number } | [time_entry: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\TimeEntryController::update
 * @see app/Http/Controllers/TimeEntryController.php:147
 * @route '/api/time-entries/{time_entry}'
 */
        updateForm.patch = (args: { time_entry: string | number } | [time_entry: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\TimeEntryController::destroy
 * @see app/Http/Controllers/TimeEntryController.php:170
 * @route '/api/time-entries/{time_entry}'
 */
export const destroy = (args: { time_entry: string | number } | [time_entry: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/time-entries/{time_entry}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\TimeEntryController::destroy
 * @see app/Http/Controllers/TimeEntryController.php:170
 * @route '/api/time-entries/{time_entry}'
 */
destroy.url = (args: { time_entry: string | number } | [time_entry: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { time_entry: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    time_entry: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        time_entry: args.time_entry,
                }

    return destroy.definition.url
            .replace('{time_entry}', parsedArgs.time_entry.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TimeEntryController::destroy
 * @see app/Http/Controllers/TimeEntryController.php:170
 * @route '/api/time-entries/{time_entry}'
 */
destroy.delete = (args: { time_entry: string | number } | [time_entry: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\TimeEntryController::destroy
 * @see app/Http/Controllers/TimeEntryController.php:170
 * @route '/api/time-entries/{time_entry}'
 */
    const destroyForm = (args: { time_entry: string | number } | [time_entry: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\TimeEntryController::destroy
 * @see app/Http/Controllers/TimeEntryController.php:170
 * @route '/api/time-entries/{time_entry}'
 */
        destroyForm.delete = (args: { time_entry: string | number } | [time_entry: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
/**
* @see \App\Http\Controllers\TimeEntryController::stats
 * @see app/Http/Controllers/TimeEntryController.php:191
 * @route '/api/time-entries-stats'
 */
export const stats = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stats.url(options),
    method: 'get',
})

stats.definition = {
    methods: ["get","head"],
    url: '/api/time-entries-stats',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TimeEntryController::stats
 * @see app/Http/Controllers/TimeEntryController.php:191
 * @route '/api/time-entries-stats'
 */
stats.url = (options?: RouteQueryOptions) => {
    return stats.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TimeEntryController::stats
 * @see app/Http/Controllers/TimeEntryController.php:191
 * @route '/api/time-entries-stats'
 */
stats.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stats.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\TimeEntryController::stats
 * @see app/Http/Controllers/TimeEntryController.php:191
 * @route '/api/time-entries-stats'
 */
stats.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: stats.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\TimeEntryController::stats
 * @see app/Http/Controllers/TimeEntryController.php:191
 * @route '/api/time-entries-stats'
 */
    const statsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: stats.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\TimeEntryController::stats
 * @see app/Http/Controllers/TimeEntryController.php:191
 * @route '/api/time-entries-stats'
 */
        statsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: stats.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\TimeEntryController::stats
 * @see app/Http/Controllers/TimeEntryController.php:191
 * @route '/api/time-entries-stats'
 */
        statsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: stats.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    stats.form = statsForm
/**
* @see \App\Http\Controllers\TimeEntryController::start
 * @see app/Http/Controllers/TimeEntryController.php:241
 * @route '/api/time-entries/start'
 */
export const start = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: start.url(options),
    method: 'post',
})

start.definition = {
    methods: ["post"],
    url: '/api/time-entries/start',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\TimeEntryController::start
 * @see app/Http/Controllers/TimeEntryController.php:241
 * @route '/api/time-entries/start'
 */
start.url = (options?: RouteQueryOptions) => {
    return start.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TimeEntryController::start
 * @see app/Http/Controllers/TimeEntryController.php:241
 * @route '/api/time-entries/start'
 */
start.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: start.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\TimeEntryController::start
 * @see app/Http/Controllers/TimeEntryController.php:241
 * @route '/api/time-entries/start'
 */
    const startForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: start.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\TimeEntryController::start
 * @see app/Http/Controllers/TimeEntryController.php:241
 * @route '/api/time-entries/start'
 */
        startForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: start.url(options),
            method: 'post',
        })
    
    start.form = startForm
/**
* @see \App\Http\Controllers\TimeEntryController::stop
 * @see app/Http/Controllers/TimeEntryController.php:285
 * @route '/api/time-entries/{timeEntry}/stop'
 */
export const stop = (args: { timeEntry: number | { id: number } } | [timeEntry: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: stop.url(args, options),
    method: 'post',
})

stop.definition = {
    methods: ["post"],
    url: '/api/time-entries/{timeEntry}/stop',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\TimeEntryController::stop
 * @see app/Http/Controllers/TimeEntryController.php:285
 * @route '/api/time-entries/{timeEntry}/stop'
 */
stop.url = (args: { timeEntry: number | { id: number } } | [timeEntry: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { timeEntry: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { timeEntry: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    timeEntry: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        timeEntry: typeof args.timeEntry === 'object'
                ? args.timeEntry.id
                : args.timeEntry,
                }

    return stop.definition.url
            .replace('{timeEntry}', parsedArgs.timeEntry.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TimeEntryController::stop
 * @see app/Http/Controllers/TimeEntryController.php:285
 * @route '/api/time-entries/{timeEntry}/stop'
 */
stop.post = (args: { timeEntry: number | { id: number } } | [timeEntry: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: stop.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\TimeEntryController::stop
 * @see app/Http/Controllers/TimeEntryController.php:285
 * @route '/api/time-entries/{timeEntry}/stop'
 */
    const stopForm = (args: { timeEntry: number | { id: number } } | [timeEntry: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: stop.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\TimeEntryController::stop
 * @see app/Http/Controllers/TimeEntryController.php:285
 * @route '/api/time-entries/{timeEntry}/stop'
 */
        stopForm.post = (args: { timeEntry: number | { id: number } } | [timeEntry: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: stop.url(args, options),
            method: 'post',
        })
    
    stop.form = stopForm
const TimeEntryController = { index, store, show, update, destroy, stats, start, stop }

export default TimeEntryController