import { SimpleGrid, Paper, useMantineColorScheme } from "@mantine/core";
import { IHeaderProps } from "../Utils/Interfaces";

export default function SavingsInfo(props: IHeaderProps) {
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
        radius="md"
        p="md"
        sx={(theme) => ({
          backgroundColor:
            colorScheme === "dark" ? "#9b6bf5" : theme.colors.teal[4],
        })}
      >
        {" "}
        Savings
      </Paper>
      <Paper
        radius="md"
        p="md"
        sx={(theme) => ({
          backgroundColor:
            colorScheme === "dark" ? "#9b6bf5" : theme.colors.teal[4],
        })}
      >
        {" "}
        Paychecks to Date: {props.numPaychecks}
      </Paper>
      <Paper
        radius="md"
        p="md"
        sx={(theme) => ({
          backgroundColor:
            colorScheme === "dark" ? "#9b6bf5" : theme.colors.teal[4],
        })}
      >
        {" "}
        Date: {props.date}
      </Paper>
      <Paper
        radius="md"
        p="md"
        sx={(theme) => ({
          backgroundColor:
            colorScheme === "dark" ? "#9b6bf5" : theme.colors.teal[4],
        })}
      >
        
      </Paper>
    </SimpleGrid>
  );
}
