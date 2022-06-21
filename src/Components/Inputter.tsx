import React from "react";
import { Divider, ActionIcon, Center } from "@mantine/core";
import { CirclePlus, CircleMinus } from "tabler-icons-react";
import ExpenseInput from "./ExpenseInput";

export default function Inputter() {

    return(
        <>
            <Divider my="xs" label="Add Items" />
            <ExpenseInput />
            <Divider my="xs" label="Paychecks" />
            <Center>
                <ActionIcon color="green" size="xl">
                    <CirclePlus />
                </ActionIcon>
                <ActionIcon color = "red" size="xl">
                    <CircleMinus />
                </ActionIcon>
            </Center>
        </>
    )
}