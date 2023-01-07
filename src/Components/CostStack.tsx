import { Stack } from '@mantine/core';
import ExpenseGroup from "./ExpenseGroup";
import { Text } from "@mantine/core";

export interface CostStackInterface {
    expenditures: Array<any>
    displayType: string
}

export default function CostStack(props: CostStackInterface) {
    console.log(props.expenditures)
    var AllExpenses;

    if (props.expenditures) {
        var FilteredExpenses = props.expenditures.filter(expense => expense.Type === props.displayType);

        AllExpenses = FilteredExpenses.map((item, i) => {
            return (
                <ExpenseGroup key={i} expenseType={item.Type} name={item.Name} cost={item.Cost} active={item.Active} />
            )
        })
    }

    return (
        props.expenditures ?
            <Stack spacing="lg" sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[0], height: (props.expenditures.length * 40) })}>
                {AllExpenses}
            </Stack>
            : <Text>Loading</Text>

    )
}