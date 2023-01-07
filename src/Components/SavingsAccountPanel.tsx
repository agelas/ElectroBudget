import { Paper, Text, Title, ActionIcon, Progress, Group, Space } from "@mantine/core";
import { BuildingBank } from "tabler-icons-react";

export interface SavingsAccountProps {
    accountHolder: string,
    accountType: string,
    goal: number,
    currentPrincipal: number,
    key: number
}

export default function SavingsAccountPanel(props: SavingsAccountProps) {
    return (
        <Paper radius="md" p="xs" style={{ width: 280 }}>
            <Group>
                <ActionIcon color="lime">
                    <BuildingBank />
                </ActionIcon>
                <Title order={2}>
                    {props.accountHolder}
                </Title>
            </Group>
            <Text size="sm">
                {props.accountType}
            </Text>
            <Space h="sm" />
            <Text size="xl">
                ${props.goal} goal
            </Text>
            <Progress color="violet" radius="md" size="xl" value={(props.currentPrincipal / props.goal) * 100} />
        </Paper>
    );
}
