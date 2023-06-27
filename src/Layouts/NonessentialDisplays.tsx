import { Grid, Paper, ScrollArea } from "@mantine/core";
import IncomeLineGraph, { GraphProps } from "../Components/IncomeLineGraph";
import IncomeStackBar from "../Components/IncomeStackBar";
import PayTimeline from "../Components/Timeline";
import CostStack, { CostStackInterface } from "../Components/CostStack";
import RingGraph, { RingProps } from "../Components/RingGraph";
import Inputter from "../Components/Inputter";
import {
    turnIntoArray,
    Categories,
    formGraphArray,
    getCurrentSpent,
    getExpenseItems,
    getTotalAmount,
} from "../Utils/ParsingFunctions";
import { PayContext } from "../Utils/PayContext";
import { useContext } from "react";
import { ExpenseInputType } from "../Utils/Enums";
import { DisplayData } from "../Utils/Interfaces";

export default function NonessentialDisplays({ appData, addExpenseItem }: DisplayData) {
    const dominantColor: string = "#5fb7bf";
    const accentColor: string = "white";

    const context = useContext(PayContext);

    if (!context) {
        throw new Error("NonEssentialDisplays must be used within a PayCheckProvider");
    }

    const { payCheckOffset } = context;

    let graphData: GraphProps = {
        payPeriods: [],
        paySpent: [],
        payColor: "#5fb7bf",
        spentColor: accentColor,
    };
    let stackData: CostStackInterface = {
        expenditures: [],
        displayType: "NonEssential",
    };
    let ringData: RingProps = {
        total: 0,
        spent: 0,
        totalColor: dominantColor,
        spentColor: accentColor,
    };

    if (appData) {
        const graphArrayData = turnIntoArray(appData);
        const linePay = formGraphArray(graphArrayData, Categories.NonEssential, "PaycheckAmount", payCheckOffset);
        const lineSpent = formGraphArray(graphArrayData, Categories.None, "NonEssentialSpent", payCheckOffset);
        const expenses = getExpenseItems(graphArrayData, payCheckOffset);
        const currSpent = getCurrentSpent(graphArrayData, "NonEssential");
        const totalAllocation = getTotalAmount(graphArrayData);

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
            totalColor: dominantColor,
            spentColor: accentColor,
        };
        console.log(totalAllocation, currSpent);
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
