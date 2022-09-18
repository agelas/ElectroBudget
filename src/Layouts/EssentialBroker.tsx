import { Space } from "@mantine/core";
import EssentialInfo, { InfoProps } from "./EssentialInfo";
import EssentialDisplays from "./EssentialDisplays";
import { ReactElement, useEffect, useState } from 'react';
import { DisplayData } from "./NonessentialDisplays";
import { fetchData } from "../Utils/FetchData";

export default function EssentialBroker(): ReactElement<any, any> {

  const [data, setData] = useState<any>([]);
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);
  const [graphData, setGraphData] = useState<DisplayData>({graphData: []});

  //First one fetches and sets the data
  useEffect( () => {
      (async () => {
          setDataLoaded(false);
          let res = await fetchData(setData);
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
      } else {
          setGraphData({graphData: data})
          console.log('graph data set??')
      }
      // eslint-disable-next-line
  }, [data, dataLoaded])

  let infoData: InfoProps = {
    numPaychecks: 7,
    discretionaryToDate: 200,
    availableNow: 1000
  }

  return (
    <>
      <EssentialInfo {...infoData}/>
      <Space h="xl" />
      <EssentialDisplays {...graphData}/>
    </>
  );
}
