import { Space } from "@mantine/core";
import EssentialInfo from "./EssentialInfo";
import EssentialDisplays from "./EssentialDisplays";
import { DisplayData, InfoProps } from "../Utils/Interfaces";
import { getPaycheckNumber, getDate } from "../Utils/ParsingFunctions";

export default function EssentialBroker({ appData, addExpenseItem }: DisplayData) {
    var graphData: DisplayData = { appData, addExpenseItem };
    let infoData: InfoProps = {
        numPaychecks: getPaycheckNumber(appData),
        date: getDate(appData),
    };

    return (
        <>
            <EssentialInfo {...infoData} />
            <Space h='xl' />
            <EssentialDisplays {...graphData} />
        </>
    );
}
