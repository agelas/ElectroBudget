import { Grid, Paper, Center } from "@mantine/core";
import PayTimeline from "../Components/Timeline";
import SavingsAccounts from "../Components/SavingsAccounts";
import { SavingsAccountsData } from "../Utils/Interfaces";

export default function SavingsDisplays({ AccountsData }: SavingsAccountsData) {
    const dominantColor: string = 'savings-purple';

    return (
        <Grid gutter="lg">
            <Grid.Col span={9}>
                <Paper radius="md" p="md"
                    sx={(theme) => ({
                        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[1]
                    })}>
                    <Center>
                        <SavingsAccounts AccountsData={AccountsData}/>
                    </Center>
                </Paper>
            </Grid.Col>
            <Grid.Col span={3}>
                <Paper radius="md" p="md"
                    sx={(theme) => ({
                        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[1]
                    })}>
                    <PayTimeline lineColor={dominantColor} />
                </Paper>
            </Grid.Col>
        </Grid>
    )
}