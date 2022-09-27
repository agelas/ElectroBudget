import { useState } from "react";
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import NonEssentials from "./Layouts/NonEssentials";

export default function App() {
    const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
    return(
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider theme={{ colorScheme, colors: {
                'prussian-blue': ['#009FF5','#0092E0', '#0085CC', '#0077B8', '#006AA3', '#005D8F', '#00507A', '#004266', '#003049', '#00283D' ],
                'maximum-red': ['#EFA9A9','#EFA9A9','#E98686', '#E36464', '#E36464', '#E36464', '#E36464', '#D62828', '##D62828', '#BE2323'],
                'green-munsell': ['#47FFCB','#33FFC5','#1FFFBF','#0AFFBA','#00F5AF','#00E0A1','#00CC92','#00A878', '#00A375', '#008F66'],
                'yellow-red': ['#F5E2B8','#F5E2B8','#F2DBA6','#F0D494','#EDCD82','#EBC670','#E8BF5E','#E6B84C','#E3B23C', '#E0A929']
            } }} withGlobalStyles withNormalizeCSS>
                <NonEssentials />
            </MantineProvider>
        </ColorSchemeProvider>
    );
}