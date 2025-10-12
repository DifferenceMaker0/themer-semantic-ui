import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\PetController::index
 * @see app/Http/Controllers/PetController.php:21
 * @route '/api/petstore'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/petstore',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PetController::index
 * @see app/Http/Controllers/PetController.php:21
 * @route '/api/petstore'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PetController::index
 * @see app/Http/Controllers/PetController.php:21
 * @route '/api/petstore'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PetController::index
 * @see app/Http/Controllers/PetController.php:21
 * @route '/api/petstore'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PetController::index
 * @see app/Http/Controllers/PetController.php:21
 * @route '/api/petstore'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PetController::index
 * @see app/Http/Controllers/PetController.php:21
 * @route '/api/petstore'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PetController::index
 * @see app/Http/Controllers/PetController.php:21
 * @route '/api/petstore'
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
* @see \App\Http\Controllers\PetController::store
 * @see app/Http/Controllers/PetController.php:38
 * @route '/api/petstore'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/petstore',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PetController::store
 * @see app/Http/Controllers/PetController.php:38
 * @route '/api/petstore'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PetController::store
 * @see app/Http/Controllers/PetController.php:38
 * @route '/api/petstore'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\PetController::store
 * @see app/Http/Controllers/PetController.php:38
 * @route '/api/petstore'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PetController::store
 * @see app/Http/Controllers/PetController.php:38
 * @route '/api/petstore'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\PetController::create
 * @see app/Http/Controllers/PetController.php:0
 * @route '/api/petstore/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/api/petstore/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PetController::create
 * @see app/Http/Controllers/PetController.php:0
 * @route '/api/petstore/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PetController::create
 * @see app/Http/Controllers/PetController.php:0
 * @route '/api/petstore/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PetController::create
 * @see app/Http/Controllers/PetController.php:0
 * @route '/api/petstore/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PetController::create
 * @see app/Http/Controllers/PetController.php:0
 * @route '/api/petstore/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PetController::create
 * @see app/Http/Controllers/PetController.php:0
 * @route '/api/petstore/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PetController::create
 * @see app/Http/Controllers/PetController.php:0
 * @route '/api/petstore/create'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \App\Http\Controllers\PetController::show
 * @see app/Http/Controllers/PetController.php:82
 * @route '/api/petstore/{petstore}'
 */
