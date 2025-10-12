import styled from "styled-components";

const StyledMusicSpeakerQuiet = styled.div`
  flex-shrink: 0;
  width: var(--spacing-3, 12px);
  height: var(--spacing-3, 12px);
  position: relative;
  overflow: visible;
`;

export interface IMusicSpeakerQuietProps {
  className?: string;
  style?: any;
}

export const MusicSpeakerQuiet = ({
  className,
  style,
  ...props
}: IMusicSpeakerQuietProps): JSX.Element => {
  return (
    <svg
      className={"music-speaker-quiet " + className}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="12" height="12" fill="white" fillOpacity="0.01" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.4 1.19999C6.4 1.04848 6.3144 0.90998 6.17889 0.84222C6.04337 0.774462 5.88121 0.789085 5.76 0.879988L2.66666 3.19999H1.2C0.537258 3.19999 0 3.73725 0 4.39999V7.59999C0 8.26271 0.537258 8.79999 1.2 8.79999H2.66666L5.76 11.12C5.88121 11.2109 6.04337 11.2255 6.17889 11.1577C6.3144 11.09 6.4 10.9515 6.4 10.8V1.19999ZM3.04 3.91999L5.6 1.99999V9.99999L3.04 8.07999C2.97076 8.02807 2.88655 7.99999 2.8 7.99999H1.2C0.979088 7.99999 0.8 7.8209 0.8 7.59999V4.39999C0.8 4.17908 0.979088 3.99999 1.2 3.99999H2.8C2.88655 3.99999 2.97076 3.97192 3.04 3.91999ZM8.0664 4.0446C7.96853 3.89747 7.76988 3.85755 7.62274 3.95544C7.4756 4.05334 7.43568 4.25198 7.53358 4.39912C8.17656 5.36553 8.17656 6.63441 7.53358 7.60082C7.43568 7.74796 7.4756 7.9466 7.62274 8.04447C7.76988 8.14239 7.96853 8.10247 8.0664 7.95533C8.85224 6.77417 8.85224 5.22576 8.0664 4.0446Z"
        fill="var(--colors-neutral-neutral-11, #60646c)"
      />
    </svg>
  );
};
