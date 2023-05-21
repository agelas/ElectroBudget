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
                'nonessential-teal': ['#5fb7bf', '#5fb7bf', '#5fb7bf', '#5fb7bf', '#5fb7bf', '#5fb7bf', '#5fb7bf', '#5fb7bf', '#5fb7bf', '#5fb7bf'],
                'essential-green': ['#50f15b', '#50f15b', '#50f15b', '#50f15b', '#50f15b', '#50f15b', '#50f15b', '#50f15b', '#50f15b', '#50f15b'],
                'savings-purple': ['#9b6bf5', '#9b6bf5', '#9b6bf5', '#9b6bf5', '#9b6bf5', '#9b6bf5', '#9b6bf5', '#9b6bf5', '#9b6bf5', '#9b6bf5']
            } }} withGlobalStyles withNormalizeCSS>
                <MainApp />
            </MantineProvider>
        </ColorSchemeProvider>
    );
}