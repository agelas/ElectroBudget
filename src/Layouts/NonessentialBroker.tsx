import { useEffect, useState } from "react";
import { Space } from "@mantine/core";
import NonessntialDisplays from "./NonessentialDisplays";
import NonessentialInfo, {InfoProps} from "./NonessentialInfo";

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
        let multiplier = percentages[1]; // The % of the paycheck allocated for nonessentials is the second number in that array
        return sum += multiplier * getNestedObect(item, ["PaycheckAmount"]);
    }
    return +(sum.toFixed(2)); // Need the +() weirdness to keep the return of .toFixed() as a number instead of string
}

// Sums up rollovers for Available Now
function computeAvailableNow(dataArray: any[]): number {
    let sum = 0;
    let lastDoc = dataArray[dataArray.length - 1];

    let percentages = getNestedObect(lastDoc, ["Breakdown"]);
    console.log(dataArray)
    let multiplier = percentages[1];
    let currentNonessentialAmount = +(multiplier * getNestedObect(lastDoc, ["PaycheckAmount"])).toFixed(2);

    sum = getNestedObect(lastDoc, ["RolloverNonEssential"]) + currentNonessentialAmount;

    return sum;
}

function formPayArray(dataArray: any[]): Array<any> {
    let payArray = []
    for (let i = 0; i < dataArray.length; i++) {
        payArray.push({x: i, y: getNestedObect(dataArray[i], ["PaycheckAmount"])})
    }

    return payArray;
}

export default function NonEssentialBroker() {

    const [data, setData] = useState<any>([]);
    const [dataLoaded, setDataLoaded] = useState<boolean>(false);
    const [infoData, setInfoData] = useState<InfoProps>({numPaychecks: 0, discretionaryToDate: 0, availableNow: 0});
    //const [formattedPaycheck, setFormattedPaycheck] = useState([]);

    const fetchData = async () => {
        try {
            let response = await fetch('data.json');
            let json = await response.json(); 
            return { success: true, data: json }; 
        } catch (error) {
            console.log(error);
            return { success: false };
        }
    }

    //First one sets/fetches the data
    useEffect( () => {
        (async () => {
            setDataLoaded(false);
            let res = await fetchData();
            if (res.success) {
                console.log(res.data);
                setData(res.data);
                setDataLoaded(true);
            }
        })();
        
    }, [])

    //Second one fills in the data and sets the right variables
    useEffect( () => {
        if(data.length === 0) {
            console.log('the event loop weird')
            setInfoData({numPaychecks: 0, discretionaryToDate: 0, availableNow: 0})
        } else {
            var length = data.length
            var discretionary = computeDiscretionaryToDate(data)
            var available = computeAvailableNow(data)
            var arr = formPayArray(data)
            console.log(arr)
            setInfoData({numPaychecks: length, discretionaryToDate: discretionary, availableNow: available})
        }
    
        
        // eslint-disable-next-line
    }, [data, dataLoaded])

    return (
        <>
            <NonessentialInfo {...infoData}/>
            <Space h="xl" />
            <NonessntialDisplays />
        </>
    )
}