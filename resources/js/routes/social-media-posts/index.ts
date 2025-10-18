import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\SocialMediaPostController::index
 * @see app/Http/Controllers/SocialMediaPostController.php:16
 * @route '/api/social-media-posts'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/social-media-posts',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SocialMediaPostController::index
 * @see app/Http/Controllers/SocialMediaPostController.php:16
 * @route '/api/social-media-posts'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SocialMediaPostController::index
 * @see app/Http/Controllers/SocialMediaPostController.php:16
 * @route '/api/social-media-posts'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SocialMediaPostController::index
 * @see app/Http/Controllers/SocialMediaPostController.php:16
 * @route '/api/social-media-posts'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SocialMediaPostController::index
 * @see app/Http/Controllers/SocialMediaPostController.php:16
 * @route '/api/social-media-posts'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SocialMediaPostController::index
 * @see app/Http/Controllers/SocialMediaPostController.php:16
 * @route '/api/social-media-posts'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SocialMediaPostController::index
 * @see app/Http/Controllers/SocialMediaPostController.php:16
 * @route '/api/social-media-posts'
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
* @see \App\Http\Controllers\SocialMediaPostController::store
 * @see app/Http/Controllers/SocialMediaPostController.php:37
 * @route '/api/social-media-posts'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/social-media-posts',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SocialMediaPostController::store
 * @see app/Http/Controllers/SocialMediaPostController.php:37
 * @route '/api/social-media-posts'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SocialMediaPostController::store
 * @see app/Http/Controllers/SocialMediaPostController.php:37
 * @route '/api/social-media-posts'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\SocialMediaPostController::store
 * @see app/Http/Controllers/SocialMediaPostController.php:37
 * @route '/api/social-media-posts'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\SocialMediaPostController::store
 * @see app/Http/Controllers/SocialMediaPostController.php:37
 * @route '/api/social-media-posts'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\SocialMediaPostController::show
 * @see app/Http/Controllers/SocialMediaPostController.php:76
 * @route '/api/social-media-posts/{social_media_post}'
 */
export const show = (args: { social_media_post: string | number } | [social_media_post: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/social-media-posts/{social_media_post}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SocialMediaPostController::show
 * @see app/Http/Controllers/SocialMediaPostController.php:76
 * @route '/api/social-media-posts/{social_media_post}'
 */
show.url = (args: { social_media_post: string | number } | [social_media_post: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { social_media_post: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    social_media_post: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        social_media_post: args.social_media_post,
                }

    return show.definition.url
            .replace('{social_media_post}', parsedArgs.social_media_post.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SocialMediaPostController::show
 * @see app/Http/Controllers/SocialMediaPostController.php:76
 * @route '/api/social-media-posts/{social_media_post}'
 */
show.get = (args: { social_media_post: string | number } | [social_media_post: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SocialMediaPostController::show
 * @see app/Http/Controllers/SocialMediaPostController.php:76
 * @route '/api/social-media-posts/{social_media_post}'
 */
show.head = (args: { social_media_post: string | number } | [social_media_post: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SocialMediaPostController::show
 * @see app/Http/Controllers/SocialMediaPostController.php:76
 * @route '/api/social-media-posts/{social_media_post}'
 */
    const showForm = (args: { social_media_post: string | number } | [social_media_post: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SocialMediaPostController::show
 * @see app/Http/Controllers/SocialMediaPostController.php:76
 * @route '/api/social-media-posts/{social_media_post}'
 */
        showForm.get = (args: { social_media_post: string | number } | [social_media_post: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SocialMediaPostController::show
 * @see app/Http/Controllers/SocialMediaPostController.php:76
 * @route '/api/social-media-posts/{social_media_post}'
 */
        showForm.head = (args: { social_media_post: string | number } | [social_media_post: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\SocialMediaPostController::update
 * @see app/Http/Controllers/SocialMediaPostController.php:96
 * @route '/api/social-media-posts/{social_media_post}'
 */
export const update = (args: { social_media_post: string | number } | [social_media_post: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/social-media-posts/{social_media_post}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\SocialMediaPostController::update
 * @see app/Http/Controllers/SocialMediaPostController.php:96
 * @route '/api/social-media-posts/{social_media_post}'
 */
update.url = (args: { social_media_post: string | number } | [social_media_post: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { social_media_post: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    social_media_post: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        social_media_post: args.social_media_post,
                }

    return update.definition.url
            .replace('{social_media_post}', parsedArgs.social_media_post.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SocialMediaPostController::update
 * @see app/Http/Controllers/SocialMediaPostController.php:96
 * @route '/api/social-media-posts/{social_media_post}'
 */
update.put = (args: { social_media_post: string | number } | [social_media_post: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\SocialMediaPostController::update
 * @see app/Http/Controllers/SocialMediaPostController.php:96
 * @route '/api/social-media-posts/{social_media_post}'
 */
update.patch = (args: { social_media_post: string | number } | [social_media_post: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\SocialMediaPostController::update
 * @see app/Http/Controllers/SocialMediaPostController.php:96
 * @route '/api/social-media-posts/{social_media_post}'
 */
    const updateForm = (args: { social_media_post: string | number } | [social_media_post: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\SocialMediaPostController::update
 * @see app/Http/Controllers/SocialMediaPostController.php:96
 * @route '/api/social-media-posts/{social_media_post}'
 */
        updateForm.put = (args: { social_media_post: string | number } | [social_media_post: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\SocialMediaPostController::update
 * @see app/Http/Controllers/SocialMediaPostController.php:96
 * @route '/api/social-media-posts/{social_media_post}'
 */
        updateForm.patch = (args: { social_media_post: string | number } | [social_media_post: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\SocialMediaPostController::destroy
 * @see app/Http/Controllers/SocialMediaPostController.php:136
 * @route '/api/social-media-posts/{social_media_post}'
 */
export const destroy = (args: { social_media_post: string | number } | [social_media_post: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/social-media-posts/{social_media_post}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\SocialMediaPostController::destroy
 * @see app/Http/Controllers/SocialMediaPostController.php:136
 * @route '/api/social-media-posts/{social_media_post}'
 */
destroy.url = (args: { social_media_post: string | number } | [social_media_post: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { social_media_post: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    social_media_post: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        social_media_post: args.social_media_post,
                }

    return destroy.definition.url
            .replace('{social_media_post}', parsedArgs.social_media_post.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SocialMediaPostController::destroy
 * @see app/Http/Controllers/SocialMediaPostController.php:136
 * @route '/api/social-media-posts/{social_media_post}'
 */
destroy.delete = (args: { social_media_post: string | number } | [social_media_post: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\SocialMediaPostController::destroy
 * @see app/Http/Controllers/SocialMediaPostController.php:136
 * @route '/api/social-media-posts/{social_media_post}'
 */
    const destroyForm = (args: { social_media_post: string | number } | [social_media_post: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\SocialMediaPostController::destroy
 * @see app/Http/Controllers/SocialMediaPostController.php:136
 * @route '/api/social-media-posts/{social_media_post}'
 */
        destroyForm.delete = (args: { social_media_post: string | number } | [social_media_post: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const socialMediaPosts = {
    index: Object.assign(index, index),
store: Object.assign(store, store),
show: Object.assign(show, show),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default socialMediaPosts