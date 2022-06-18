import { Grid, Paper } from '@mantine/core';
import IncomeLineGraph from './IncomeLineGraph';
import IncomeStackBar from './IncomeStackBar';
import PayTimeline from './Timeline';
import CostStack from './CostStack';

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
                    <IncomeStackBar />
                </Paper>
            </Grid.Col>
            <Grid.Col span={3}>
            <Paper radius="md" p="md"
                sx={(theme) => ({
                    backgroundColor: theme.colors.dark[4]
                })}>
                    <PayTimeline />
                </Paper>
            </Grid.Col>
            <Grid.Col span={4}>
            <Paper radius="md" p="md"
                sx={(theme) => ({
                    backgroundColor: theme.colors.dark[4]
                })}>
                    <CostStack />
                </Paper>
            </Grid.Col>
            <Grid.Col span={4}>
            <Paper radius="md" p="md"
                sx={(theme) => ({
                    backgroundColor: theme.colors.dark[4]
                })}>
                    5
                </Paper>
            </Grid.Col>
            <Grid.Col span={4}>
            <Paper radius="md" p="md"
                sx={(theme) => ({
                    backgroundColor: theme.colors.dark[4]
                })}>
                    6
                </Paper>
            </Grid.Col>
        </Grid>
    )
}