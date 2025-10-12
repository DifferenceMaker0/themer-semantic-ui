import { Flex, Text, Button, Box, Theme, Kbd } from "@radix-ui/themes";
import ThemesVolumeControlExample from "./styled-components/volume-control-example";

export default function VolumeControl() {
    return (
        <Theme
            accentColor="mint"
            grayColor="gray"
            panelBackground="solid"
            scaling="100%"
            radius="full"
        >
            <ThemesVolumeControlExample />
        </Theme>
    );
}
