import { type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder';
/**
* @see \App\Http\Controllers\Settings\ProfileController::edit
 * @see app/Http/Controllers/Settings/ProfileController.php:19
 * @route '/settings/profile'
 */
export declare const edit: {
    (options?: RouteQueryOptions): RouteDefinition<"get">;
    definition: {
        methods: ["get", "head"];
        url: string;
    };
    url(options?: RouteQueryOptions): string;
    get(options?: RouteQueryOptions): RouteDefinition<"get">;
    head(options?: RouteQueryOptions): RouteDefinition<"head">;
    form: {
        (options?: RouteQueryOptions): RouteFormDefinition<"get">;
        get(options?: RouteQueryOptions): RouteFormDefinition<"get">;
        head(options?: RouteQueryOptions): RouteFormDefinition<"get">;
    };
};
/**
* @see \App\Http\Controllers\Settings\ProfileController::update
 * @see app/Http/Controllers/Settings/ProfileController.php:30
 * @route '/settings/profile'
 */
export declare const update: {
    (options?: RouteQueryOptions): RouteDefinition<"patch">;
    definition: {
        methods: ["patch"];
        url: string;
    };
    url(options?: RouteQueryOptions): string;
    patch(options?: RouteQueryOptions): RouteDefinition<"patch">;
    form: {
        (options?: RouteQueryOptions): RouteFormDefinition<"post">;
        patch(options?: RouteQueryOptions): RouteFormDefinition<"post">;
    };
};
/**
* @see \App\Http\Controllers\Settings\ProfileController::destroy
 * @see app/Http/Controllers/Settings/ProfileController.php:46
 * @route '/settings/profile'
 */
export declare const destroy: {
    (options?: RouteQueryOptions): RouteDefinition<"delete">;
    definition: {
        methods: ["delete"];
        url: string;
    };
    url(options?: RouteQueryOptions): string;
    delete(options?: RouteQueryOptions): RouteDefinition<"delete">;
    form: {
        (options?: RouteQueryOptions): RouteFormDefinition<"post">;
        delete(options?: RouteQueryOptions): RouteFormDefinition<"post">;
    };
};
declare const ProfileController: {
    edit: {
        (options?: RouteQueryOptions): RouteDefinition<"get">;
        definition: {
            methods: ["get", "head"];
            url: string;
        };
        url(options?: RouteQueryOptions): string;
        get(options?: RouteQueryOptions): RouteDefinition<"get">;
        head(options?: RouteQueryOptions): RouteDefinition<"head">;
        form: {
            (options?: RouteQueryOptions): RouteFormDefinition<"get">;
            get(options?: RouteQueryOptions): RouteFormDefinition<"get">;
            head(options?: RouteQueryOptions): RouteFormDefinition<"get">;
        };
    };
    update: {
        (options?: RouteQueryOptions): RouteDefinition<"patch">;
        definition: {
            methods: ["patch"];
            url: string;
        };
        url(options?: RouteQueryOptions): string;
        patch(options?: RouteQueryOptions): RouteDefinition<"patch">;
        form: {
            (options?: RouteQueryOptions): RouteFormDefinition<"post">;
            patch(options?: RouteQueryOptions): RouteFormDefinition<"post">;
        };
    };
    destroy: {
        (options?: RouteQueryOptions): RouteDefinition<"delete">;
        definition: {
            methods: ["delete"];
            url: string;
        };
        url(options?: RouteQueryOptions): string;
        delete(options?: RouteQueryOptions): RouteDefinition<"delete">;
        form: {
            (options?: RouteQueryOptions): RouteFormDefinition<"post">;
            delete(options?: RouteQueryOptions): RouteFormDefinition<"post">;
        };
    };
};
export default ProfileController;
//# sourceMappingURL=ProfileController.d.ts.map