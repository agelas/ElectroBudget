import { useState } from "react";
import { Group, ActionIcon, Text, Paper, Switch } from "@mantine/core";
import { Coffee, Lifebuoy } from "tabler-icons-react";
import { ExpenseType } from "../Utils/Enums";
import { IExpenseGroupProps } from "../Utils/Interfaces";

function NonEssentialToggle(props: any) {
    const [checked, setChecked] = useState<boolean>(Boolean(props.active));

    return (
        <Switch
            checked={checked}
            onChange={(event) => setChecked(event.currentTarget.checked)}
            color='nonessential-teal'
            label='Purchased'
        />
    );
}

function EssentialRecurringToggle() {
    return <Switch color='essential-green' label='Active' />;
}

export default function ExpenseGroup(props: IExpenseGroupProps) {
    return (
        <Paper radius='md' p='xs'>
            <Group position='apart'>
                <Group>
                    <ActionIcon>
                        {/* NonEssential is coffee, Essential is Lifebuoy because these expenses should be to keep your life afloat */}
                        {props.expenseType === ExpenseType.NonEssential ? (
                            <Coffee color='#6495ED' />
                        ) : (
                            <Lifebuoy color='#3CB371' />
                        )}
                    </ActionIcon>
                    <Text>{props.name}</Text>
                </Group>
                <Group position='right'>
                    {props.expenseType === "NonEssential" && <NonEssentialToggle active={props.active} />}
                    {props.expenseType === ExpenseType.Essential && <EssentialRecurringToggle />}
                    <Text>$ {props.cost}</Text>
                </Group>
            </Group>
        </Paper>
    );
}
