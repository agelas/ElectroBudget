import React from "react";
import { ExpenseType } from "./Enums";

export interface PayCheckContextType {
    payCheckOffset: number;
    setPayCheckOffset: React.Dispatch<React.SetStateAction<number>>;
}

// The entirety of the app data plus callback function that appends
// an expense to app data. addExpenseItem field gets used an InputFunction
// down the component tree.
// Used in EssentialBroker, EssentialDisplays, NonEssentialBroker, NonEssentialDisplays.
export interface IAppData {
    appData: Array<any>;
    addExpenseItem: (newItem: any) => void;
}

// The props that need to be passed for filling in the 4 horizontal bars
// at the top of each page.
// Used in EssentialInfo, EssentialBroker, NonessentialBroker, NonessentialInfo, SavingsBroker.
export interface IHeaderProps {
    numPaychecks: number;
    date: string;
}

// An expense type plus the callback function that appends the expense
// to app data.
// Used in Inputter, ExpenseInput.
export interface IExpenseInput {
    ExpenseType: ExpenseType;
    InputFunction: (newItem: any) => void;
}

// All the fields needed to render an expense group in the cost stack.
// Used in ExpenseGroup.
export interface IExpenseGroupProps {
    expenseType: ExpenseType;
    name: string;
    cost: number;
    active: boolean;
    key: number;
}

// Takes in an array of expenditures extracted from app data.
// Used in CostStack, EssentialDisplays, NonessentialDisplays.
export interface ICostStack {
    expenditures: Array<any>;
    displayType: ExpenseType;
}

// All the fields necessary for rendering the graphs used from react-vis.
// The payPeriods field is an array of x (paycheck #) and y (the amount contributed)
// to the expense type) values. The paySpent field is an array of x (paycheck #) and y
// (the amount used in that expense type).
// Used in IncomeLineGraph, IncomeStackBar, EssentialDisplays, NonEssentialDisplays.
export interface IGraphProps {
    payPeriods: Array<{ x: number; y: number }>;
    paySpent: Array<{ x: number; y: number }>;
    payColor: string;
    spentColor: string;
}

// Fields necessary for rendering a ring graph.
// Used in RingGraph, EssentialDisplays, NonessentialDisplays.
export interface IRingProps {
    total: number;
    spent: number;
    totalColor: string;
    spentColor: string;
}

// Fields necessary for filling in a savings account panel.
// Used in SavingsAccountPanel.
export interface ISavingsPanelProps {
    accountHolder: string;
    accountType: string;
    goal: number;
    currentValue: number;
    key?: number;
}

// Used to drill props from SavingsBroker down to SavingsDisplays.
export interface ISavingsData {
    accountsData: Array<ISavingsPanelProps>;
    addAccountFunction: (newAccount: ISavingsPanelProps) => void;
}

// Used to fill in panel data in SavingsAccounts component. 
export interface IAccountsData {
    accountsData: Array<ISavingsPanelProps>;
}

// All that's needed to add a new savings account.
export interface ISavingsForm {
    addAccountFunction: (newAccount: ISavingsPanelProps) => void;
}

// Used to update allocations to different expense groups
export interface IAllocations {
    allocations: Array<number>;
}
