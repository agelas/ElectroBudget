import { Grid, Paper, ScrollArea } from "@mantine/core";
import { GraphProps } from "../Components/IncomeLineGraph";
import { RingProps } from "../Components/RingGraph";
import PayTimeline from "../Components/Timeline";
import {
    turnIntoArray,
    Categories,
    formGraphArray,
    getCurrentSpent,
    getTotalAmount,
    getExpenseItems,
} from "../Utils/ParsingFunctions";
import IncomeLineGraph from "../Components/IncomeLineGraph";
import RingGraph from "../Components/RingGraph";
import CostStack, { CostStackInterface } from "../Components/CostStack";
import Inputter from "../Components/Inputter";
import { PayContext } from "../Utils/PayContext";
import { useContext } from "react";
import { ExpenseInputType } from "../Utils/Enums";
import { DisplayData } from "../Utils/Interfaces";

export default function EssentialDisplays({ appData, addExpenseItem }: DisplayData) {
    const dominantColor: string = "#50f15b";
    const accentColor: string = "#b8f9bd";

    const context = useContext(PayContext);

    if (!context) {
        throw new Error("NonEssentialDisplays must be used within a PayCheckProvider");
    }

    const { payCheckOffset } = context;

    let graphData: GraphProps = {
        payPeriods: [],
        paySpent: [],
        payColor: dominantColor,
        spentColor: accentColor,
    };
    let ringData: RingProps = {
        total: 0,
        spent: 0,
        totalColor: dominantColor,
        spentColor: accentColor,
    };
    let stackData: CostStackInterface = {
        expenditures: [],
        displayType: "Essential",
    };

    if (appData) {
        const graphArrayData = turnIntoArray(appData);
        const linePay = formGraphArray(graphArrayData, Categories.Essential, "PaycheckAmount", payCheckOffset);
        const lineSpent = formGraphArray(graphArrayData, Categories.None, "EssentialSpent", payCheckOffset);
        const currSpent = getCurrentSpent(graphArrayData, "Essential");
        const totalAllocation = getTotalAmount(graphArrayData);
        const essentialExpenses = getExpenseItems(graphArrayData, payCheckOffset);

        graphData = {
            payPeriods: linePay,
            paySpent: lineSpent,
            payColor: dominantColor,
            spentColor: accentColor,
        };
        ringData = {
            total: totalAllocation,
            spent: currSpent,
            totalColor: accentColor,
            spentColor: dominantColor,
        };
        stackData = { expenditures: essentialExpenses, displayType: "Essential" };
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
                    style={{ height: 332 }}
                >
                    {appData ? <RingGraph {...ringData} /> : "Loading"}
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
                    <PayTimeline lineColor={"essential-green"} />
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
                    <Inputter ExpenseType={ExpenseInputType.Essential} InputFunction={addExpenseItem} />
                </Paper>
            </Grid.Col>
        </Grid>
    );
}
