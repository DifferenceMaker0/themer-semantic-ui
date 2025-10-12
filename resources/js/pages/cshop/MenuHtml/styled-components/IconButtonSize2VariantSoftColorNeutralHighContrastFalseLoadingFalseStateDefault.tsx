import styled from "styled-components";

import { DesignBlendingMode } from "./DesignBlendingMode";

const StyledIconButtonSize2VariantSoftColorNeutralHighContrastFalseLoadingFalseStateDefault = styled.div`
  background: rgba(255, 255, 255, 0);
  display: flex;
  flex-direction: column;
  gap: 0px;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
`;
const StyledFocusRing = styled.div`
  background: rgba(255, 255, 255, 0);
  border-radius: var(--radius-2-max, 4px);
  flex-shrink: 0;
  position: absolute;
  right: 0px;
  left: 0px;
  bottom: 0px;
  top: 0px;
`;
const StyledBorder2 = styled.div`
  border-radius: var(--radius-2-max, 4px);
  border-style: solid;
  border-color: var(--colors-neutral-neutral-alpha-8, rgba(0, 8, 48, 0.27));
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
  border-color: var(--colors-neutral-neutral-3, #f0f0f3);
  border-width: 2px;
  position: absolute;
  right: 0px;
  left: 0px;
  bottom: 0px;
  top: 0px;
  overflow: hidden;
`;
const StyledContentContainer = styled.div`
  background: var(--colors-neutral-neutral-alpha-3, rgba(0, 0, 51, 0.06));
  border-radius: var(--radius-2-max, 4px);
  display: flex;
  flex-direction: row;
  gap: 0px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--spacing-6, 32px);
  height: var(--tokens-space-button-height-2, 32px);
  position: relative;
  overflow: hidden;
`;

export interface IIconButtonSize2VariantSoftColorNeutralHighContrastFalseLoadingFalseStateDefaultProps {
  icon?: JSX.Element;
  focusRing?: boolean;
  size?: "1" | "2" | "3" | "4";
  variant?: "classic" | "solid" | "soft" | "surface" | "outline" | "ghost";
  color?: "accent" | "neutral" | "error";
  highContrast?: "false" | "true";
  loading?: "false" | "true";
  state?: "default" | "hover" | "active" | "disable";
  className?: string;
  style?: any;
}

export const IconButtonSize2VariantSoftColorNeutralHighContrastFalseLoadingFalseStateDefault =
  ({
    icon = <DesignBlendingMode style={{ flexShrink: "0" }} />,
    focusRing = false,
    size = "1",
    variant = "classic",
    color = "accent",
    highContrast = "false",
    loading = "false",
    state = "default",
    className,
    style,
    ...props
  }: IIconButtonSize2VariantSoftColorNeutralHighContrastFalseLoadingFalseStateDefaultProps): JSX.Element => {
    const variantsClassName =
      "size-" +
      size +
      " variant-" +
      variant +
      " color-" +
      color +
      " high-contrast-" +
      highContrast +
      " loading-" +
      loading +
      " state-" +
      state;

    return (
      <StyledIconButtonSize2VariantSoftColorNeutralHighContrastFalseLoadingFalseStateDefault
        style={style}
      >
        {focusRing && (
          <>
            <StyledFocusRing>
              <StyledBorder2></StyledBorder2>
              <StyledBorder1></StyledBorder1>
            </StyledFocusRing>
          </>
        )}
        <StyledContentContainer>{icon}</StyledContentContainer>
      </StyledIconButtonSize2VariantSoftColorNeutralHighContrastFalseLoadingFalseStateDefault>
    );
  };
