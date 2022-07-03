import { useEffect, useState } from "react";
import { Space } from "@mantine/core";
import NonessntialDisplays from "./NonessentialDisplays";
import NonessentialInfo, {InfoProps} from "./NonessentialInfo";

import pay1 from '../SampleData/SampleData1.json';
import pay2 from '../SampleData/SampleData2.json';
import pay3 from '../SampleData/SampleData3.json';

// Nice little helper function to return an object inside a nested object assuming you know the path
const getNestedObect = (nestedObj: any, pathArr: any[]) => {
    return pathArr.reduce((obj, key) => (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
}

// Sums up all the paycheck amounts for Discretionary to Date 
function computeDiscretionaryToDate(dataArray: any[]): number {
    let sum = 0;
    dataArray.forEach(calcDiscretionarySum)

    function calcDiscretionarySum(item: any): number {
        let percentages = getNestedObect(item, ["Breakdown"]);
        let multiplier = percentages[1]; // The % of the paycheck is for nonessentials is the second number in that array
        return sum += multiplier * getNestedObect(item, ["PaycheckAmount"]);
    }
    return +(sum.toFixed(2)); // Need the +() weirdness to keep the return of .toFixed() as a number instead of string
}

// Sums up rollovers for Available Now
function computeAvailableNow(dataArray: any[]): number {
    let sum = 0;
    let lastDoc = dataArray[dataArray.length - 1];

    let percentages = getNestedObect(lastDoc, ["Breakdown"]);
    let multiplier = percentages[1];
    let currentNonessentialAmount = +(multiplier * getNestedObect(lastDoc, ["PaycheckAmount"])).toFixed(2);

    sum = getNestedObect(lastDoc, ["RolloverNonEssential"]) + currentNonessentialAmount;

    return sum;
}

export default function NonEssentialBroker() {

    const [data, setData] = useState<any>([]);
    const [infoData, setInfoData] = useState<InfoProps>({numPaychecks: 0, discretionaryToDate: 0, availableNow: 0});

    //First one sets/fetches the data
    useEffect( () => {
        setData([pay1, pay2, pay3])
    }, [])

    //Second one fills in the data and sets the right variables
    useEffect( () => {
        var length = data.length
        var discretionary = computeDiscretionaryToDate(data)
        var available = computeAvailableNow(data)
    
        setInfoData({numPaychecks: length, discretionaryToDate: discretionary, availableNow: available})
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <NonessentialInfo {...infoData}/>
            <Space h="xl" />
            <NonessntialDisplays />
        </>
    )
}