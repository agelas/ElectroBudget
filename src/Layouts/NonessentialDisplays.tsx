import { Grid, Paper, ScrollArea } from '@mantine/core';
import IncomeLineGraph, { GraphProps } from '../Components/IncomeLineGraph';
import IncomeStackBar from '../Components/IncomeStackBar';
import PayTimeline from '../Components/Timeline';
import CostStack, { CostStackInterface } from '../Components/CostStack';
import RingGraph, { RingProps } from '../Components/RingGraph';
import Inputter from '../Components/Inputter';
import { turnIntoArray, Categories, formGraphArray, getCurrentSpent, getExpenseItems, getTotalAmount } from '../Utils/ParsingFunctions';

export interface DisplayData {
    graphData: Array<any>;
}

export default function NonessentialDisplays(props: DisplayData) {

    let graphData: GraphProps = { payPeriods: [], paySpent: [] }
    let stackData: CostStackInterface = { expenditures: [], displayType: 'NonEssential' }
    let ringData: RingProps = { total: 0, spent: 0 }

    console.log(props.graphData);
    if (props.graphData) {
        const graphArrayData = turnIntoArray(props.graphData);
        const linePay = formGraphArray(graphArrayData, Categories.NonEssential, "PaycheckAmount")
        const lineSpent = formGraphArray(graphArrayData, Categories.None, "NonEssentialSpent");
        const expenses = getExpenseItems(graphArrayData);
        const currSpent = getCurrentSpent(graphArrayData, "NonEssential");
        const totalAllocation = getTotalAmount(graphArrayData);

        graphData = { payPeriods: linePay, paySpent: lineSpent }
        stackData = { expenditures: expenses, displayType: 'NonEssential' }
        ringData = { total: totalAllocation, spent: currSpent }
        console.log(totalAllocation, currSpent)
    }

    return (
        <Grid gutter="lg">
            <Grid.Col span={4}>
                <Paper radius="md" p="md"
                    sx={(theme) => ({
                        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[1]
                    })}>
                    {props.graphData ? <IncomeLineGraph {...graphData} /> : 'Loading'}
                </Paper>
            </Grid.Col>
            <Grid.Col span={5}>
                <Paper radius="md" p="md"
                    sx={(theme) => ({
                        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[1]
                    })}>
                    <IncomeStackBar {...graphData} />
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
            <Grid.Col span={4}>
                <Paper radius="md" p="md"
                    sx={(theme) => ({
                        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[1]
                    })}>
                    <ScrollArea style={{ height: 200 }}>
                        {props.graphData ? <CostStack {...stackData} /> : 'Loading'}
                    </ScrollArea>
                </Paper>
            </Grid.Col>
            <Grid.Col span={4}>
                <Paper radius="md" p="md"
                    sx={(theme) => ({
                        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[1]
                    })}>
                    {props.graphData ? <RingGraph {...ringData} /> : 'Loading'}
                </Paper>
            </Grid.Col>
            <Grid.Col span={4}>
                <Paper radius="md" p="md"
                    sx={(theme) => ({
                        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[1]
                    })}>
                    <Inputter />
                </Paper>
            </Grid.Col>
        </Grid>
    )
}