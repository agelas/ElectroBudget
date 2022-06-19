import React from "react";
import { TextInput, NumberInput, Group, ActionIcon } from "@mantine/core";
import { SquarePlus } from "tabler-icons-react";

export default function ExpenseInput() {

    return(
        <Group>
            <TextInput placeholder="Expenditure" />
            <NumberInput 
                defaultValue={0}
                parser={(value) => value?.replace(/\$\s?|(,*)/g, '')}
                formatter={(value) => 
                    !Number.isNaN(parseFloat(value as string)) ? `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                    : '$ '
                }
            />
            <ActionIcon color="teal">
                <SquarePlus />
            </ActionIcon>
        </Group>
    )
}