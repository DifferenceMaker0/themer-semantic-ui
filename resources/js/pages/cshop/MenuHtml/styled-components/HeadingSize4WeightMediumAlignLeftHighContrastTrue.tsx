import styled from "styled-components";

const StyledHeadingSize4WeightMediumAlignLeftHighContrastTrue = styled.div`
  background: rgba(255, 255, 255, 0);
  display: flex;
  flex-direction: row;
  gap: 0px;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
`;
const StyledHeading = styled.div`
  color: white;
  text-align: left;
  font-family: var(
    --typography-4-medium-font-family,
    "SfPro-Medium",
    sans-serif
  );
  font-size: var(--typography-4-medium-font-size, 18px);
  line-height: var(--typography-4-medium-line-height, 26px);
  letter-spacing: var(--typography-4-medium-letter-spacing, -0.04px);
  font-weight: var(--typography-4-medium-font-weight, 500);
  position: relative;
`;

export interface IHeadingSize4WeightMediumAlignLeftHighContrastTrueProps {
  text?: string;
  size?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
  weight?: "light" | "regular" | "medium" | "bold";
  align?: "left" | "center" | "right";
  highContrast?: "false" | "true";
  className?: string;
  style?: any;
}

export const HeadingSize4WeightMediumAlignLeftHighContrastTrue = ({
  text = "Heading",
  size = "6",
  weight = "bold",
  align = "left",
  highContrast = "true",
  className,
  style,
  ...props
}: IHeadingSize4WeightMediumAlignLeftHighContrastTrueProps): JSX.Element => {
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
    <StyledHeadingSize4WeightMediumAlignLeftHighContrastTrue style={style}>
      <StyledHeading>{text} </StyledHeading>
    </StyledHeadingSize4WeightMediumAlignLeftHighContrastTrue>
  );
};
