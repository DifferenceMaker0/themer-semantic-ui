import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';
import { store } from '@/routes/password/confirm';
import { Form, Head } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
export default function ConfirmPassword() {
    return (_jsxs(AuthLayout, { title: "Confirm your password", description: "This is a secure area of the application. Please confirm your password before continuing.", children: [_jsx(Head, { title: "Confirm password" }), _jsx(Form, { ...store.form(), resetOnSuccess: ['password'], children: ({ processing, errors }) => (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "grid gap-2", children: [_jsx(Label, { htmlFor: "password", children: "Password" }), _jsx(Input, { id: "password", type: "password", name: "password", placeholder: "Password", autoComplete: "current-password", autoFocus: true }), _jsx(InputError, { message: errors.password })] }), _jsx("div", { className: "flex items-center", children: _jsxs(Button, { className: "w-full", disabled: processing, "data-test": "confirm-password-button", children: [processing && (_jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" })), "Confirm password"] }) })] })) })] }));
}
//# sourceMappingURL=confirm-password.js.map