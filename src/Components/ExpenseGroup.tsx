import React, { useState } from "react";
import { Group, ActionIcon, Text, Paper, Switch } from "@mantine/core";
import { Coffee } from "tabler-icons-react";

export interface ExpenseGroupProps {
    expenseType: string,
    name: string,
    cost: number,
    active: boolean,
    key: number
}

function NonEssentialToggle(props: any) {
    const [checked, setChecked] = useState<boolean>(Boolean(props.active))
    
    return(
        <Switch checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)} color='cyan' label='Purchased' />
    )
}

function EssentialRecurringToggle() {
    return(
        <Switch color='cyan' label="Active"  />
    )
}

export default function ExpenseGroup(props: ExpenseGroupProps) {
    return(
        <Paper radius="md" p="xs">
            <Group position='apart'>
                <Group>
                    <ActionIcon color="cyan">
                        <Coffee />
                    </ActionIcon>
                    <Text>
                        {props.name} 
                    </Text>
                </Group>
                <Group position='right'>
                    {props.expenseType === 'NonEssential' && <NonEssentialToggle active={props.active}/>}
                    {props.expenseType === 'EssentialRecurring' && <EssentialRecurringToggle />}
                    <Text>
                        $ {props.cost}
                    </Text>
                </Group>
            </Group>
        </Paper>
    )
}