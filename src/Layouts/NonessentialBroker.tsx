import { useEffect, useState } from "react";
import { Space } from "@mantine/core";
import NonessntialDisplays, { DisplayData } from "./NonessentialDisplays";
import NonessentialInfo, {InfoProps} from "./NonessentialInfo";

// Nice little helper function to return an object inside a nested object assuming you know the path
export const getNestedObject = (nestedObj: any, pathArr: any[]) => {
    return pathArr.reduce((obj, key) => (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
}

// Sums up all the paycheck amounts for Discretionary to Date 
function computeDiscretionaryToDate(dataArray: any[]): number {
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
function computeAvailableNow(dataArray: any[]): number {
    let sum = 0;
    let lastDoc = dataArray[dataArray.length - 1];

    let percentages = getNestedObject(lastDoc, ["Breakdown"]);
    //console.log(dataArray)
    let multiplier = percentages[1];
    let currentNonessentialAmount = +(multiplier * getNestedObject(lastDoc, ["PaycheckAmount"])).toFixed(2);

    sum = getNestedObject(lastDoc, ["RolloverNonEssential"]) + currentNonessentialAmount;

    return sum;
}

export default function NonEssentialBroker() {

    const [data, setData] = useState<any>([]);
    const [dataLoaded, setDataLoaded] = useState<boolean>(false);
    const [infoData, setInfoData] = useState<InfoProps>({numPaychecks: 0, discretionaryToDate: 0, availableNow: 0});
    const [graphData, setGraphData] = useState<DisplayData>({graphData: []})

    const fetchData = async () => {
        try {
             let response: any;
             
             window.api.requestData('Renderer Requests Data');
             window.api.localData(function(event:any, result:any) {
                response = result;
                console.log(response);
                setData(response);
             })
             
            return { success: true, data: response }; 
        } catch (error) {
            console.log(error);
            let response = await fetch('data.json');
            let json = await response.json();
            return { success: false, data: json };
        }
    }


    //First one fetches and sets the data
    useEffect( () => {
        (async () => {
            setDataLoaded(false);
            let res = await fetchData();
            if (res.success) {
                console.log(res.data);
                setData(res.data)
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
            
            setInfoData({numPaychecks: length, discretionaryToDate: discretionary, availableNow: available})
            setGraphData({graphData: data})
            console.log('graph data set??')
        }
    
        
        // eslint-disable-next-line
    }, [data, dataLoaded])

    return (
        <>
        {data.length > 0 &&
            <>
            <NonessentialInfo {...infoData}/>
            <Space h="xl" />
            <NonessntialDisplays {...graphData}/>
            </>
        }
        </>
    )
}