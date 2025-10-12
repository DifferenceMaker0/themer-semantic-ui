import styled from "styled-components";

const StyledDesignBlendingMode = styled.div`
  width: var(--spacing-4, 16px);
  height: var(--spacing-4, 16px);
  position: relative;
  overflow: visible;
`;

export interface IDesignBlendingModeProps {
  className?: string;
  style?: any;
}

export const DesignBlendingMode = ({
  className,
  style,
  ...props
}: IDesignBlendingModeProps): JSX.Element => {
  return (
    <svg
      className={"design-blending-mode " + className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="16" height="16" fill="white" fillOpacity="0.01" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.2 9.59998C3.2 6.93331 4.8 4.53331 8 1.59998C11.2 4.53331 12.8 6.93331 12.8 9.59998C12.8 12.251 10.651 14.4 8 14.4C5.34903 14.4 3.2 12.251 3.2 9.59998ZM11.6826 8.85658C10.3184 8.3426 8.84042 9.02619 7.45553 9.66674C6.32821 10.1882 5.26256 10.681 4.37008 10.4763C4.30247 10.1952 4.26666 9.90178 4.26666 9.59998C4.26666 7.58614 5.36198 5.62339 8 3.06512C10.3129 5.30813 11.44 7.09335 11.6826 8.85658Z"
        fill="var(--tokens-colors-text, #1c2024)"
      />
    </svg>
  );
};
