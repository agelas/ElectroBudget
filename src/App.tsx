import { useState } from 'react';
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import MainApp from './Layouts/MainApp';

export default function App() {
    const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
    return(
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider theme={{ colorScheme, colors: {
                'nonessential-teal': ['#6495ED', '#6495ED', '#6495ED', '#6495ED', '#6495ED', '#6495ED', '#6495ED', '#6495ED', '#6495ED', '#6495ED'],
                'essential-green': ['#3CB371', '#3CB371', '#3CB371', '#3CB371', '#3CB371', '#3CB371', '#3CB371', '#3CB371', '#3CB371', '#3CB371'],
                'savings-purple': ['#9b6bf5', '#9b6bf5', '#9b6bf5', '#9b6bf5', '#9b6bf5', '#9b6bf5', '#9b6bf5', '#9b6bf5', '#9b6bf5', '#9b6bf5']
            } }} withGlobalStyles withNormalizeCSS>
                <MainApp />
            </MantineProvider>
        </ColorSchemeProvider>
    );
}