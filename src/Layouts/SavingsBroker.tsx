import { Space } from "@mantine/core";
import SavingsDisplays from "./SavingsDisplays";
import SavingsInfo from "./SavingsInfo";
import { ReactElement } from "react";
import { InfoProps } from "../Utils/Interfaces";

export default function SavingsBroker(props: any): ReactElement<any, any> {

    let infoData: InfoProps = {
        numPaychecks: 7,
        date: "January 0, 2000"
    }

    return (
        <>  
            <SavingsInfo {...infoData} />
            <Space h="xl" />
            <SavingsDisplays />
        </>
    )
}