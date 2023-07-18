import { Grid, Paper, ScrollArea } from "@mantine/core";
import IncomeLineGraph from "../Components/IncomeLineGraph";
import IncomeStackBar from "../Components/IncomeStackBar";
import PayTimeline from "../Components/Timeline";
import CostStack from "../Components/CostStack";
import RingGraph from "../Components/RingGraph";
import Inputter from "../Components/Inputter";
import {
    turnIntoArray,
    formGraphArray,
    getCurrentSpent,
    getExpenseItems,
    getTotalAmount,
} from "../Utils/ParsingFunctions";
import { PayContext } from "../Utils/PayContext";
import { useContext } from "react";
import { Categories, ExpenseInputType } from "../Utils/Enums";
import { ICostStack, IAppData, IGraphProps, IRingProps } from "../Utils/Interfaces";

export default function NonessentialDisplays({ appData, addExpenseItem }: IAppData) {
    const dominantColor: string = "#6495ED";
    const accentColor: string = "#40E0D0";

    const context = useContext(PayContext);

    if (!context) {
        throw new Error("NonEssentialDisplays must be used within a PayCheckProvider");
    }

    const { payCheckOffset } = context;

    let graphData: IGraphProps = {
        payPeriods: [],
        paySpent: [],
        payColor: dominantColor,
        spentColor: accentColor,
    };
    let stackData: ICostStack = {
        expenditures: [],
        displayType: "NonEssential",
    };
    let ringData: IRingProps = {
        total: 0,
        spent: 0,
        totalColor: dominantColor,
        spentColor: accentColor,
    };

    if (appData) {
        const graphArrayData = turnIntoArray(appData);
        const linePay = formGraphArray(graphArrayData, Categories.NonEssential, true, payCheckOffset);
        const lineSpent = formGraphArray(graphArrayData, Categories.NonEssential, false, payCheckOffset);
        const expenses = getExpenseItems(graphArrayData, payCheckOffset);
        const currSpent = getCurrentSpent(graphArrayData, Categories.NonEssential, payCheckOffset);
        const totalAllocation = getTotalAmount(graphArrayData, Categories.NonEssential, payCheckOffset);

        graphData = {
            payPeriods: linePay,
            paySpent: lineSpent,
            payColor: dominantColor,
            spentColor: accentColor,
        };
        stackData = { expenditures: expenses, displayType: "NonEssential" };
        ringData = {
            total: totalAllocation,
            spent: currSpent,
            totalColor: accentColor,
            spentColor: dominantColor,
        };
    }

    return (
        <Grid gutter='lg'>
            <Grid.Col span={4}>
                <Paper
                    radius='md'
                    p='md'
                    sx={(theme) => ({
                        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[1],
                    })}
                >
                    {appData ? <IncomeLineGraph {...graphData} /> : "Loading"}
                </Paper>
            </Grid.Col>
            <Grid.Col span={5}>
                <Paper
                    radius='md'
                    p='md'
                    sx={(theme) => ({
                        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[1],
                    })}
                >
                    <IncomeStackBar {...graphData} />
                </Paper>
            </Grid.Col>
            <Grid.Col span={3}>
                <Paper
                    radius='md'
                    p='md'
                    sx={(theme) => ({
                        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[1],
                    })}
                >
                    <PayTimeline lineColor={"nonessential-teal"} />
                </Paper>
            </Grid.Col>
            <Grid.Col span={4}>
                <Paper
                    radius='md'
                    p='md'
                    sx={(theme) => ({
                        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[1],
                    })}
                >
                    <ScrollArea style={{ height: 200 }}>
                        {appData ? <CostStack {...stackData} /> : "Loading"}
                    </ScrollArea>
                </Paper>
            </Grid.Col>
            <Grid.Col span={4}>
                <Paper
                    radius='md'
                    p='md'
                    sx={(theme) => ({
                        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[1],
                    })}
                >
                    {appData ? <RingGraph {...ringData} /> : "Loading"}
                </Paper>
            </Grid.Col>
            <Grid.Col span={4}>
                <Paper
                    radius='md'
                    p='md'
                    sx={(theme) => ({
                        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[1],
                    })}
                >
                    <Inputter ExpenseType={ExpenseInputType.NonEssential} InputFunction={addExpenseItem} />
                </Paper>
            </Grid.Col>
        </Grid>
    );
}
