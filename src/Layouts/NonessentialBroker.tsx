import { Space } from "@mantine/core";
import NonessentialDisplays, { DisplayData } from "./NonessentialDisplays";
import NonessentialInfo, {InfoProps} from "./NonessentialInfo";

export default function NonEssentialBroker(props: any) {
   
    /* var length = props.length
    var discretionary = computeDiscretionaryToDate(props)
    var available = computeAvailableNow(props)
    
    var infoData:InfoProps = {numPaychecks: length, discretionaryToDate: discretionary, availableNow: available} */
    var graphData:DisplayData = {graphData: props}
    let infoData: InfoProps = {
        numPaychecks: 7,
        discretionaryToDate: 200,
        availableNow: 1000
      }
       

    return (
        <>
            <NonessentialInfo {...infoData}/>
            <Space h="xl" />
            <NonessentialDisplays {...graphData}/>
        </>
    )
}