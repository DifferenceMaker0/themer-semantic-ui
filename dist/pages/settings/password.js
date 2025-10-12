import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import PasswordController from '@/actions/App/Http/Controllers/Settings/PasswordController';
import InputError from '@/components/input-error';
import AppLayout from '@/layouts/app-layout';
import SettingsLayout from '@/layouts/settings/layout';
import { Transition } from '@headlessui/react';
import { Form, Head } from '@inertiajs/react';
import { useRef } from 'react';
import HeadingSmall from '@/components/heading-small';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { edit } from '@/routes/password';
const breadcrumbs = [
    {
        title: 'Password settings',
        href: edit().url,
    },
];
export default function Password() {
    const passwordInput = useRef(null);
    const currentPasswordInput = useRef(null);
    return (_jsxs(AppLayout, { breadcrumbs: breadcrumbs, children: [_jsx(Head, { title: "Password settings" }), _jsx(SettingsLayout, { children: _jsxs("div", { className: "space-y-6", children: [_jsx(HeadingSmall, { title: "Update password", description: "Ensure your account is using a long, random password to stay secure" }), _jsx(Form, { ...PasswordController.update.form(), options: {
                                preserveScroll: true,
                            }, resetOnError: [
                                'password',
                                'password_confirmation',
                                'current_password',
                            ], resetOnSuccess: true, onError: (errors) => {
                                if (errors.password) {
                                    passwordInput.current?.focus();
                                }
                                if (errors.current_password) {
                                    currentPasswordInput.current?.focus();
                                }
                            }, className: "space-y-6", children: ({ errors, processing, recentlySuccessful }) => (_jsxs(_Fragment, { children: [_jsxs("div", { className: "grid gap-2", children: [_jsx(Label, { htmlFor: "current_password", children: "Current password" }), _jsx(Input, { id: "current_password", ref: currentPasswordInput, name: "current_password", type: "password", className: "mt-1 block w-full", autoComplete: "current-password", placeholder: "Current password" }), _jsx(InputError, { message: errors.current_password })] }), _jsxs("div", { className: "grid gap-2", children: [_jsx(Label, { htmlFor: "password", children: "New password" }), _jsx(Input, { id: "password", ref: passwordInput, name: "password", type: "password", className: "mt-1 block w-full", autoComplete: "new-password", placeholder: "New password" }), _jsx(InputError, { message: errors.password })] }), _jsxs("div", { className: "grid gap-2", children: [_jsx(Label, { htmlFor: "password_confirmation", children: "Confirm password" }), _jsx(Input, { id: "password_confirmation", name: "password_confirmation", type: "password", className: "mt-1 block w-full", autoComplete: "new-password", placeholder: "Confirm password" }), _jsx(InputError, { message: errors.password_confirmation })] }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsx(Button, { disabled: processing, "data-test": "update-password-button", children: "Save password" }), _jsx(Transition, { show: recentlySuccessful, enter: "transition ease-in-out", enterFrom: "opacity-0", leave: "transition ease-in-out", leaveTo: "opacity-0", children: _jsx("p", { className: "text-sm text-neutral-600", children: "Saved" }) })] })] })) })] }) })] }));
}
//# sourceMappingURL=password.js.map