export const show = (args: { petstore: string | number } | [petstore: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/petstore/{petstore}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PetController::show
 * @see app/Http/Controllers/PetController.php:82
 * @route '/api/petstore/{petstore}'
 */
show.url = (args: { petstore: string | number } | [petstore: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { petstore: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    petstore: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        petstore: args.petstore,
                }

    return show.definition.url
            .replace('{petstore}', parsedArgs.petstore.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PetController::show
 * @see app/Http/Controllers/PetController.php:82
 * @route '/api/petstore/{petstore}'
 */
show.get = (args: { petstore: string | number } | [petstore: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PetController::show
 * @see app/Http/Controllers/PetController.php:82
 * @route '/api/petstore/{petstore}'
 */
show.head = (args: { petstore: string | number } | [petstore: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PetController::show
 * @see app/Http/Controllers/PetController.php:82
 * @route '/api/petstore/{petstore}'
 */
    const showForm = (args: { petstore: string | number } | [petstore: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PetController::show
 * @see app/Http/Controllers/PetController.php:82
 * @route '/api/petstore/{petstore}'
 */
        showForm.get = (args: { petstore: string | number } | [petstore: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PetController::show
 * @see app/Http/Controllers/PetController.php:82
 * @route '/api/petstore/{petstore}'
 */
        showForm.head = (args: { petstore: string | number } | [petstore: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\PetController::edit
 * @see app/Http/Controllers/PetController.php:0
 * @route '/api/petstore/{petstore}/edit'
 */
export const edit = (args: { petstore: string | number } | [petstore: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/api/petstore/{petstore}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PetController::edit
 * @see app/Http/Controllers/PetController.php:0
 * @route '/api/petstore/{petstore}/edit'
 */
edit.url = (args: { petstore: string | number } | [petstore: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { petstore: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    petstore: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        petstore: args.petstore,
                }

    return edit.definition.url
            .replace('{petstore}', parsedArgs.petstore.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PetController::edit
 * @see app/Http/Controllers/PetController.php:0
 * @route '/api/petstore/{petstore}/edit'
 */
edit.get = (args: { petstore: string | number } | [petstore: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PetController::edit
 * @see app/Http/Controllers/PetController.php:0
 * @route '/api/petstore/{petstore}/edit'
 */
edit.head = (args: { petstore: string | number } | [petstore: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PetController::edit
 * @see app/Http/Controllers/PetController.php:0
 * @route '/api/petstore/{petstore}/edit'
 */
    const editForm = (args: { petstore: string | number } | [petstore: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PetController::edit
 * @see app/Http/Controllers/PetController.php:0
 * @route '/api/petstore/{petstore}/edit'
 */
        editForm.get = (args: { petstore: string | number } | [petstore: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PetController::edit
 * @see app/Http/Controllers/PetController.php:0
 * @route '/api/petstore/{petstore}/edit'
 */
        editForm.head = (args: { petstore: string | number } | [petstore: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \App\Http\Controllers\PetController::update
 * @see app/Http/Controllers/PetController.php:0
 * @route '/api/petstore/{petstore}'
 */
export const update = (args: { petstore: string | number } | [petstore: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/petstore/{petstore}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\PetController::update
 * @see app/Http/Controllers/PetController.php:0
 * @route '/api/petstore/{petstore}'
 */
update.url = (args: { petstore: string | number } | [petstore: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { petstore: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    petstore: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        petstore: args.petstore,
                }

    return update.definition.url
            .replace('{petstore}', parsedArgs.petstore.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PetController::update
 * @see app/Http/Controllers/PetController.php:0
 * @route '/api/petstore/{petstore}'
 */
update.put = (args: { petstore: string | number } | [petstore: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\PetController::update
 * @see app/Http/Controllers/PetController.php:0
 * @route '/api/petstore/{petstore}'
 */
update.patch = (args: { petstore: string | number } | [petstore: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\PetController::update
 * @see app/Http/Controllers/PetController.php:0
 * @route '/api/petstore/{petstore}'
 */
    const updateForm = (args: { petstore: string | number } | [petstore: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PetController::update
 * @see app/Http/Controllers/PetController.php:0
 * @route '/api/petstore/{petstore}'
 */
        updateForm.put = (args: { petstore: string | number } | [petstore: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\PetController::update
 * @see app/Http/Controllers/PetController.php:0
 * @route '/api/petstore/{petstore}'
 */
        updateForm.patch = (args: { petstore: string | number } | [petstore: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\PetController::destroy
 * @see app/Http/Controllers/PetController.php:0
 * @route '/api/petstore/{petstore}'
 */
export const destroy = (args: { petstore: string | number } | [petstore: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/petstore/{petstore}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\PetController::destroy
 * @see app/Http/Controllers/PetController.php:0
 * @route '/api/petstore/{petstore}'
 */
destroy.url = (args: { petstore: string | number } | [petstore: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { petstore: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    petstore: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        petstore: args.petstore,
                }

    return destroy.definition.url
            .replace('{petstore}', parsedArgs.petstore.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PetController::destroy
 * @see app/Http/Controllers/PetController.php:0
 * @route '/api/petstore/{petstore}'
 */
destroy.delete = (args: { petstore: string | number } | [petstore: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\PetController::destroy
 * @see app/Http/Controllers/PetController.php:0
 * @route '/api/petstore/{petstore}'
 */
    const destroyForm = (args: { petstore: string | number } | [petstore: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PetController::destroy
 * @see app/Http/Controllers/PetController.php:0
 * @route '/api/petstore/{petstore}'
 */
        destroyForm.delete = (args: { petstore: string | number } | [petstore: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const petstore = {
    index: Object.assign(index, index),
store: Object.assign(store, store),
create: Object.assign(create, create),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default petstore