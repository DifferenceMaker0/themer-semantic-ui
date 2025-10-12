import styled from "styled-components";

const StyledSliderSize2VariantSurfaceHighContrastFalseOrientationHorizontalStateDefaultRangeFalseValue75 = styled.div`
  background: rgba(255, 255, 255, 0);
  display: flex;
  flex-direction: row;
  gap: 0px;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 8px;
  position: relative;
`;
const StyledTrack = styled.div`
  background: var(--colors-neutral-neutral-alpha-3, rgba(0, 0, 51, 0.06));
  border-radius: var(--radius-1, 3px);
  border-style: solid;
  border-color: var(--colors-neutral-neutral-alpha-5, rgba(0, 9, 50, 0.12));
  border-width: 1px;
  display: flex;
  flex-direction: row;
  gap: 0px;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 1;
  height: var(--spacing-2, 8px);
  position: relative;
`;
const StyledRange = styled.div`
  background: var(--colors-accent-accent-9, #3e63dd);
  border-radius: var(--radius-1, 3px);
  border-style: solid;
  border-color: var(--colors-neutral-neutral-alpha-5, rgba(0, 9, 50, 0.12));
  border-width: 1px;
  flex-shrink: 0;
  width: 75%;
  height: 8px;
  position: absolute;
  right: 25%;
  left: 0%;
  top: 50%;
  translate: 0 -50%;
`;
const StyledThumb = styled.div`
  background: var(--tokens-colors-white-contrast, #ffffff);
  border-radius: var(--radius-2-max, 4px);
  border-style: solid;
  border-color: var(--colors-neutral-neutral-7, #cdced6);
  border-width: 1px;
  width: var(--spacing-3, 12px);
  height: var(--spacing-3, 12px);
  position: absolute;
  right: -6px;
  top: 50%;
  translate: 0 -50%;
  overflow: hidden;
`;
const StyledFocusRing = styled.div`
  background: rgba(255, 255, 255, 0);
  border-radius: var(--radius-2-max, 4px);
  border-style: solid;
  border-color: var(--colors-neutral-neutral-7, #cdced6);
  border-width: 1px;
  width: var(--spacing-3, 12px);
  height: var(--spacing-3, 12px);
  position: absolute;
  right: -6px;
  top: 50%;
  translate: 0 -50%;
`;
const StyledBorder2 = styled.div`
  border-radius: var(--radius-2-max, 4px);
  border-style: solid;
  border-color: var(--colors-accent-accent-alpha-8, rgba(0, 52, 220, 0.45));
  border-width: 4px;
  position: absolute;
  right: 0px;
  left: 0px;
  bottom: 0px;
  top: 0px;
  overflow: hidden;
`;
const StyledBorder1 = styled.div`
  border-radius: var(--radius-2-max, 4px);
  border-style: solid;
  border-color: var(--colors-accent-accent-3, #edf2fe);
  border-width: 2px;
  position: absolute;
  right: 0px;
  left: 0px;
  bottom: 0px;
  top: 0px;
  overflow: hidden;
`;

export interface ISliderSize2VariantSurfaceHighContrastFalseOrientationHorizontalStateDefaultRangeFalseValue75Props {
  focusRing?: boolean;
  size?: "1" | "2" | "3";
  variant?: "classic" | "surface" | "soft";
  highContrast?: "false" | "true";
  orientation?: "horizontal" | "vertical";
  state?: "default" | "disable";
  range?: "false" | "true";
  value?: "25" | "50" | "75";
  className?: string;
  style?: any;
}

export const SliderSize2VariantSurfaceHighContrastFalseOrientationHorizontalStateDefaultRangeFalseValue75 =
  ({
    focusRing = false,
    size = "1",
    variant = "classic",
    highContrast = "false",
    orientation = "horizontal",
    state = "default",
    range = "false",
    value = "25",
    className,
    style,
    ...props
  }: ISliderSize2VariantSurfaceHighContrastFalseOrientationHorizontalStateDefaultRangeFalseValue75Props): JSX.Element => {
    const variantsClassName =
      "size-" +
      size +
      " variant-" +
      variant +
      " high-contrast-" +
      highContrast +
      " orientation-" +
      orientation +
      " state-" +
      state +
      " range-" +
      range +
      " value-" +
      value;

    return (
      <StyledSliderSize2VariantSurfaceHighContrastFalseOrientationHorizontalStateDefaultRangeFalseValue75
        style={style}
      >
        <StyledTrack>
          <StyledRange>
            <StyledThumb></StyledThumb>
            {focusRing && (
              <>
                <StyledFocusRing>
                  <StyledBorder2></StyledBorder2>
                  <StyledBorder1></StyledBorder1>
                </StyledFocusRing>
              </>
            )}
          </StyledRange>
        </StyledTrack>
      </StyledSliderSize2VariantSurfaceHighContrastFalseOrientationHorizontalStateDefaultRangeFalseValue75>
    );
  };
