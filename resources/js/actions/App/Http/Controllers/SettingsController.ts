import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\SettingsController::index
 * @see app/Http/Controllers/SettingsController.php:26
 * @route '/api/settings'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SettingsController::index
 * @see app/Http/Controllers/SettingsController.php:26
 * @route '/api/settings'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SettingsController::index
 * @see app/Http/Controllers/SettingsController.php:26
 * @route '/api/settings'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SettingsController::index
 * @see app/Http/Controllers/SettingsController.php:26
 * @route '/api/settings'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SettingsController::index
 * @see app/Http/Controllers/SettingsController.php:26
 * @route '/api/settings'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SettingsController::index
 * @see app/Http/Controllers/SettingsController.php:26
 * @route '/api/settings'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SettingsController::index
 * @see app/Http/Controllers/SettingsController.php:26
 * @route '/api/settings'
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
* @see \App\Http\Controllers\SettingsController::update
 * @see app/Http/Controllers/SettingsController.php:49
 * @route '/api/settings'
 */
export const update = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/api/settings',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\SettingsController::update
 * @see app/Http/Controllers/SettingsController.php:49
 * @route '/api/settings'
 */
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SettingsController::update
 * @see app/Http/Controllers/SettingsController.php:49
 * @route '/api/settings'
 */
update.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\SettingsController::update
 * @see app/Http/Controllers/SettingsController.php:49
 * @route '/api/settings'
 */
    const updateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url({
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\SettingsController::update
 * @see app/Http/Controllers/SettingsController.php:49
 * @route '/api/settings'
 */
        updateForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\SettingsController::reset
 * @see app/Http/Controllers/SettingsController.php:93
 * @route '/api/settings/reset'
 */
export const reset = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reset.url(options),
    method: 'post',
})

reset.definition = {
    methods: ["post"],
    url: '/api/settings/reset',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SettingsController::reset
 * @see app/Http/Controllers/SettingsController.php:93
 * @route '/api/settings/reset'
 */
reset.url = (options?: RouteQueryOptions) => {
    return reset.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SettingsController::reset
 * @see app/Http/Controllers/SettingsController.php:93
 * @route '/api/settings/reset'
 */
reset.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reset.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\SettingsController::reset
 * @see app/Http/Controllers/SettingsController.php:93
 * @route '/api/settings/reset'
 */
    const resetForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: reset.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\SettingsController::reset
 * @see app/Http/Controllers/SettingsController.php:93
 * @route '/api/settings/reset'
 */
        resetForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: reset.url(options),
            method: 'post',
        })
    
    reset.form = resetForm
/**
* @see \App\Http\Controllers\SettingsController::bootstrap
 * @see app/Http/Controllers/SettingsController.php:116
 * @route '/api/settings/bootstrap'
 */
export const bootstrap = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: bootstrap.url(options),
    method: 'get',
})

bootstrap.definition = {
    methods: ["get","head"],
    url: '/api/settings/bootstrap',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SettingsController::bootstrap
 * @see app/Http/Controllers/SettingsController.php:116
 * @route '/api/settings/bootstrap'
 */
bootstrap.url = (options?: RouteQueryOptions) => {
    return bootstrap.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SettingsController::bootstrap
 * @see app/Http/Controllers/SettingsController.php:116
 * @route '/api/settings/bootstrap'
 */
bootstrap.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: bootstrap.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SettingsController::bootstrap
 * @see app/Http/Controllers/SettingsController.php:116
 * @route '/api/settings/bootstrap'
 */
bootstrap.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: bootstrap.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SettingsController::bootstrap
 * @see app/Http/Controllers/SettingsController.php:116
 * @route '/api/settings/bootstrap'
 */
    const bootstrapForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: bootstrap.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SettingsController::bootstrap
 * @see app/Http/Controllers/SettingsController.php:116
 * @route '/api/settings/bootstrap'
 */
        bootstrapForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: bootstrap.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SettingsController::bootstrap
 * @see app/Http/Controllers/SettingsController.php:116
 * @route '/api/settings/bootstrap'
 */
        bootstrapForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: bootstrap.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    bootstrap.form = bootstrapForm
const SettingsController = { index, update, reset, bootstrap }

export default SettingsController