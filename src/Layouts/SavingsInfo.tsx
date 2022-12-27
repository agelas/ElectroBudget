import { SimpleGrid, Paper, useMantineColorScheme } from "@mantine/core";
import { InfoProps } from "./EssentialInfo";

export default function SavingsInfo(props: InfoProps) {
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
                backgroundColor: colorScheme === 'dark' ? theme.colors.teal[8] : theme.colors.teal[4]
            })}
        > Savings
        </Paper>
        <Paper radius="md" p="md"
            sx={(theme) => ({
                backgroundColor: colorScheme === 'dark' ? theme.colors.teal[8] : theme.colors.teal[4]
            })}
        > Paychecks to Date: {props.numPaychecks}
        </Paper>
        <Paper radius="md" p="md"
            sx={(theme) => ({
                backgroundColor: colorScheme === 'dark' ? theme.colors.teal[8] : theme.colors.teal[4]
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