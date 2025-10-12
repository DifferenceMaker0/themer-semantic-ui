import styled from "styled-components";

const StyledTextSize2WeightRegularAlignLeftHighContrastFalse = styled.div`
  background: rgba(255, 255, 255, 0);
  display: flex;
  flex-direction: row;
  gap: 0px;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
`;
const StyledText = styled.div`
  color: var(--colors-accent-accent-9, #3e63dd);
  text-align: left;
  font-family: var(
    --typography-2-regular-font-family,
    "SfPro-Regular",
    sans-serif
  );
  font-size: var(--typography-2-regular-font-size, 14px);
  line-height: var(--typography-2-regular-line-height, 20px);
  font-weight: var(--typography-2-regular-font-weight, 400);
  position: relative;
`;

export interface ITextSize2WeightRegularAlignLeftHighContrastFalseProps {
  text?: string;
  size?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
  weight?: "light" | "regular" | "medium" | "bold";
  align?: "left" | "center" | "right";
  highContrast?: "false" | "true";
  className?: string;
  style?: any;
}

export const TextSize2WeightRegularAlignLeftHighContrastFalse = ({
  text = "Text",
  size = "1",
  weight = "light",
  align = "left",
  highContrast = "false",
  className,
  style,
  ...props
}: ITextSize2WeightRegularAlignLeftHighContrastFalseProps): JSX.Element => {
  const variantsClassName =
    "size-" +
    size +
    " weight-" +
    weight +
    " align-" +
    align +
    " high-contrast-" +
    highContrast;

  return (
    <StyledTextSize2WeightRegularAlignLeftHighContrastFalse style={style}>
      <StyledText>{text} </StyledText>
    </StyledTextSize2WeightRegularAlignLeftHighContrastFalse>
  );
};
