import { Paper, Text, Title, ActionIcon, Progress, Group, Space } from "@mantine/core";
import { BuildingBank } from "tabler-icons-react";
import { ISavingsPanelProps } from "../Utils/Interfaces";

export default function SavingsAccountPanel(props: ISavingsPanelProps) {
    return (
        <Paper radius='md' p='xs' style={{ width: 280 }}>
            <Group>
                <ActionIcon color='lime'>
                    <BuildingBank />
                </ActionIcon>
                <Title order={2}>{props.accountHolder}</Title>
            </Group>
            <Text size='sm'>{props.accountType}</Text>
            <Space h='sm' />
            <Text size='xl'>${props.goal} goal</Text>
            <Progress color='violet' radius='md' size='xl' value={(props.currentValue / props.goal) * 100} />
        </Paper>
    );
}
