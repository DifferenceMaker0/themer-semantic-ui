import { Flex, Text, Button, Box, Theme, Kbd } from "@radix-ui/themes"; 
import PopoverDemo from "../../Componies/popover";
import Equalizer from "./Pieces/Equalizer";

export default function ThemesVolumeControlExample() {
    return ( 
        <div>
            <PopoverDemo />
        <Button><Equalizer /></Button> 
        </div> 
    );
}