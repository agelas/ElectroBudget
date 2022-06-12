import { Grid, Paper } from '@mantine/core';
import IncomeLineGraph from './IncomeLineGraph';

export default function NonessntialGraphs() {
    return (
        <Grid gutter="lg">
            <Grid.Col span={4}>
                <Paper radius="md" p="md"
                sx={(theme) => ({
                    backgroundColor: theme.colors.dark[4]
                })}>
                    <IncomeLineGraph />
                </Paper>
            </Grid.Col>
            <Grid.Col span={5}>
            <Paper radius="md" p="md"
                sx={(theme) => ({
                    backgroundColor: theme.colors.dark[4]
                })}>
                    2
                </Paper>
            </Grid.Col>
            <Grid.Col span={3}>
            <Paper radius="md" p="md"
                sx={(theme) => ({
                    backgroundColor: theme.colors.dark[4]
                })}>
                    3
                </Paper>
            </Grid.Col>
        </Grid>
    )
}