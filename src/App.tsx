import { useState } from "react";
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import Home from "./Home";

export default function App() {
    const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
    return(
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
                <Home/>
            </MantineProvider>
        </ColorSchemeProvider>
    );
}