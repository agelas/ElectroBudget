import { Grid, Paper } from "@mantine/core";
import PayTimeline from "../Components/Timeline";

export default function SavingsDisplays() {
    
    return (
        <Grid gutter="lg">
            <Grid.Col span={9}>
                <Paper radius="md" p="md"
                    sx={(theme) => ({
                        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[1]
                })}>
                    Hi
                </Paper>
            </Grid.Col>
            <Grid.Col span={3}>
                <Paper radius="md" p="md"
                    sx={(theme) => ({
                        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[1]
                })}>
                    <PayTimeline />
                </Paper>
            </Grid.Col>
        </Grid>
    )
}