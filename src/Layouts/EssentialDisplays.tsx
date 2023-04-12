import { Grid, Paper, ScrollArea } from '@mantine/core';
import { GraphProps } from '../Components/IncomeLineGraph';
import { RingProps } from '../Components/RingGraph';
import PayTimeline from '../Components/Timeline';
import { turnIntoArray, Categories, formGraphArray, getCurrentSpent, getTotalAmount, getExpenseItems } from '../Utils/ParsingFunctions';
import { DisplayData } from './NonessentialDisplays';
import IncomeLineGraph from '../Components/IncomeLineGraph';
import RingGraph from '../Components/RingGraph';
import CostStack, { CostStackInterface } from '../Components/CostStack';
import Inputter from '../Components/Inputter';

export default function EssentialDisplays({appData, addExpenseItem}: DisplayData) {

    let graphData: GraphProps = { payPeriods: [], paySpent: [] };
    let ringData: RingProps = { total: 0, spent: 0 };
    let stackData: CostStackInterface = { expenditures: [], displayType: 'Essential' }

    if (appData) {
        const graphArrayData = turnIntoArray(appData)
        const linePay = formGraphArray(graphArrayData, Categories.Essential, "PaycheckAmount");
        const lineSpent = formGraphArray(graphArrayData, Categories.None, "EssentialSpent");
        const currSpent = getCurrentSpent(graphArrayData, "Essential");
        const totalAllocation = getTotalAmount(graphArrayData);
        const essentialExpenses = getExpenseItems(graphArrayData);

        graphData = { payPeriods: linePay, paySpent: lineSpent };
        ringData = { total: totalAllocation, spent: currSpent };
        stackData = { expenditures: essentialExpenses, displayType: 'Essential' }
    }

    return (
        <Grid gutter="lg">
            <Grid.Col span={4}>
                <Paper radius="md" p="md"
                    sx={(theme) => ({
                        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[1]
                    })}>
                    {appData ? <IncomeLineGraph {...graphData} /> : 'Loading'}
                </Paper>
            </Grid.Col>
            <Grid.Col span={5}>
                <Paper radius="md" p="md"
                    sx={(theme) => ({
                        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[1]
                    })}
                    style={{ height: 332 }}>
                    {appData ? <RingGraph {...ringData} /> : 'Loading'}
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
                        {appData ? <CostStack {...stackData} /> : 'Loading'}
                    </ScrollArea>
                </Paper>
            </Grid.Col>
            <Grid.Col span={4}>
                <Paper radius="md" p="md"
                    sx={(theme) => ({
                        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[1]
                    })}>
                    <Inputter InputFunction={addExpenseItem}/>
                </Paper>
            </Grid.Col>
        </Grid>
    )
}