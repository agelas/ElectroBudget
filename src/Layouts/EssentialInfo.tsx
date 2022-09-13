import { SimpleGrid, Paper, useMantineColorScheme } from '@mantine/core';

export interface InfoProps {
    numPaychecks: number,
    discretionaryToDate: number,
    availableNow: number
}

export default function EssentialInfo(props: InfoProps) {
    const {colorScheme} = useMantineColorScheme();
    return (
        
        <SimpleGrid
            cols={4}
            spacing={12}
            breakpoints={[
                { maxWidth: 'md', cols: 4, spacing: 'md' },
                { maxWidth: 'sm', cols: 2, spacing: 'sm' }
            ]}
        >
            <Paper radius="md" p="md"
                sx={(theme) => ({
                    backgroundColor: colorScheme === 'dark' ? theme.colors.grape[8] : theme.colors.grape[4]
                })}
            > Paychecks to Date: {props.numPaychecks}
            </Paper>
            <Paper radius="md" p="md"
                sx={(theme) => ({
                    backgroundColor: colorScheme === 'dark' ? theme.colors.blue[8] : theme.colors.blue[4]
                })}
            > Discretionary to Date: {props.discretionaryToDate}
            </Paper>
            <Paper radius="md" p="md"
                sx={(theme) => ({
                    backgroundColor: colorScheme === 'dark' ? theme.colors.yellow[8] : theme.colors.yellow[4]
                })}
            > Spent this Period: </Paper>
            <Paper radius="md" p="md"
                sx={(theme) => ({
                    backgroundColor: colorScheme === 'dark' ? theme.colors.green[8] : theme.colors.green[4]
                })}
            > Available Now: {props.availableNow}
            </Paper>
        </SimpleGrid>
        
    )
}