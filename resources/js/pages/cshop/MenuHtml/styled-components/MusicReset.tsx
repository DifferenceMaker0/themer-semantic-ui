import styled from "styled-components";

const StyledMusicReset = styled.div`
  flex-shrink: 0;
  width: var(--spacing-4, 16px);
  height: var(--spacing-4, 16px);
  position: relative;
  overflow: visible;
`;

export interface IMusicResetProps {
  className?: string;
  style?: any;
}

export const MusicReset = ({
  className,
  style,
  ...props
}: IMusicResetProps): JSX.Element => {
  return (
    <svg
      className={"music-reset " + className}
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
        d="M5.17709 2.28955C5.38538 2.49782 5.38538 2.83551 5.17709 3.04379L3.95422 4.26667H9.59997C12.251 4.26667 14.4 6.4157 14.4 9.06667C14.4 11.7177 12.251 13.8667 9.59997 13.8667H5.3333C5.03875 13.8667 4.79997 13.6278 4.79997 13.3333C4.79997 13.0388 5.03875 12.8 5.3333 12.8H9.59997C11.6618 12.8 13.3333 11.1285 13.3333 9.06667C13.3333 7.0048 11.6618 5.33333 9.59997 5.33333H3.95422L5.17709 6.55621C5.38538 6.76449 5.38538 7.10218 5.17709 7.31045C4.96881 7.51874 4.63113 7.51874 4.42285 7.31045L2.28952 5.17712C2.08123 4.96884 2.08123 4.63116 2.28952 4.42288L4.42285 2.28955C4.63113 2.08126 4.96881 2.08126 5.17709 2.28955Z"
        fill="var(--colors-neutral-neutral-11, #60646c)"
      />
    </svg>
  );
};
