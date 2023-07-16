import { Grid, Paper, Center, Button, Collapse } from "@mantine/core";
import PayTimeline from "../Components/Timeline";
import SavingsAccounts from "../Components/SavingsAccounts";
import { SavingsAccountForm } from "../Components/SavingsAccountForm";
import { ISavingsData } from "../Utils/Interfaces";
import { useState } from "react";

export default function SavingsDisplays({ accountsData, addAccountFunction }: ISavingsData) {
    const dominantColor: string = "savings-purple";
    const [opened, setOpen] = useState(false);

    return (
        <Grid gutter='lg'>
            <Grid.Col span={9}>
                <Paper
                    radius='md'
                    p='md'
                    sx={(theme) => ({
                        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[1],
                    })}
                >
                    <Center>
                        <SavingsAccounts accountsData={accountsData} />
                    </Center>
                </Paper>
            </Grid.Col>
            <Grid.Col span={3}>
                <Paper
                    radius='md'
                    p='md'
                    sx={(theme) => ({
                        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[1],
                    })}
                >
                    <PayTimeline lineColor={dominantColor} />
                </Paper>
            </Grid.Col>
            <Grid.Col span={4}>
                <Paper
                    radius='md'
                    p='md'
                    sx={(theme) => ({
                        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[1],
                    })}
                >
                    <Button onClick={() => setOpen((o) => !o)} color='savings-purple'>
                        Add Account
                    </Button>
                    <Collapse in={opened}>
                        <SavingsAccountForm addAccountFunction={addAccountFunction} />
                    </Collapse>
                </Paper>
            </Grid.Col>
        </Grid>
    );
}
