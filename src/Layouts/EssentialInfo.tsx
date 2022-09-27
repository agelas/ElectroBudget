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
                    backgroundColor: colorScheme === 'dark' ? '#0A222F' : '#46A5D8'
                })}
            > Paychecks to Date: {props.numPaychecks}
            </Paper>
            <Paper radius="md" p="md"
                sx={(theme) => ({
                    backgroundColor: colorScheme === 'dark' ? '#176C54' : '#2BCA9D'
                })}
            > Discretionary to Date: {props.discretionaryToDate}
            </Paper>
            <Paper radius="md" p="md"
                sx={(theme) => ({
                    backgroundColor: colorScheme === 'dark' ? '#9D2F2F' : '#E3A1A1'
                })}
            > Spent this Period: </Paper>
            <Paper radius="md" p="md"
                sx={(theme) => ({
                    backgroundColor: colorScheme === 'dark' ? '#6F7A66' : '#B7BEB1'
                })}
            > Available Now: {props.availableNow}
            </Paper>
        </SimpleGrid>
        
    )
}