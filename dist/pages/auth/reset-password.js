import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import NewPasswordController from '@/actions/App/Http/Controllers/Auth/NewPasswordController';
import { Form, Head } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';
export default function ResetPassword({ token, email }) {
    return (_jsxs(AuthLayout, { title: "Reset password", description: "Please enter your new password below", children: [_jsx(Head, { title: "Reset password" }), _jsx(Form, { ...NewPasswordController.store.form(), transform: (data) => ({ ...data, token, email }), resetOnSuccess: ['password', 'password_confirmation'], children: ({ processing, errors }) => (_jsxs("div", { className: "grid gap-6", children: [_jsxs("div", { className: "grid gap-2", children: [_jsx(Label, { htmlFor: "email", children: "Email" }), _jsx(Input, { id: "email", type: "email", name: "email", autoComplete: "email", value: email, className: "mt-1 block w-full", readOnly: true }), _jsx(InputError, { message: errors.email, className: "mt-2" })] }), _jsxs("div", { className: "grid gap-2", children: [_jsx(Label, { htmlFor: "password", children: "Password" }), _jsx(Input, { id: "password", type: "password", name: "password", autoComplete: "new-password", className: "mt-1 block w-full", autoFocus: true, placeholder: "Password" }), _jsx(InputError, { message: errors.password })] }), _jsxs("div", { className: "grid gap-2", children: [_jsx(Label, { htmlFor: "password_confirmation", children: "Confirm password" }), _jsx(Input, { id: "password_confirmation", type: "password", name: "password_confirmation", autoComplete: "new-password", className: "mt-1 block w-full", placeholder: "Confirm password" }), _jsx(InputError, { message: errors.password_confirmation, className: "mt-2" })] }), _jsxs(Button, { type: "submit", className: "mt-4 w-full", disabled: processing, "data-test": "reset-password-button", children: [processing && (_jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" })), "Reset password"] })] })) })] }));
}
//# sourceMappingURL=reset-password.js.map