import { getNestedObject } from "./NestedAccess";

// Sums up all the paycheck amounts for Discretionary to Date 
export function computeDiscretionaryToDate(dataArray: any[]): number {
    let sum = 0;
    dataArray.forEach(calcDiscretionarySum)

    function calcDiscretionarySum(item: any): number {
        let percentages = getNestedObject(item, ["Breakdown"]);
        let multiplier = percentages[1]; // The % of the paycheck allocated for nonessentials is the second number in that array
        return sum += multiplier * getNestedObject(item, ["PaycheckAmount"]);
    }
    return +(sum.toFixed(2)); // Need the +() weirdness to keep the return of .toFixed() as a number instead of string
}

// Sums up rollovers for Available Now
export function computeAvailableNow(dataArray: any[]): number {
    let sum = 0;
    let lastDoc = dataArray[dataArray.length - 1];

    let percentages = getNestedObject(lastDoc, ["Breakdown"]);
    let multiplier = percentages[1];
    let currentNonessentialAmount = +(multiplier * getNestedObject(lastDoc, ["PaycheckAmount"])).toFixed(2);

    sum = getNestedObject(lastDoc, ["RolloverNonEssential"]) + currentNonessentialAmount;

    return sum;
}

// Retrieves and formats data on how much you were paid. Used for line graph and bar graph. 
export function formPayArray(dataArray: any[]): Array<any> {
    let payArray = [];
    let paycheckConstraint = 0; // let's just show the last 7 for now
    if(dataArray.length > 7) {
        paycheckConstraint = dataArray.length - 7;
    }
    for (let i = paycheckConstraint; i < dataArray.length; i++) {
        let percentages = getNestedObject(dataArray[i], ["Breakdown"]);
        let multiplier = percentages[0];
        payArray.push({x: i+1, y: multiplier*getNestedObject(dataArray[i], ["PaycheckAmount"])});
    }

    return payArray;
}

// Retrieves and formats data on how much money was spent in the non-essential expenditure category.
export function formNonEssentialSpentArray(dataArray: any[]): Array<any> {
    let spentArray = [];
    let paycheckConstraint = 0; // let's just show the last 7 for now
    if(dataArray.length > 7) {
        paycheckConstraint = dataArray.length - 7;
    }

    for (let i = paycheckConstraint; i < dataArray.length; i++) {
        spentArray.push({x: i+1, y: getNestedObject(dataArray[i], ["NonEssentialSpent"])});
    }

    return spentArray;
}

export enum Categories {
    Essential,
    NonEssential,
    Saving,
    None,
}

export function formGraphArray(dataArray: any[], category:Categories, value:string): Array<any> {
    let graphArray = [];
    let constraint = 0;
    let multiplier = 1;

    if(dataArray.length > 7) { // keep to last 7 data points
        constraint = dataArray.length - 7;
    }

    for (let i = constraint; i < dataArray.length; i++) {
        let percentages = getNestedObject(dataArray[i], ["Breakdown"]);
        if(category !== 3) {
            multiplier = percentages[category];
        }
        graphArray.push({x: i+1, y: multiplier*getNestedObject(dataArray[i], [value])});
    }
    return graphArray;
}

// Retrieves array of expenditures
export function getExpenseItems(dataArray: any[]): Array<any> {
    let expenseArray = [];
    let lastDoc = dataArray[dataArray.length - 1];
    expenseArray = getNestedObject(lastDoc, ["ExpenseItems"]);
    return expenseArray;
}

export function getCurrentSpent(dataArray: any[], category: string): number {
    let expenseArray = [];
    let spent = 0;
    if(dataArray.length > 0) {
        let lastDoc = dataArray[dataArray.length - 1];
        expenseArray = getNestedObject(lastDoc, ["ExpenseItems"]);
        var filteredExpenseArray = expenseArray.filter((expense: { Type: string; }) => expense.Type === category)
        filteredExpenseArray.forEach((element: any) => {
        spent = spent + getNestedObject(element, ["Cost"]);
    });
    }
    
    console.log(spent)
    return spent;
}

export function getTotalAmount(dataArray: any[]): number {
    let pay, multiplier = 1;
    if(dataArray.length > 0) {
        let lastDoc = dataArray[dataArray.length - 1];
        pay = getNestedObject(lastDoc, ["PaycheckAmount"]);
        let percentages = getNestedObject(lastDoc, ["Breakdown"]);
        multiplier = percentages[1];
    }
    
    return pay * multiplier;
}