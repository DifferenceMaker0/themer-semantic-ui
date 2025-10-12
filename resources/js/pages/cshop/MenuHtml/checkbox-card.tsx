import { CheckboxCards, Box } from "@radix-ui/themes";
export default function CheckboxCard() {
    return (
        <Box p="15px" width={{ sm: '100px', lg: '10vw' }}>
            <CheckboxCards.Root defaultValue={["1"]} color="crimson">
                <CheckboxCards.Item value="1">Agree to Terms</CheckboxCards.Item>
            </CheckboxCards.Root>
        </Box>
    );
}