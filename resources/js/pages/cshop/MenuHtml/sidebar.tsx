import { Flex, Text, Button, ScrollArea, Box, Heading } from "@radix-ui/themes";

export default function Sidebar() {
    return (
        <Box position="fixed" left="0">
            <ScrollArea type="always" scrollbars="vertical" style={{ height: '100vh' }}>
                <Box p="2" pr="8">
                    <Heading size="4" mb="2" trim="start">
                    </Heading>
                    <Flex direction="column" gap="4">
                        <Text as="p">
                        </Text>
                        <Text>
                        </Text>
                    </Flex>
                </Box>
            </ScrollArea>
        </Box> 
	);
}