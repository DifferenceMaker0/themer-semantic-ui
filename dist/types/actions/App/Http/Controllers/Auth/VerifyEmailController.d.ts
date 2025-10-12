import { type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder';
/**
* @see \App\Http\Controllers\Auth\VerifyEmailController::__invoke
 * @see app/Http/Controllers/Auth/VerifyEmailController.php:14
 * @route '/verify-email/{id}/{hash}'
 */
declare const VerifyEmailController: {
    (args: {
        id: string | number;
        hash: string | number;
    } | [id: string | number, hash: string | number], options?: RouteQueryOptions): RouteDefinition<"get">;
    definition: {
        methods: ["get", "head"];
        url: string;
    };
    url(args: {
        id: string | number;
        hash: string | number;
    } | [id: string | number, hash: string | number], options?: RouteQueryOptions): string;
    get(args: {
        id: string | number;
        hash: string | number;
    } | [id: string | number, hash: string | number], options?: RouteQueryOptions): RouteDefinition<"get">;
    head(args: {
        id: string | number;
        hash: string | number;
    } | [id: string | number, hash: string | number], options?: RouteQueryOptions): RouteDefinition<"head">;
    form: {
        (args: {
            id: string | number;
            hash: string | number;
        } | [id: string | number, hash: string | number], options?: RouteQueryOptions): RouteFormDefinition<"get">;
        get(args: {
            id: string | number;
            hash: string | number;
        } | [id: string | number, hash: string | number], options?: RouteQueryOptions): RouteFormDefinition<"get">;
        head(args: {
            id: string | number;
            hash: string | number;
        } | [id: string | number, hash: string | number], options?: RouteQueryOptions): RouteFormDefinition<"get">;
    };
};
export default VerifyEmailController;
//# sourceMappingURL=VerifyEmailController.d.ts.map