import { Grid, Paper, ScrollArea } from '@mantine/core';
import IncomeLineGraph, { LineGraphProps } from '../Components/IncomeLineGraph';
import IncomeStackBar from '../Components/IncomeStackBar';
import PayTimeline from '../Components/Timeline';
import CostStack from '../Components/CostStack';
import RingGraph from '../Components/RingGraph';
import Inputter from '../Components/Inputter';
import { getNestedObject } from './NonessentialBroker';

export interface DisplayData {
    graphData: Array<any>;
}

// Retrieves and formats data on how much you were paid
function formPayArray(dataArray: any[]): Array<any> {
    let payArray = [];
    for (let i = 0; i < dataArray.length; i++) {
        payArray.push({x: i+1, y: getNestedObject(dataArray[i], ["PaycheckAmount"])});
    }

    return payArray;
}

// Retrieves and formats data on how much money was spent in the non-essential expenditure category
function formNonEssentialSpentArray(dataArray: any[]): Array<any> {
    let spentArray = [];
    for (let i = 0; i < dataArray.length; i++) {
        spentArray.push({x: i+1, y: getNestedObject(dataArray[i], ["NonEssentialSpent"])});
    }

    return spentArray;
}

export default function NonessntialDisplays(props: DisplayData) {
    
    let lineData: LineGraphProps = {payPeriods: [], paySpent: []}

    console.log(props.graphData);
    if(props.graphData) {
        const linePay = formPayArray(props.graphData);
        const lineSpent = formNonEssentialSpentArray(props.graphData)

        lineData = {payPeriods: linePay, paySpent: lineSpent}
    }


    return (
        <Grid gutter="lg">
            <Grid.Col span={4}>
                <Paper radius="md" p="md"
                sx={(theme) => ({
                    backgroundColor: theme.colors.dark[4]
                })}>
                    {props.graphData ? <IncomeLineGraph {...lineData}/> : 'Loading'}
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
                    <ScrollArea style={{height: 200}}>
                        <CostStack />
                    </ScrollArea>
                </Paper>
            </Grid.Col>
            <Grid.Col span={4}>
            <Paper radius="md" p="md"
                sx={(theme) => ({
                    backgroundColor: theme.colors.dark[4]
                })}>
                    <RingGraph />
                </Paper>
            </Grid.Col>
            <Grid.Col span={4}>
            <Paper radius="md" p="md"
                sx={(theme) => ({
                    backgroundColor: theme.colors.dark[4]
                })}>
                    <Inputter />
                </Paper>
            </Grid.Col>
        </Grid>
    )
}