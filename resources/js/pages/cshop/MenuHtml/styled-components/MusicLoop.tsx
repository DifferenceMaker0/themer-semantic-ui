import styled from "styled-components";

const StyledMusicLoop = styled.div`
  flex-shrink: 0;
  width: var(--spacing-4, 16px);
  height: var(--spacing-4, 16px);
  position: relative;
  overflow: visible;
`;

export interface IMusicLoopProps {
  className?: string;
  style?: any;
}

export const MusicLoop = ({
  className,
  style,
  ...props
}: IMusicLoopProps): JSX.Element => {
  return (
    <svg
      className={"music-loop " + className}
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
        d="M3.57723 1.97712C3.78552 1.76884 3.78552 1.43116 3.57723 1.22288C3.36896 1.01459 3.03127 1.01459 2.82299 1.22288L0.689658 3.35621C0.481377 3.56449 0.481377 3.90217 0.689658 4.11045L2.82299 6.24379C3.03127 6.45207 3.36896 6.45207 3.57723 6.24379C3.78552 6.03551 3.78552 5.69782 3.57723 5.48955L2.35436 4.26667H10.1334C12.1953 4.26667 13.8668 5.93813 13.8668 8C13.8668 8.29455 14.1056 8.53333 14.4001 8.53333C14.6946 8.53333 14.9334 8.29455 14.9334 8C14.9334 5.34903 12.7844 3.2 10.1334 3.2H2.35436L3.57723 1.97712ZM2.13345 8C2.13345 7.70545 1.89466 7.46667 1.60011 7.46667C1.30556 7.46667 1.06678 7.70545 1.06678 8C1.06678 10.651 3.21582 12.8 5.86678 12.8H13.6459L12.4229 14.0228C12.2147 14.2311 12.2147 14.5689 12.4229 14.7772C12.6313 14.9854 12.969 14.9854 13.1773 14.7772L15.3106 12.6438C15.5188 12.4355 15.5188 12.0978 15.3106 11.8895L13.1773 9.75621C12.969 9.54792 12.6313 9.54792 12.4229 9.75621C12.2147 9.96449 12.2147 10.3022 12.4229 10.5105L13.6459 11.7333H5.86678C3.80491 11.7333 2.13345 10.0619 2.13345 8Z"
        fill="var(--colors-neutral-neutral-11, #60646c)"
      />
    </svg>
  );
};
