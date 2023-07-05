import { Categories, ExpenseInputType } from "./Enums";
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
    
    return payArray;
}

export function formGraphArray(dataArray: any[], category: Categories, value: string, offset: number): Array<any> {
    let graphArray = [];
    let startIndex = 0; // The index where we start slice from all the data
    let endIndex = dataArray.length; // The index where we stop slicing
    let multiplier = 1;

    if (dataArray.length > 7 + offset) {
        // keep to last 7 data points
        startIndex = dataArray.length - 7 - offset;
        endIndex = dataArray.length - offset;
    }

    for (let i = startIndex; i < endIndex; i++) {
        let percentages = getNestedObject(dataArray[i], ["Breakdown"]);
        if (category !== 3) {
            multiplier = percentages[category];
        }
        graphArray.push({ x: i + 1, y: multiplier * getNestedObject(dataArray[i], [value]) });
    }
   
    return graphArray;
}

// Retrieves array of expenditures
export function getExpenseItems(dataArray: any[], offset: number): Array<any> {
    let expenseArray = [];
    let lastDoc = dataArray[dataArray.length - 1 - offset];
    expenseArray = getNestedObject(lastDoc, ["ExpenseItems"]);
    return expenseArray;
}

// Converts a Categories enum to ExpenseInputType enum
function expenseEnumConverter(category: Categories): string {
    if (category === Categories.Essential) {
        return ExpenseInputType.Essential;
    } else if (category === Categories.NonEssential) {
        return ExpenseInputType.NonEssential;
    }

    return ""
}

// Used for ring graph
export function getCurrentSpent(dataArray: any[], category: Categories, offset: number): number {
    let expenseArray = [];
    let spent = 0;
    if (dataArray.length > 0) {
        let doc = dataArray[dataArray.length - 1 - offset];
        expenseArray = getNestedObject(doc, ["ExpenseItems"]);
        var filteredExpenseArray = expenseArray.filter((expense: { Type: string }) => expense.Type === expenseEnumConverter(category));
        filteredExpenseArray.forEach((element: any) => {
            spent = spent + getNestedObject(element, ["Cost"]);
        });
    }

    return spent;
}

// Used for ring graph
export function getTotalAmount(dataArray: any[], category: Categories, offset: number): number {
    let pay,
        multiplier = 1;
    if (dataArray.length > 0) {
        let doc = dataArray[dataArray.length - 1 - offset];
        pay = getNestedObject(doc, ["PaycheckAmount"]);
        let percentages = getNestedObject(doc, ["Breakdown"]);
        multiplier = percentages[category];
    }

    return pay * multiplier;
}

export function getSavingsAccount(dataArray: any[]): Array<any> {
    let accounts = [];
    if (dataArray.length > 0) {
        let doc = dataArray[dataArray.length - 1];
        accounts = getNestedObject(doc, ["SavingsAccounts"]);
    }

    return accounts;
}

export function getDate(dataArray: any[]): string {
    let date = new Date("2000-01-01");

    if (dataArray.length > 0) {
        let lastDoc = dataArray[dataArray.length - 1];
        date = new Date(getNestedObject(lastDoc, ["Date"]));
    }

    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
}

export function getPaycheckNumber(dataArray: any[]): number {
    let num = 0;

    if (dataArray.length > 0) {
        let lastDoc = dataArray[dataArray.length - 1];
        num = getNestedObject(lastDoc, ["PaycheckNum"])
    }

    return num;
}
