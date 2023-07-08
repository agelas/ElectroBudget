import React from "react";
import { Divider, ActionIcon, Center } from "@mantine/core";
import { CirclePlus, CircleMinus } from "tabler-icons-react";
import ExpenseInput from "./ExpenseInput";
import { IExpenseInput } from "../Utils/Interfaces";

export default function Inputter({
  ExpenseType,
  InputFunction,
}: IExpenseInput) {
  return (
    <>
      <Divider my="xs" label="Add Items" />
      <ExpenseInput ExpenseType={ExpenseType} InputFunction={InputFunction} />
      <Divider my="xs" label="Paychecks" />
      <Center>
        <ActionIcon color="green" size="xl">
          <CirclePlus />
        </ActionIcon>
        <ActionIcon color="red" size="xl">
          <CircleMinus />
        </ActionIcon>
      </Center>
    </>
  );
}
