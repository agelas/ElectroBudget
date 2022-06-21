import React from "react";
import { Group, ActionIcon, Text, Paper, Switch } from "@mantine/core";
import { Coffee } from "tabler-icons-react";

interface ExpenseGroupProps {
    expenseType: string;
}

function NonEssentialToggle() {
    return(
        <Switch color='cyan' label='Purchased' />
    )
}

function EssentialRecurringToggle() {
    return(
        <Switch color='cyan' label="Active"  />
    )
}

export default function ExpenseGroup({expenseType} : ExpenseGroupProps) {
    return(
        <Paper radius="md" p="xs">
            <Group position='apart'>
                <Group>
                    <ActionIcon color="cyan">
                        <Coffee />
                    </ActionIcon>
                    <Text>
                        Scooter 
                    </Text>
                </Group>
                <Group position='right'>
                    {expenseType === 'nonessential' && <NonEssentialToggle />}
                    {expenseType === 'essentialRecurring' && <EssentialRecurringToggle />}
                    <Text>
                        $620.00
                    </Text>
                </Group>
            </Group>
        </Paper>
    )
}