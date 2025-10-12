import styled from "styled-components";
import { Flex, Text, Button, Box, Theme, Kbd } from "@radix-ui/themes";
// import styled, { ThemeProvider } from "styled-components";

import { HeadingSize4WeightMediumAlignLeftHighContrastTrue } from "./styled-components/HeadingSize4WeightMediumAlignLeftHighContrastTrue";
import { TextSize2WeightRegularAlignLeftHighContrastFalse } from "./styled-components/TextSize2WeightRegularAlignLeftHighContrastFalse";
import { MusicSpeakerQuiet } from "./styled-components/MusicSpeakerQuiet";
import { SliderSize2VariantSurfaceHighContrastFalseOrientationHorizontalStateDefaultRangeFalseValue75 } from "./styled-components/SliderSize2VariantSurfaceHighContrastFalseOrientationHorizontalStateDefaultRangeFalseValue75";
import { MusicSpeakerLoud } from "./styled-components/MusicSpeakerLoud";
import { MusicLoop } from "./styled-components/MusicLoop";
import { IconButtonSize2VariantSoftColorNeutralHighContrastFalseLoadingFalseStateDefault } from "./styled-components/IconButtonSize2VariantSoftColorNeutralHighContrastFalseLoadingFalseStateDefault";
import { MusicPause } from "./styled-components/MusicPause";
import { IconButtonSize2VariantSolidColorAccentHighContrastFalseLoadingFalseStateDefault } from "./styled-components/IconButtonSize2VariantSolidColorAccentHighContrastFalseLoadingFalseStateDefault";
import { MusicReset } from "./styled-components/MusicReset";
import { MusicShuffle } from "./styled-components/MusicShuffle";

const StyledType4 = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-6, 32px);
  align-items: flex-start;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;
const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--spacing-3, 12px);
  align-items: center;
  justify-content: flex-start;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
`;
const StyledHeadingInstance = styled.div`
  background: rgba(255, 255, 255, 0);
  display: flex;
  flex-direction: row;
  gap: 0px;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 1;
  position: relative;
`;
const StyledTextInstance = styled.div`
  background: rgba(255, 255, 255, 0);
  display: flex;
  flex-direction: row;
  gap: 0px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
`;
const StyledSliderContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--spacing-2, 8px);
  align-items: center;
  justify-content: flex-start;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
`;
const StyledMusicSpeakerQuietInstance = styled.div`
  flex-shrink: 0;
  width: var(--spacing-3, 12px);
  height: var(--spacing-3, 12px);
  position: relative;
  overflow: visible;
`;
const StyledSliderInstance = styled.div`
  background: rgba(255, 255, 255, 0);
  display: flex;
  flex-direction: row;
  gap: 0px;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 12px;
  position: relative;
`;
const StyledMusicSpeakerLoudInstance = styled.div`
  flex-shrink: 0;
  width: var(--spacing-3, 12px);
  height: var(--spacing-3, 12px);
  position: relative;
  overflow: visible;
`;
const StyledContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: flex-start;
  justify-content: center;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
`;
const StyledContentContainer2 = styled.div`
  background: rgba(255, 255, 255, 0);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2, 8px);
  align-items: center;
  justify-content: center;
  flex: 1;
  position: relative;
  overflow: hidden;
`;
const StyledIconButtonInstance = styled.div`
  background: rgba(255, 255, 255, 0);
  display: flex;
  flex-direction: column;
  gap: 0px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
`;
const StyledTextContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
`;
const StyledLoop = styled.div`
  color: var(--tokens-colors-text, #1c2024);
  text-align: left;
  font-family: var(
    --typography-2-medium-font-family,
    "SfPro-Medium",
    sans-serif
  );
  font-size: var(--typography-2-medium-font-size, 14px);
  line-height: var(--typography-2-medium-line-height, 20px);
  font-weight: var(--typography-2-medium-font-weight, 500);
  position: relative;
`;
const StyledOff = styled.div`
  color: var(--colors-neutral-neutral-alpha-11, rgba(0, 7, 20, 0.62));
  text-align: left;
  font-family: var(
    --typography-1-regular-font-family,
    "SfPro-Regular",
    sans-serif
  );
  font-size: var(--typography-1-regular-font-size, 12px);
  line-height: var(--typography-1-regular-line-height, 16px);
  letter-spacing: var(--typography-1-regular-letter-spacing, 0.04px);
  font-weight: var(--typography-1-regular-font-weight, 400);
  position: relative;
`;
const StyledPause = styled.div`
  color: var(--tokens-colors-text, #1c2024);
  text-align: left;
  font-family: var(
    --typography-2-medium-font-family,
    "SfPro-Medium",
    sans-serif
  );
  font-size: var(--typography-2-medium-font-size, 14px);
  line-height: var(--typography-2-medium-line-height, 20px);
  font-weight: var(--typography-2-medium-font-weight, 500);
  position: relative;
`;
const StyledOn = styled.div`
  color: var(--colors-neutral-neutral-alpha-11, rgba(0, 7, 20, 0.62));
  text-align: left;
  font-family: var(
    --typography-1-regular-font-family,
    "SfPro-Regular",
    sans-serif
  );
  font-size: var(--typography-1-regular-font-size, 12px);
  line-height: var(--typography-1-regular-line-height, 16px);
  letter-spacing: var(--typography-1-regular-letter-spacing, 0.04px);
  font-weight: var(--typography-1-regular-font-weight, 400);
  position: relative;
`;
const StyledReset = styled.div`
  color: var(--tokens-colors-text, #1c2024);
  text-align: left;
  font-family: var(
    --typography-2-medium-font-family,
    "SfPro-Medium",
    sans-serif
  );
  font-size: var(--typography-2-medium-font-size, 14px);
  line-height: var(--typography-2-medium-line-height, 20px);
  font-weight: var(--typography-2-medium-font-weight, 500);
  position: relative;
`;
const StyledShuffle = styled.div`
  color: var(--tokens-colors-text, #1c2024);
  text-align: left;
  font-family: var(
    --typography-2-medium-font-family,
    "SfPro-Medium",
    sans-serif
  );
  font-size: var(--typography-2-medium-font-size, 14px);
  line-height: var(--typography-2-medium-line-height, 20px);
  font-weight: var(--typography-2-medium-font-weight, 500);
  position: relative;
`;

