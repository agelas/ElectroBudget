import { Space } from "@mantine/core";
import SavingsDisplays from "./SavingsDisplays";
import SavingsInfo from "./SavingsInfo";
import { ReactElement } from "react";
import { InfoProps } from "./EssentialInfo";

export default function SavingsBroker(props: any): ReactElement<any, any> {

    let infoData: InfoProps = {
        numPaychecks: 7,
        discretionaryToDate: 200,
        availableNow: 1000
    }

    return (
        <>  
            <SavingsInfo {...infoData} />
            <Space h="xl" />
            <SavingsDisplays />
        </>
    )
}