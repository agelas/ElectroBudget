import { useEffect, useState } from "react";
import { Space } from "@mantine/core";
import NonessentialDisplays, { DisplayData } from "./NonessentialDisplays";
import NonessentialInfo, {InfoProps} from "./NonessentialInfo";
import { computeAvailableNow, computeDiscretionaryToDate } from "../Utils/ParsingFunctions";

export default function NonEssentialBroker() {

    const [data, setData] = useState<any>([]);
    const [dataLoaded, setDataLoaded] = useState<boolean>(false);
    const [infoData, setInfoData] = useState<InfoProps>({numPaychecks: 0, discretionaryToDate: 0, availableNow: 0});
    const [graphData, setGraphData] = useState<DisplayData>({graphData: []})

    const fetchData = async () => {
        try {
             let response: any;
             
             window.api.requestData('Renderer Requests Data');
             window.api.localData(function(_event:any, result:any) {
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
                <NonessentialDisplays {...graphData}/>
            </>
        }
        </>
    )
}