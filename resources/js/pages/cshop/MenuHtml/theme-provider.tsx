import "../../../../css/app.css";
import {
	gray,
	blue,
	red,
	green,
	grayDark,
	blueDark,
	redDark,
	greenDark,
} from "@radix-ui/colors";
import styled, { ThemeProvider } from "styled-components";
import { Poem } from "../recipes";
// import { type ReactNode } from 'react';

// Create your theme
const theme = {
	colors: {
		...gray,
		...blue,
		...red,
		...green,
	},
};

// Create your dark theme
const darkTheme = {
	colors: {
		...grayDark,
		...blueDark,
		...redDark,
		...greenDark,
	},
};

// Use the colors in your styles
const Button = styled.button`
	background-color: ${(props) => props.theme.colors.blue4};
	color: ${(props) => props.theme.colors.blue11};
	border-color: ${(props) => props.theme.colors.blue7};
	&:hover {
		background-color: ${(props) => props.theme.colors.blue5};
		border-color: ${(props) => props.theme.colors.blue8};
	}
`; 
export default function StyledComponents() {
    return (
		<ThemeProvider theme={theme}>
			<Poem />
            <Button>Radix Colors</Button>
        </ThemeProvider>
    );
}