import { getNestedObject } from "./NestedAccess";

// Turns data object into an array that all the other functions expect
export function turnIntoArray(data: any[]) {
    let dataArray = Object.entries(data).map(([index, obj]) => ({ index, ...obj }));
    return dataArray;
}

// Sums up all the paycheck amounts for Discretionary to Date
export function computeDiscretionaryToDate(dataArray: any[]): number {
    let sum = 0;
    try {
        dataArray.forEach(calcDiscretionarySum);
    } catch (err) {
        console.log(err);
        return 0;
    }

    function calcDiscretionarySum(item: any): number {
        let percentages = getNestedObject(item, ["Breakdown"]);
        let multiplier = percentages[1]; // The % of the paycheck allocated for nonessentials is the second number in that array
        return (sum += multiplier * getNestedObject(item, ["PaycheckAmount"]));
    }
    return +sum.toFixed(2); // Need the +() weirdness to keep the return of .toFixed() as a number instead of string
}

// Sums up rollovers for Available Now
export function computeAvailableNow(dataArray: any[]): number {
    let sum = 0;

    try {
        let lastDoc = dataArray[dataArray.length - 1];
        let percentages = getNestedObject(lastDoc, ["Breakdown"]);
        let multiplier = percentages[1];
        let currentNonessentialAmount = +(multiplier * getNestedObject(lastDoc, ["PaycheckAmount"])).toFixed(2);

        sum = getNestedObject(lastDoc, ["RolloverNonEssential"]) + currentNonessentialAmount;
    } catch (err) {
        console.log(err);
    } finally {
        return sum;
    }
}

// Retrieves and formats data on how much you were paid. Used for line graph and bar graph.
export function formPayArray(dataArray: any[]): Array<any> {
    let payArray = [];
    let paycheckConstraint = 0; // let's just show the last 7 for now
    if (dataArray.length > 7) {
        paycheckConstraint = dataArray.length - 7;
    }
    for (let i = paycheckConstraint; i < dataArray.length; i++) {
        let percentages = getNestedObject(dataArray[i], ["Breakdown"]);
        let multiplier = percentages[0];
        payArray.push({ x: i + 1, y: multiplier * getNestedObject(dataArray[i], ["PaycheckAmount"]) });
    }
    // console.log(payArray);
    return payArray;
}

// Retrieves and formats data on how much money was spent in the non-essential expenditure category.
export function formNonEssentialSpentArray(dataArray: any[]): Array<any> {
    let spentArray = [];
    let paycheckConstraint = 0; // let's just show the last 7 for now
    if (dataArray.length > 7) {
        paycheckConstraint = dataArray.length - 7;
    }

    for (let i = paycheckConstraint; i < dataArray.length; i++) {
        spentArray.push({ x: i + 1, y: getNestedObject(dataArray[i], ["NonEssentialSpent"]) });
    }

    return spentArray;
}

export enum Categories {
    Essential,
    NonEssential,
    Savings,
    None,
}

export function formGraphArray(dataArray: any[], category: Categories, value: string, offset: number): Array<any> {
    let graphArray = [];
    let startIndex = 0; // The index where we start slice from all the data
    let endIndex = dataArray.length; // The index where we stop slicing
    let multiplier = 1;

    if (dataArray.length > 7 + offset) {
        // keep to last 7 data points
        startIndex = dataArray.length - 7 - offset;
        endIndex = dataArray.length - offset
    }

    for (let i = startIndex; i < endIndex; i++) {
        let percentages = getNestedObject(dataArray[i], ["Breakdown"]);
        if (category !== 3) {
            multiplier = percentages[category];
        }
        graphArray.push({ x: i + 1, y: multiplier * getNestedObject(dataArray[i], [value]) });
    }
    // console.log(dataArray);
    return graphArray;
}

// Retrieves array of expenditures
export function getExpenseItems(dataArray: any[], offset: number): Array<any> {
    let expenseArray = [];
    let lastDoc = dataArray[dataArray.length - 1 - offset];
    expenseArray = getNestedObject(lastDoc, ["ExpenseItems"]);
    return expenseArray;
}

export function getCurrentSpent(dataArray: any[], category: string): number {
    let expenseArray = [];
    let spent = 0;
    if (dataArray.length > 0) {
        let lastDoc = dataArray[dataArray.length - 1];
        expenseArray = getNestedObject(lastDoc, ["ExpenseItems"]);
        var filteredExpenseArray = expenseArray.filter((expense: { Type: string }) => expense.Type === category);
        filteredExpenseArray.forEach((element: any) => {
            spent = spent + getNestedObject(element, ["Cost"]);
        });
    }

    // console.log(spent);
    return spent;
}

export function getTotalAmount(dataArray: any[]): number {
    let pay,
        multiplier = 1;
    if (dataArray.length > 0) {
        let lastDoc = dataArray[dataArray.length - 1];
        pay = getNestedObject(lastDoc, ["PaycheckAmount"]);
        let percentages = getNestedObject(lastDoc, ["Breakdown"]);
        multiplier = percentages[1]; // TODO: everything will be 30%
    }

    return pay * multiplier;
}
