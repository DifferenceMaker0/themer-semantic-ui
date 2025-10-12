import "../../../../css/custom.css";
import { Popover } from "radix-ui";
import { Flex, Text, Button, Box, Theme, Kbd } from "@radix-ui/themes"; 
import { FaceIcon, ImageIcon, SunIcon, ArrowRightIcon} from "@radix-ui/react-icons";


const PopoverDemo = () => (
	<Popover.Root>
		<Popover.Trigger className="PopoverTrigger">Show info</Popover.Trigger>
		<Popover.Portal> 
            <Popover.Content className="PopoverContent"> 
                    <Flex direction="row">Visit <ArrowRightIcon/> <Kbd><a href="https://www.radix-ui.com/icons" target="_blank"> Radix Icons</a></Kbd></Flex>
				<Popover.Arrow className="PopoverArrow" />
			</Popover.Content>
		</Popover.Portal>
	</Popover.Root>
);

export default PopoverDemo;