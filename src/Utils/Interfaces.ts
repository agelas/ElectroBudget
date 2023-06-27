import React from "react";
import { ExpenseInputType } from "./Enums";

export interface PayCheckContextType {
    payCheckOffset: number;
    setPayCheckOffset: React.Dispatch<React.SetStateAction<number>>;
}

// The entirety of the app data plus callback function that appends
// an expense to app data. addExpenseItem field gets used an InputFunction
// down the component tree.
// Used in EssentialBroker, EssentialDisplays, NonEssentialBroker, NonEssentialDisplays.
export interface DisplayData {
    appData: Array<any>;
    addExpenseItem: (newItem: any) => void;
}

// An expense type plus the callback function that appends the expense
// to app data.
// Used in Inputter, ExpenseInput.
export interface ExpenseInputInterface {
    ExpenseType: ExpenseInputType;
    InputFunction: (newItem: any) => void;
}

// All the fields needed to render an expense group in the cost stack.
// Used in ExpenseGroup.
export interface ExpenseGroupProps {
    expenseType: ExpenseInputType;
    name: string;
    cost: number;
    active: boolean;
    key: number;
}
