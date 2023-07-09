import { Grid, Paper, ScrollArea } from "@mantine/core";
import PayTimeline from "../Components/Timeline";
import {
    turnIntoArray,
    formGraphArray,
    getCurrentSpent,
    getTotalAmount,
    getExpenseItems,
} from "../Utils/ParsingFunctions";
import IncomeLineGraph from "../Components/IncomeLineGraph";
import RingGraph from "../Components/RingGraph";
import CostStack from "../Components/CostStack";
import Inputter from "../Components/Inputter";
import { PayContext } from "../Utils/PayContext";
import { useContext } from "react";
import { Categories, ExpenseInputType } from "../Utils/Enums";
import { ICostStack, IAppData, IGraphProps, IRingProps } from "../Utils/Interfaces";

export default function EssentialDisplays({ appData, addExpenseItem }: IAppData) {
    const dominantColor: string = "#50f15b";
    const accentColor: string = "#b8f9bd";

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
    let ringData: IRingProps = {
        total: 0,
        spent: 0,
        totalColor: dominantColor,
        spentColor: accentColor,
    };
    let stackData: ICostStack = {
        expenditures: [],
        displayType: "Essential",
    };

    if (appData) {
        const graphArrayData = turnIntoArray(appData);
        const linePay = formGraphArray(graphArrayData, Categories.Essential, payCheckOffset);
        const lineSpent = formGraphArray(graphArrayData, Categories.None, payCheckOffset);
        const currSpent = getCurrentSpent(graphArrayData, Categories.Essential, payCheckOffset);
        const totalAllocation = getTotalAmount(graphArrayData, Categories.Essential, payCheckOffset);
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
