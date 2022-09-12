import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import NonEssentials from "./Layouts/NonEssentials";

export default function App() {
    const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
    return(
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
                <HashRouter>
                    <Routes>
                        <Route path="/" element={ <NonEssentials />} />
                    </Routes>
                </HashRouter>
            </MantineProvider>
        </ColorSchemeProvider>
    );
}