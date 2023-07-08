import { useState } from "react";
import { TextInput, NumberInput, Group, ActionIcon } from "@mantine/core";
import { SquarePlus } from "tabler-icons-react";
import { IExpenseInput } from "../Utils/Interfaces";

export default function ExpenseInput({ ExpenseType, InputFunction }: IExpenseInput) {
    const [name, setName] = useState("");
    const [cost, setCost] = useState(0);

    const handleSubmit = () => {
        const newItem = {
            Type: ExpenseType,
            Name: name,
            Cost: cost,
            Active: true,
        };

        if (name !== "" && cost !== 0) {
            InputFunction(newItem);
        }

        setName("");
        setCost(0);
    };

    return (
        <Group>
            <TextInput
                placeholder='Expenditure'
                value={name}
                onChange={(event) => setName(event.currentTarget.value)}
            />
            <NumberInput
                value={cost}
                parser={(value) => value?.replace(/\$\s?|(,*)/g, "")}
                formatter={(value) =>
                    !Number.isNaN(parseFloat(value as string))
                        ? `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                        : "$ "
                }
                onChange={(value) => setCost(value as number)}
            />
            <ActionIcon color='teal' onClick={handleSubmit}>
                <SquarePlus />
            </ActionIcon>
        </Group>
    );
}
