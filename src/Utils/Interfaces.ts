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

// The props that need to be passed for filling in the 4 horizontal bars
// at the top of each page.
// Used in EssentialInfo, EssentialBroker, NonessentialBroker, NonessentialInfo, SavingsBroker.
export interface InfoProps {
    numPaychecks: number;
    discretionaryToDate: number;
    availableNow: number;
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

// Takes in an array of expenditures extracted from app data.
// TODO: Use ExpenseType instead of a string for displayType.
// Used in CostStack, EssentialDisplays, NonessentialDisplays.
export interface CostStackInterface {
    expenditures: Array<any>;
    displayType: string;
}

// All the fields necessary for rendering the graphs used from react-vis.
// The payPeriods field is an array of x (paycheck #) and y (the amount contributed)
// to the expense type) values. The paySpent field is an array of x (paycheck #) and y
// (the amount used in that expense type).
// Used in IncomeLineGraph, IncomeStackBar, EssentialDisplays, NonEssentialDisplays.
export interface GraphProps {
    payPeriods: Array<{ x: number; y: number }>;
    paySpent: Array<{ x: number; y: number }>;
    payColor: string;
    spentColor: string;
}

// Fields necessary for rendering a ring graph.
// Used in RingGraph, EssentialDisplays, NonessentialDisplays.
export interface RingProps {
    total: number;
    spent: number;
    totalColor: string;
    spentColor: string;
}

// Fields necessary for filling in a savings account panel.
// Used in SavingsAccountPanel.
export interface SavingsAccountProps {
    accountHolder: string;
    accountType: string;
    goal: number;
    currentPrincipal: number;
    key: number;
}
