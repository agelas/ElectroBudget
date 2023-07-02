import { SimpleGrid, Paper, useMantineColorScheme } from "@mantine/core";
import PayPeriodToggle from "../Components/PayPeriodToggle";
import { InfoProps } from "../Utils/Interfaces";

export default function EssentialInfo(props: InfoProps) {
    const { colorScheme } = useMantineColorScheme();
    return (
        <SimpleGrid
            cols={4}
            spacing={12}
            breakpoints={[
                { maxWidth: "md", cols: 4, spacing: "md" },
                { maxWidth: "sm", cols: 2, spacing: "sm" },
            ]}
        >
            <Paper
                radius='md'
                p='md'
                sx={(theme) => ({
                    backgroundColor: colorScheme === "dark" ? "#50f15B" : "#F89E8C",
                })}
            >
                {" "}
                Essentials Spending
            </Paper>
            <Paper
                radius='md'
                p='md'
                sx={(theme) => ({
                    backgroundColor: colorScheme === "dark" ? "#50f15B" : "#F89E8C",
                })}
            >
                {" "}
                Paychecks to Date: {props.numPaychecks}
            </Paper>
            <Paper
                radius='md'
                p='md'
                sx={(theme) => ({
                    backgroundColor: colorScheme === "dark" ? "#50f15B" : "#F89E8C",
                })}
            >
                {" "}
                Paycheck Date: {props.date}
            </Paper>
            <Paper
                radius='md'
                p='md'
                sx={(theme) => ({
                    backgroundColor: colorScheme === "dark" ? "#50f15B" : "#F89E8C",
                })}
            >
                <PayPeriodToggle />
            </Paper>
        </SimpleGrid>
    );
}
