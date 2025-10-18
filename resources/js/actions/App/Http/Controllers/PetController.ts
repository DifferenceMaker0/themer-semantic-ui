import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
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
* @see \App\Http\Controllers\PetController::show
 * @see app/Http/Controllers/PetController.php:64
 * @route '/api/petstore/{id}'
 */
const showbb9a77135af967b3422456d5d1d54d3d = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showbb9a77135af967b3422456d5d1d54d3d.url(args, options),
    method: 'get',
})

showbb9a77135af967b3422456d5d1d54d3d.definition = {
    methods: ["get","head"],
    url: '/api/petstore/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PetController::show
 * @see app/Http/Controllers/PetController.php:64
 * @route '/api/petstore/{id}'
 */
showbb9a77135af967b3422456d5d1d54d3d.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return showbb9a77135af967b3422456d5d1d54d3d.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PetController::show
 * @see app/Http/Controllers/PetController.php:64
 * @route '/api/petstore/{id}'
 */
showbb9a77135af967b3422456d5d1d54d3d.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showbb9a77135af967b3422456d5d1d54d3d.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PetController::show
 * @see app/Http/Controllers/PetController.php:64
 * @route '/api/petstore/{id}'
 */
showbb9a77135af967b3422456d5d1d54d3d.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showbb9a77135af967b3422456d5d1d54d3d.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PetController::show
 * @see app/Http/Controllers/PetController.php:64
 * @route '/api/petstore/{id}'
 */
    const showbb9a77135af967b3422456d5d1d54d3dForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: showbb9a77135af967b3422456d5d1d54d3d.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PetController::show
 * @see app/Http/Controllers/PetController.php:64
 * @route '/api/petstore/{id}'
 */
        showbb9a77135af967b3422456d5d1d54d3dForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showbb9a77135af967b3422456d5d1d54d3d.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PetController::show
 * @see app/Http/Controllers/PetController.php:64
 * @route '/api/petstore/{id}'
 */
        showbb9a77135af967b3422456d5d1d54d3dForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showbb9a77135af967b3422456d5d1d54d3d.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    showbb9a77135af967b3422456d5d1d54d3d.form = showbb9a77135af967b3422456d5d1d54d3dForm
    /**
* @see \App\Http\Controllers\PetController::show
 * @see app/Http/Controllers/PetController.php:64
 * @route '/api/petstore/{petstore}'
 */
const show7e99ce898fcf6519f742a9b80c6f2fcd = (args: { petstore: string | number } | [petstore: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show7e99ce898fcf6519f742a9b80c6f2fcd.url(args, options),
    method: 'get',
})

show7e99ce898fcf6519f742a9b80c6f2fcd.definition = {
    methods: ["get","head"],
    url: '/api/petstore/{petstore}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PetController::show
 * @see app/Http/Controllers/PetController.php:64
 * @route '/api/petstore/{petstore}'
 */
show7e99ce898fcf6519f742a9b80c6f2fcd.url = (args: { petstore: string | number } | [petstore: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return show7e99ce898fcf6519f742a9b80c6f2fcd.definition.url
            .replace('{petstore}', parsedArgs.petstore.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PetController::show
 * @see app/Http/Controllers/PetController.php:64
 * @route '/api/petstore/{petstore}'
 */
show7e99ce898fcf6519f742a9b80c6f2fcd.get = (args: { petstore: string | number } | [petstore: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show7e99ce898fcf6519f742a9b80c6f2fcd.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PetController::show
 * @see app/Http/Controllers/PetController.php:64
 * @route '/api/petstore/{petstore}'
 */
show7e99ce898fcf6519f742a9b80c6f2fcd.head = (args: { petstore: string | number } | [petstore: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show7e99ce898fcf6519f742a9b80c6f2fcd.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PetController::show
 * @see app/Http/Controllers/PetController.php:64
 * @route '/api/petstore/{petstore}'
 */
    const show7e99ce898fcf6519f742a9b80c6f2fcdForm = (args: { petstore: string | number } | [petstore: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show7e99ce898fcf6519f742a9b80c6f2fcd.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PetController::show
 * @see app/Http/Controllers/PetController.php:64
 * @route '/api/petstore/{petstore}'
 */
        show7e99ce898fcf6519f742a9b80c6f2fcdForm.get = (args: { petstore: string | number } | [petstore: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show7e99ce898fcf6519f742a9b80c6f2fcd.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PetController::show
 * @see app/Http/Controllers/PetController.php:64
 * @route '/api/petstore/{petstore}'
 */
        show7e99ce898fcf6519f742a9b80c6f2fcdForm.head = (args: { petstore: string | number } | [petstore: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show7e99ce898fcf6519f742a9b80c6f2fcd.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show7e99ce898fcf6519f742a9b80c6f2fcd.form = show7e99ce898fcf6519f742a9b80c6f2fcdForm

export const show = {
    '/api/petstore/{id}': showbb9a77135af967b3422456d5d1d54d3d,
    '/api/petstore/{petstore}': show7e99ce898fcf6519f742a9b80c6f2fcd,
}

/**
* @see \App\Http\Controllers\PetController::update
 * @see app/Http/Controllers/PetController.php:0
 * @route '/api/petstore/{id}'
 */
const updatebb9a77135af967b3422456d5d1d54d3d = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatebb9a77135af967b3422456d5d1d54d3d.url(args, options),
    method: 'put',
})

updatebb9a77135af967b3422456d5d1d54d3d.definition = {
    methods: ["put"],
    url: '/api/petstore/{id}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\PetController::update
 * @see app/Http/Controllers/PetController.php:0
 * @route '/api/petstore/{id}'
 */
updatebb9a77135af967b3422456d5d1d54d3d.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return updatebb9a77135af967b3422456d5d1d54d3d.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PetController::update
 * @see app/Http/Controllers/PetController.php:0
 * @route '/api/petstore/{id}'
 */
updatebb9a77135af967b3422456d5d1d54d3d.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatebb9a77135af967b3422456d5d1d54d3d.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\PetController::update
 * @see app/Http/Controllers/PetController.php:0
 * @route '/api/petstore/{id}'
 */
    const updatebb9a77135af967b3422456d5d1d54d3dForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updatebb9a77135af967b3422456d5d1d54d3d.url(args, {
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
 * @route '/api/petstore/{id}'
 */
        updatebb9a77135af967b3422456d5d1d54d3dForm.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updatebb9a77135af967b3422456d5d1d54d3d.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    updatebb9a77135af967b3422456d5d1d54d3d.form = updatebb9a77135af967b3422456d5d1d54d3dForm
    /**
* @see \App\Http\Controllers\PetController::update
 * @see app/Http/Controllers/PetController.php:0
 * @route '/api/petstore/{petstore}'
 */
const update7e99ce898fcf6519f742a9b80c6f2fcd = (args: { petstore: string | number } | [petstore: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update7e99ce898fcf6519f742a9b80c6f2fcd.url(args, options),
    method: 'put',
})

update7e99ce898fcf6519f742a9b80c6f2fcd.definition = {
    methods: ["put","patch"],
    url: '/api/petstore/{petstore}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\PetController::update
 * @see app/Http/Controllers/PetController.php:0
 * @route '/api/petstore/{petstore}'
 */
update7e99ce898fcf6519f742a9b80c6f2fcd.url = (args: { petstore: string | number } | [petstore: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return update7e99ce898fcf6519f742a9b80c6f2fcd.definition.url
            .replace('{petstore}', parsedArgs.petstore.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PetController::update
 * @see app/Http/Controllers/PetController.php:0
 * @route '/api/petstore/{petstore}'
 */
update7e99ce898fcf6519f742a9b80c6f2fcd.put = (args: { petstore: string | number } | [petstore: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update7e99ce898fcf6519f742a9b80c6f2fcd.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\PetController::update
 * @see app/Http/Controllers/PetController.php:0
 * @route '/api/petstore/{petstore}'
 */
update7e99ce898fcf6519f742a9b80c6f2fcd.patch = (args: { petstore: string | number } | [petstore: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update7e99ce898fcf6519f742a9b80c6f2fcd.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\PetController::update
 * @see app/Http/Controllers/PetController.php:0
 * @route '/api/petstore/{petstore}'
 */
    const update7e99ce898fcf6519f742a9b80c6f2fcdForm = (args: { petstore: string | number } | [petstore: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update7e99ce898fcf6519f742a9b80c6f2fcd.url(args, {
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
        update7e99ce898fcf6519f742a9b80c6f2fcdForm.put = (args: { petstore: string | number } | [petstore: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update7e99ce898fcf6519f742a9b80c6f2fcd.url(args, {
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
        update7e99ce898fcf6519f742a9b80c6f2fcdForm.patch = (args: { petstore: string | number } | [petstore: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update7e99ce898fcf6519f742a9b80c6f2fcd.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update7e99ce898fcf6519f742a9b80c6f2fcd.form = update7e99ce898fcf6519f742a9b80c6f2fcdForm

export const update = {
    '/api/petstore/{id}': updatebb9a77135af967b3422456d5d1d54d3d,
    '/api/petstore/{petstore}': update7e99ce898fcf6519f742a9b80c6f2fcd,
}

/**
* @see \App\Http\Controllers\PetController::destroy
 * @see app/Http/Controllers/PetController.php:0
 * @route '/api/petstore/{id}'
 */
const destroybb9a77135af967b3422456d5d1d54d3d = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroybb9a77135af967b3422456d5d1d54d3d.url(args, options),
    method: 'delete',
})

destroybb9a77135af967b3422456d5d1d54d3d.definition = {
    methods: ["delete"],
    url: '/api/petstore/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\PetController::destroy
 * @see app/Http/Controllers/PetController.php:0
 * @route '/api/petstore/{id}'
 */
destroybb9a77135af967b3422456d5d1d54d3d.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return destroybb9a77135af967b3422456d5d1d54d3d.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PetController::destroy
 * @see app/Http/Controllers/PetController.php:0
 * @route '/api/petstore/{id}'
 */
destroybb9a77135af967b3422456d5d1d54d3d.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroybb9a77135af967b3422456d5d1d54d3d.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\PetController::destroy
 * @see app/Http/Controllers/PetController.php:0
 * @route '/api/petstore/{id}'
 */
    const destroybb9a77135af967b3422456d5d1d54d3dForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroybb9a77135af967b3422456d5d1d54d3d.url(args, {
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
 * @route '/api/petstore/{id}'
 */
        destroybb9a77135af967b3422456d5d1d54d3dForm.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroybb9a77135af967b3422456d5d1d54d3d.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroybb9a77135af967b3422456d5d1d54d3d.form = destroybb9a77135af967b3422456d5d1d54d3dForm
    /**
* @see \App\Http\Controllers\PetController::destroy
 * @see app/Http/Controllers/PetController.php:0
 * @route '/api/petstore/{petstore}'
 */
const destroy7e99ce898fcf6519f742a9b80c6f2fcd = (args: { petstore: string | number } | [petstore: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy7e99ce898fcf6519f742a9b80c6f2fcd.url(args, options),
    method: 'delete',
})

destroy7e99ce898fcf6519f742a9b80c6f2fcd.definition = {
    methods: ["delete"],
    url: '/api/petstore/{petstore}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\PetController::destroy
 * @see app/Http/Controllers/PetController.php:0
 * @route '/api/petstore/{petstore}'
 */
destroy7e99ce898fcf6519f742a9b80c6f2fcd.url = (args: { petstore: string | number } | [petstore: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return destroy7e99ce898fcf6519f742a9b80c6f2fcd.definition.url
            .replace('{petstore}', parsedArgs.petstore.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PetController::destroy
 * @see app/Http/Controllers/PetController.php:0
 * @route '/api/petstore/{petstore}'
 */
destroy7e99ce898fcf6519f742a9b80c6f2fcd.delete = (args: { petstore: string | number } | [petstore: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy7e99ce898fcf6519f742a9b80c6f2fcd.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\PetController::destroy
 * @see app/Http/Controllers/PetController.php:0
 * @route '/api/petstore/{petstore}'
 */
    const destroy7e99ce898fcf6519f742a9b80c6f2fcdForm = (args: { petstore: string | number } | [petstore: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy7e99ce898fcf6519f742a9b80c6f2fcd.url(args, {
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
        destroy7e99ce898fcf6519f742a9b80c6f2fcdForm.delete = (args: { petstore: string | number } | [petstore: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy7e99ce898fcf6519f742a9b80c6f2fcd.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy7e99ce898fcf6519f742a9b80c6f2fcd.form = destroy7e99ce898fcf6519f742a9b80c6f2fcdForm

export const destroy = {
    '/api/petstore/{id}': destroybb9a77135af967b3422456d5d1d54d3d,
    '/api/petstore/{petstore}': destroy7e99ce898fcf6519f742a9b80c6f2fcd,
}

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
const PetController = { index, store, show, update, destroy, create, edit }

export default PetController