import React from "react";
import { Stack } from '@mantine/core';
import ExpenseGroup from "./ExpenseGroup";

export default function CostStack() {
    return(
        <Stack spacing="lg" sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[0], height: 300})}>
            <ExpenseGroup expenseType= 'nonessential'/>
            <ExpenseGroup expenseType='essentialRecurring' />
        </Stack>
    )
}