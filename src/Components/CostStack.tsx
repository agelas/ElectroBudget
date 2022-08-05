import React from "react";
import { Stack } from '@mantine/core';
import ExpenseGroup, { ExpenseGroupProps } from "./ExpenseGroup";

export interface CostStackInterface {
    expenditures: Array<any>
}

export default function CostStack(props: CostStackInterface) {
    console.log(props.expenditures)
    var AllExpenses;

    if(props.expenditures) {
        AllExpenses = props.expenditures.map( (item, i) => {
            return(
                
                <ExpenseGroup key={i} expenseType={item.Type} name={item.Name} cost={item.Cost} active={item.Active} /> 
                
            )
        })
    }

    return(
        
        <Stack spacing="lg" sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[0], height: (props.expenditures.length*40)})}>
            {AllExpenses}
        </Stack>
    )
}