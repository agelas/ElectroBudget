import { SimpleGrid, Paper, useMantineColorScheme } from '@mantine/core';

export interface InfoProps {
    numPaychecks: number,
    discretionaryToDate: number,
    availableNow: number
}

export default function EssentialInfo(props: InfoProps) {
    const { colorScheme } = useMantineColorScheme();
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
                    backgroundColor: colorScheme === 'dark' ? '#F4694D' : '#F89E8C'
                })}
            > Essentials Spending
            </Paper>
            <Paper radius="md" p="md"
                sx={(theme) => ({
                    backgroundColor: colorScheme === 'dark' ? '#F4694D' : '#F89E8C'
                })}
            > Paychecks to Date: {props.numPaychecks}
            </Paper>
            <Paper radius="md" p="md"
                sx={(theme) => ({
                    backgroundColor: colorScheme === 'dark' ? '#F4694D' : '#F89E8C'
                })}
            > Spent this Period: </Paper>
            <Paper radius="md" p="md"
                sx={(theme) => ({
                    backgroundColor: colorScheme === 'dark' ? '#F4694D' : '#F89E8C'
                })}
            > Available Now: {props.availableNow}
            </Paper>
        </SimpleGrid>

    )
}