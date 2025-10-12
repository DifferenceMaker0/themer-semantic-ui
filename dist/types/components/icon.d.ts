import { type LucideProps } from 'lucide-react';
import { type ComponentType } from 'react';
interface IconProps extends Omit<LucideProps, 'ref'> {
    iconNode: ComponentType<LucideProps>;
}
export declare function Icon({ iconNode: IconComponent, className, ...props }: IconProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=icon.d.ts.map