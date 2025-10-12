export type Appearance = 'light' | 'dark' | 'system';
export declare function initializeTheme(): void;
export declare function useAppearance(): {
    readonly appearance: Appearance;
    readonly updateAppearance: (mode: Appearance) => void;
};
//# sourceMappingURL=use-appearance.d.ts.map