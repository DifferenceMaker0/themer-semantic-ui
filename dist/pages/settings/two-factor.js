import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import HeadingSmall from '@/components/heading-small';
import TwoFactorRecoveryCodes from '@/components/two-factor-recovery-codes';
import TwoFactorSetupModal from '@/components/two-factor-setup-modal';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useTwoFactorAuth } from '@/hooks/use-two-factor-auth';
import AppLayout from '@/layouts/app-layout';
import SettingsLayout from '@/layouts/settings/layout';
import { disable, enable, show } from '@/routes/two-factor';
import { Form, Head } from '@inertiajs/react';
import { ShieldBan, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
const breadcrumbs = [
    {
        title: 'Two-Factor Authentication',
        href: show.url(),
    },
];
export default function TwoFactor({ requiresConfirmation = false, twoFactorEnabled = false, }) {
    const { qrCodeSvg, hasSetupData, manualSetupKey, clearSetupData, fetchSetupData, recoveryCodesList, fetchRecoveryCodes, errors, } = useTwoFactorAuth();
    const [showSetupModal, setShowSetupModal] = useState(false);
    return (_jsxs(AppLayout, { breadcrumbs: breadcrumbs, children: [_jsx(Head, { title: "Two-Factor Authentication" }), _jsx(SettingsLayout, { children: _jsxs("div", { className: "space-y-6", children: [_jsx(HeadingSmall, { title: "Two-Factor Authentication", description: "Manage your two-factor authentication settings" }), twoFactorEnabled ? (_jsxs("div", { className: "flex flex-col items-start justify-start space-y-4", children: [_jsx(Badge, { variant: "default", children: "Enabled" }), _jsx("p", { className: "text-muted-foreground", children: "With two-factor authentication enabled, you will be prompted for a secure, random pin during login, which you can retrieve from the TOTP-supported application on your phone." }), _jsx(TwoFactorRecoveryCodes, { recoveryCodesList: recoveryCodesList, fetchRecoveryCodes: fetchRecoveryCodes, errors: errors }), _jsx("div", { className: "relative inline", children: _jsx(Form, { ...disable.form(), children: ({ processing }) => (_jsxs(Button, { variant: "destructive", type: "submit", disabled: processing, children: [_jsx(ShieldBan, {}), " Disable 2FA"] })) }) })] })) : (_jsxs("div", { className: "flex flex-col items-start justify-start space-y-4", children: [_jsx(Badge, { variant: "destructive", children: "Disabled" }), _jsx("p", { className: "text-muted-foreground", children: "When you enable two-factor authentication, you will be prompted for a secure pin during login. This pin can be retrieved from a TOTP-supported application on your phone." }), _jsx("div", { children: hasSetupData ? (_jsxs(Button, { onClick: () => setShowSetupModal(true), children: [_jsx(ShieldCheck, {}), "Continue Setup"] })) : (_jsx(Form, { ...enable.form(), onSuccess: () => setShowSetupModal(true), children: ({ processing }) => (_jsxs(Button, { type: "submit", disabled: processing, children: [_jsx(ShieldCheck, {}), "Enable 2FA"] })) })) })] })), _jsx(TwoFactorSetupModal, { isOpen: showSetupModal, onClose: () => setShowSetupModal(false), requiresConfirmation: requiresConfirmation, twoFactorEnabled: twoFactorEnabled, qrCodeSvg: qrCodeSvg, manualSetupKey: manualSetupKey, clearSetupData: clearSetupData, fetchSetupData: fetchSetupData, errors: errors })] }) })] }));
}
//# sourceMappingURL=two-factor.js.map