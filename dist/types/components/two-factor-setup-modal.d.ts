interface TwoFactorSetupModalProps {
    isOpen: boolean;
    onClose: () => void;
    requiresConfirmation: boolean;
    twoFactorEnabled: boolean;
    qrCodeSvg: string | null;
    manualSetupKey: string | null;
    clearSetupData: () => void;
    fetchSetupData: () => Promise<void>;
    errors: string[];
}
export default function TwoFactorSetupModal({ isOpen, onClose, requiresConfirmation, twoFactorEnabled, qrCodeSvg, manualSetupKey, clearSetupData, fetchSetupData, errors, }: TwoFactorSetupModalProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=two-factor-setup-modal.d.ts.map