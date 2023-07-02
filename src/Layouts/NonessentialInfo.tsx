import { SimpleGrid, Paper, useMantineColorScheme } from "@mantine/core";
import PayPeriodToggle from "../Components/PayPeriodToggle";
import { InfoProps } from "../Utils/Interfaces";

export default function NonessentialInfo(props: InfoProps) {
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
                    backgroundColor: colorScheme === "dark" ? "#5FB7BF" : theme.colors.pink[4],
                })}
            >
                {" "}
                Non-Essentials Spending
            </Paper>
            <Paper
                radius='md'
                p='md'
                sx={(theme) => ({
                    backgroundColor: colorScheme === "dark" ? "#5FB7BF" : theme.colors.pink[4],
                })}
            >
                {" "}
                Paychecks to Date: {props.numPaychecks}
            </Paper>
            <Paper
                radius='md'
                p='md'
                sx={(theme) => ({
                    backgroundColor: colorScheme === "dark" ? "#5FB7BF" : theme.colors.pink[4],
                })}
            >
                {" "}
                Paycheck Date: {props.date}
            </Paper>
            <Paper
                radius='md'
                p='md'
                sx={(theme) => ({
                    backgroundColor: colorScheme === "dark" ? "#5FB7BF" : theme.colors.pink[4],
                })}
            >
                <PayPeriodToggle />
            </Paper>
        </SimpleGrid>
    );
}
