import { SimpleGrid, Paper, useMantineColorScheme } from "@mantine/core";
import PayPeriodToggle from "../Components/PayPeriodToggle";
import { IHeaderProps } from "../Utils/Interfaces";

export default function NonessentialInfo(props: IHeaderProps) {
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
                    backgroundColor: colorScheme === "dark" ? "#6495ED" : "#40E0D0",
                })}
            >
                {" "}
                Non-Essentials Spending
            </Paper>
            <Paper
                radius='md'
                p='md'
                sx={(theme) => ({
                    backgroundColor: colorScheme === "dark" ? "#6495ED" : "#40E0D0",
                })}
            >
                {" "}
                Paychecks to Date: {props.numPaychecks}
            </Paper>
            <Paper
                radius='md'
                p='md'
                sx={(theme) => ({
                    backgroundColor: colorScheme === "dark" ? "#6495ED" : "#40E0D0",
                })}
            >
                {" "}
                Paycheck Date: {props.date}
            </Paper>
            <Paper
                radius='md'
                p='md'
                sx={(theme) => ({
                    backgroundColor: colorScheme === "dark" ? "#6495ED" : "#40E0D0",
                })}
            >
                <PayPeriodToggle />
            </Paper>
        </SimpleGrid>
    );
}