export interface IType4Props {
  type?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
  className?: string;
  style?: any;
}

export const Type4 = ({
  type = "1",
  className,
  style,
  ...props
}: IType4Props): JSX.Element => {
  const variantsClassName = "type-" + type;

  return (
    <Theme
      accentColor="mint"
      grayColor="gray"
      panelBackground="solid"
      scaling="100%"
      radius="full"
    >
    <Box width="100%">
    <StyledType4 style={style}>
      <StyledTextContainer>
        <HeadingSize4WeightMediumAlignLeftHighContrastTrue
          text="Sound"
          size="4"
          weight="medium"
          style={{ flex: "1" }}
        ></HeadingSize4WeightMediumAlignLeftHighContrastTrue>
        <TextSize2WeightRegularAlignLeftHighContrastFalse
          text="Yamaha THR"
          size="2"
          weight="regular"
          style={{ flexShrink: "0" }}
        ></TextSize2WeightRegularAlignLeftHighContrastFalse>
      </StyledTextContainer>
      <StyledSliderContainer>
        <MusicSpeakerQuiet
          style={{
            flexShrink: "0",
            width: "var(--spacing-3, 12px)",
            height: "var(--spacing-3, 12px)",
          }}
        ></MusicSpeakerQuiet>
        <SliderSize2VariantSurfaceHighContrastFalseOrientationHorizontalStateDefaultRangeFalseValue75
          size="2"
          variant="surface"
          value="75"
          style={{ flex: "1", height: "12px", width: "unset" }}
        ></SliderSize2VariantSurfaceHighContrastFalseOrientationHorizontalStateDefaultRangeFalseValue75>
        <MusicSpeakerLoud
          style={{
            flexShrink: "0",
            width: "var(--spacing-3, 12px)",
            height: "var(--spacing-3, 12px)",
          }}
        ></MusicSpeakerLoud>
      </StyledSliderContainer>
      <StyledContentContainer>
        <StyledContentContainer2>
          <IconButtonSize2VariantSoftColorNeutralHighContrastFalseLoadingFalseStateDefault
            icon={<MusicLoop style={{ flexShrink: "0" }} />}
            size="2"
            variant="soft"
            color="neutral"
            style={{ flexShrink: "0" }}
              ></IconButtonSize2VariantSoftColorNeutralHighContrastFalseLoadingFalseStateDefault>
              <Kbd>Ctrl + -</Kbd>
          <StyledTextContainer2>
            <StyledLoop>Loop </StyledLoop>
            <StyledOff>Off </StyledOff>
          </StyledTextContainer2>
        </StyledContentContainer2>
        <StyledContentContainer2>
          <IconButtonSize2VariantSolidColorAccentHighContrastFalseLoadingFalseStateDefault
            icon={<MusicPause style={{ flexShrink: "0" }} />}
            size="2"
            variant="solid"
            style={{ flexShrink: "0" }}
          ></IconButtonSize2VariantSolidColorAccentHighContrastFalseLoadingFalseStateDefault>
              <StyledTextContainer2>
                <Kbd>Ctrl + +</Kbd>
            <StyledPause>Pause </StyledPause>
            <StyledOn>On </StyledOn>
          </StyledTextContainer2>
        </StyledContentContainer2>
        <StyledContentContainer2>
          <IconButtonSize2VariantSoftColorNeutralHighContrastFalseLoadingFalseStateDefault
            icon={<MusicReset style={{ flexShrink: "0" }} />}
            size="2"
            variant="soft"
            color="neutral"
            style={{ flexShrink: "0" }}
          ></IconButtonSize2VariantSoftColorNeutralHighContrastFalseLoadingFalseStateDefault>
              <StyledTextContainer2>
                <Kbd>Ctrl + F</Kbd>
            <StyledReset>Reset </StyledReset>
            <StyledOff>Off </StyledOff>
          </StyledTextContainer2>
        </StyledContentContainer2>
        <StyledContentContainer2>
          <IconButtonSize2VariantSoftColorNeutralHighContrastFalseLoadingFalseStateDefault
            icon={<MusicShuffle style={{ flexShrink: "0" }} />}
            size="2"
            variant="soft"
            color="neutral"
            style={{ flexShrink: "0" }}
          ></IconButtonSize2VariantSoftColorNeutralHighContrastFalseLoadingFalseStateDefault>
              <StyledTextContainer2>
                <Kbd>Ctrl + Shift + V</Kbd>
            <StyledShuffle>Shuffle </StyledShuffle>
            <StyledOff>Off </StyledOff>
          </StyledTextContainer2>
        </StyledContentContainer2>
      </StyledContentContainer>
      </StyledType4>
      </Box>
      </Theme>
  );
};
