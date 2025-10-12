import '../../../css/custom.css';
import { Theme, Box, Section, Flex, Container } from "@radix-ui/themes";
import NoteablePeopleApp from "./noteable-app";
import { NestedRecipes, ExtractedRecipes } from "./recipes";
import { CardsGrid, RecipeCardsGrid } from "./MenuHtml/cards-grid";
import { SendFeedback } from "./MenuHtml/send-feedback";
import { Type4 } from "./MenuHtml/speaker-component";
import StyledComponents from "./MenuHtml/theme-provider";
import VolumeControl from "./MenuHtml/volume-control";
import CheckboxCard from './MenuHtml/checkbox-card';
import SideMenuThemeTree from './radix-list';   

export default function People() {
  return ( 
    <Theme appearance="dark" accentColor="crimson" panelBackground="solid" radius="large"> 
      <SideMenuThemeTree />
      <Container>
        <Section>
          <Container >
<StyledComponents />
          </Container> 
        </Section> 
        <Section> 
          <Flex direction="row" alignment="center">
            <Container width="400px">
              <Type4 />
              <VolumeControl />
            </Container> 
          </Flex> 
        </Section>
        <Section>
          <NoteablePeopleApp />
        </Section>
        <Section>
          <CardsGrid />
        </Section>
        <Section>
          <SendFeedback />
        </Section>
        <Section>
          <RecipeCardsGrid />
          <CheckboxCard />
        </Section>
        <Section>
          <NestedRecipes />
          <ExtractedRecipes />
        </Section> 
      </Container>
    </Theme>
  );
}