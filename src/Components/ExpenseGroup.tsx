import { useState } from "react";
import { Group, ActionIcon, Text, Paper, Switch } from "@mantine/core";
import { Coffee, Lifebuoy } from "tabler-icons-react";
import { ExpenseInputType } from "../Utils/Enums";
import { ExpenseGroupProps } from "../Utils/Interfaces";

function NonEssentialToggle(props: any) {
  const [checked, setChecked] = useState<boolean>(Boolean(props.active));

  return (
    <Switch
      checked={checked}
      onChange={(event) => setChecked(event.currentTarget.checked)}
      color="cyan"
      label="Purchased"
    />
  );
}

function EssentialRecurringToggle() {
  return <Switch color="cyan" label="Active" />;
}

export default function ExpenseGroup(props: ExpenseGroupProps) {
  return (
    <Paper radius="md" p="xs">
      <Group position="apart">
        <Group>
          <ActionIcon
            color={
              props.expenseType === ExpenseInputType.NonEssential
                ? "#5fb7bf"
                : "#50f15b"
            }
          >
            {/* NonEssential is coffee, Essential is Lifebuoy because these expenses should be to keep your life afloat */}
            {props.expenseType === ExpenseInputType.NonEssential ? (
              <Coffee />
            ) : (
              <Lifebuoy />
            )}
          </ActionIcon>
          <Text>{props.name}</Text>
        </Group>
        <Group position="right">
          {props.expenseType === "NonEssential" && (
            <NonEssentialToggle active={props.active} />
          )}
          {props.expenseType === ExpenseInputType.Essential && (
            <EssentialRecurringToggle />
          )}
          <Text>$ {props.cost}</Text>
        </Group>
      </Group>
    </Paper>
  );
}
