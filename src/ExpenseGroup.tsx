import { Group, ActionIcon, Text, Paper } from "@mantine/core";
import { Coffee } from "tabler-icons-react";

export default function ExpenseGroup() {
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
                    <Text>
                        $620.00
                    </Text>
                </Group>
            </Group>
        </Paper>
    )
}