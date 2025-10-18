/**
 * CSRF Token Utilities for Themeswitcher
 * 
 * Centralized CSRF token handling for all themeswitcher API services.
 * This ensures consistent CSRF protection across all components.
 */

export interface CSRFHeaders extends Record<string, string> {
    'Content-Type': string;
    'X-Requested-With': string;
    'Accept': string;
    'X-CSRF-TOKEN'?: string;
}

export interface CSRFRequestOptions extends RequestInit {
    headers?: HeadersInit;
}

/**
 * Get CSRF token from meta tag
 */
export function getCSRFToken(): string | null {
    const metaTag = document.querySelector('meta[name="csrf-token"]');
    return metaTag?.getAttribute('content') || null;
}

/**
 * Create headers with CSRF token for API requests
 */
export function createCSRFHeaders(additionalHeaders: Record<string, string> = {}): CSRFHeaders {
    const token = getCSRFToken();

    const headers: CSRFHeaders = {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': 'application/json',
        ...additionalHeaders,
    };

    if (token) {
        headers['X-CSRF-TOKEN'] = token;
    }

    return headers;
}

/**
 * Create fetch options with CSRF protection
 */
export function createCSRFRequestOptions(options: CSRFRequestOptions = {}): RequestInit {
    const defaultHeaders = createCSRFHeaders();

    return {
        ...options,
        headers: {
            ...defaultHeaders,
            ...options.headers,
        },
        credentials: 'same-origin', // Important for CSRF protection
    };
}

/**
 * Make a CSRF-protected fetch request
 */
export async function csrfFetch(url: string, options: CSRFRequestOptions = {}): Promise<Response> {
    const requestOptions = createCSRFRequestOptions(options);

    const response = await fetch(url, requestOptions);

    // Handle common CSRF errors
    if (response.status === 419) {
        throw new Error('CSRF token mismatch. Please refresh the page and try again.');
    }

    if (response.status === 401) {
        throw new Error('Authentication required. Please log in and try again.');
    }

    return response;
}

/**
 * Make a CSRF-protected JSON API request
 */
export async function csrfApiRequest<T = any>(
    url: string,
    options: CSRFRequestOptions = {}
): Promise<T> {
    const response = await csrfFetch(url, options);

    if (!response.ok) {
        let errorMessage = `HTTP ${response.status}: ${response.statusText}`;

        try {
            const errorData = await response.json();
            errorMessage = errorData.message || errorMessage;
        } catch {
            // If we can't parse the error response, use the default message
        }

        throw new Error(errorMessage);
    }

    return response.json();
}

/**
 * Validate that CSRF token is available
 */
export function validateCSRFToken(): boolean {
    const token = getCSRFToken();

    if (!token) {
        console.warn('CSRF token not found. Make sure the page includes <meta name="csrf-token" content="...">');
        return false;
    }

    return true;
}

/**
 * Initialize CSRF protection (call this on app startup)
 */
export function initializeCSRFProtection(): void {
    if (!validateCSRFToken()) {
        console.error('CSRF protection initialization failed: No CSRF token found');
    } else {
        console.log('CSRF protection initialized successfully');
    }
}
