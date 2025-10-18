import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
 * @see routes/web.php:18
 * @route '/blog/articles'
 */
export const articles = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: articles.url(options),
    method: 'get',
})

articles.definition = {
    methods: ["get","head"],
    url: '/blog/articles',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:18
 * @route '/blog/articles'
 */
articles.url = (options?: RouteQueryOptions) => {
    return articles.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:18
 * @route '/blog/articles'
 */
articles.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: articles.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:18
 * @route '/blog/articles'
 */
articles.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: articles.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:18
 * @route '/blog/articles'
 */
    const articlesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: articles.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:18
 * @route '/blog/articles'
 */
        articlesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: articles.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:18
 * @route '/blog/articles'
 */
        articlesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: articles.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    articles.form = articlesForm
const blog = {
    articles: Object.assign(articles, articles),
}

export default blog