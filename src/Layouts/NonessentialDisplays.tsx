import { Grid, Paper, ScrollArea } from '@mantine/core';
import IncomeLineGraph, { GraphProps } from '../Components/IncomeLineGraph';
import IncomeStackBar from '../Components/IncomeStackBar';
import PayTimeline from '../Components/Timeline';
import CostStack, { CostStackInterface } from '../Components/CostStack';
import RingGraph, { RingProps } from '../Components/RingGraph';
import Inputter from '../Components/Inputter';
import { getNestedObject } from './NonessentialBroker';

export interface DisplayData {
    graphData: Array<any>;
}

// Retrieves and formats data on how much you were paid. Used for line graph and bar graph. 
function formPayArray(dataArray: any[]): Array<any> {
    let payArray = [];
    for (let i = 0; i < dataArray.length; i++) {
        let percentages = getNestedObject(dataArray[i], ["Breakdown"]);
        let multiplier = percentages[0];
        payArray.push({x: i+1, y: multiplier*getNestedObject(dataArray[i], ["PaycheckAmount"])});
    }

    return payArray;
}

// Retrieves and formats data on how much money was spent in the non-essential expenditure category.
function formNonEssentialSpentArray(dataArray: any[]): Array<any> {
    let spentArray = [];
    for (let i = 0; i < dataArray.length; i++) {
        spentArray.push({x: i+1, y: getNestedObject(dataArray[i], ["NonEssentialSpent"])});
    }

    return spentArray;
}

// Retrieves array of expenditures
function getExpenseItems(dataArray: any[]): Array<any> {
    let expenseArray = [];
    let lastDoc = dataArray[dataArray.length - 1];
    expenseArray = getNestedObject(lastDoc, ["ExpenseItems"]);
    return expenseArray;
}

function getCurrentSpent(dataArray: any[]): number {
    let expenseArray = [];
    let spent = 0;
    if(dataArray.length > 0) {
        let lastDoc = dataArray[dataArray.length - 1];
        expenseArray = getNestedObject(lastDoc, ["ExpenseItems"]);
        expenseArray.forEach((element: any) => {
        spent = spent + getNestedObject(element, ["Cost"]);
    });
    }
    
    console.log(spent)
    return spent;
}

function getTotalAmount(dataArray: any[]): number {
    let pay, multiplier = 1;
    if(dataArray.length > 0) {
        let lastDoc = dataArray[dataArray.length - 1];
        pay = getNestedObject(lastDoc, ["PaycheckAmount"]);
        let percentages = getNestedObject(lastDoc, ["Breakdown"]);
        multiplier = percentages[1];
    }
    
    return pay * multiplier;
}

export default function NonessntialDisplays(props: DisplayData) {
    
    let graphData: GraphProps = {payPeriods: [], paySpent: []}
    let stackData: CostStackInterface = {expenditures: []}
    let ringData: RingProps = {total: 0, spent: 0}

    console.log(props.graphData);
    if(props.graphData) {
        const linePay = formPayArray(props.graphData);
        const lineSpent = formNonEssentialSpentArray(props.graphData)
        const expenses = getExpenseItems(props.graphData)
        const currSpent = getCurrentSpent(props.graphData)
        const totalAllocation = getTotalAmount(props.graphData) 

        graphData = {payPeriods: linePay, paySpent: lineSpent}
        stackData = {expenditures: expenses}
        ringData = {total: totalAllocation, spent: currSpent}
        console.log(totalAllocation, currSpent)
    }


    return (
        <Grid gutter="lg">
            <Grid.Col span={4}>
                <Paper radius="md" p="md"
                sx={(theme) => ({
                    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[1]
                })}>
                    {props.graphData ? <IncomeLineGraph {...graphData}/> : 'Loading'}
                </Paper>
            </Grid.Col>
            <Grid.Col span={5}>
            <Paper radius="md" p="md"
                sx={(theme) => ({
                    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[1]
                })}>
                    <IncomeStackBar {...graphData}/>
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
                    <ScrollArea style={{height: 200}}>
                        {props.graphData ? <CostStack {...stackData}/> : 'Loading'}
                    </ScrollArea>
                </Paper>
            </Grid.Col>
            <Grid.Col span={4}>
            <Paper radius="md" p="md"
                sx={(theme) => ({
                    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[1]
                })}>
                    {props.graphData ? <RingGraph {...ringData}/> : 'Loading'}
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