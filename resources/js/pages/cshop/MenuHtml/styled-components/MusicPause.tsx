import styled from "styled-components";

const StyledMusicPause = styled.div`
  flex-shrink: 0;
  width: var(--spacing-4, 16px);
  height: var(--spacing-4, 16px);
  position: relative;
  overflow: visible;
`;

export interface IMusicPauseProps {
  className?: string;
  style?: any;
}

export const MusicPause = ({
  className,
  style,
  ...props
}: IMusicPauseProps): JSX.Element => {
  return (
    <svg
      className={"music-pause " + className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="16"
        height="16"
        fill="var(--tokens-colors-accent-contrast, #ffffff)"
        fillOpacity="0.01"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.45336 2.93332C6.45336 2.60932 6.19071 2.34665 5.8667 2.34665C5.54269 2.34665 5.28003 2.60932 5.28003 2.93332V13.0667C5.28003 13.3906 5.54269 13.6533 5.8667 13.6533C6.19071 13.6533 6.45336 13.3906 6.45336 13.0667V2.93332ZM10.7201 2.93332C10.7201 2.60932 10.4574 2.34665 10.1334 2.34665C9.80935 2.34665 9.5467 2.60932 9.5467 2.93332V13.0667C9.5467 13.3906 9.80935 13.6533 10.1334 13.6533C10.4574 13.6533 10.7201 13.3906 10.7201 13.0667V2.93332Z"
        fill="var(--tokens-colors-accent-contrast, #ffffff)"
      />
    </svg>
  );
};
