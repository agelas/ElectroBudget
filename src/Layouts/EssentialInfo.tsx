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
                    backgroundColor: colorScheme === 'dark' ? theme.colors.pink[8] : theme.colors.pink[4]
                })}
            > Paychecks to Date: {props.numPaychecks}
            </Paper>
            <Paper radius="md" p="md"
                sx={(theme) => ({
                    backgroundColor: colorScheme === 'dark' ? theme.colors.violet[8] : theme.colors.violet[4]
                })}
            > Discretionary to Date: {props.discretionaryToDate}
            </Paper>
            <Paper radius="md" p="md"
                sx={(theme) => ({
                    backgroundColor: colorScheme === 'dark' ? theme.colors.cyan[8] : theme.colors.cyan[4]
                })}
            > Spent this Period: </Paper>
            <Paper radius="md" p="md"
                sx={(theme) => ({
                    backgroundColor: colorScheme === 'dark' ? theme.colors.teal[8] : theme.colors.teal[4]
                })}
            > Available Now: {props.availableNow}
            </Paper>
        </SimpleGrid>
        
    )
}