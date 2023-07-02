import { Space } from "@mantine/core";
import NonessentialDisplays from "./NonessentialDisplays";
import NonessentialInfo from "./NonessentialInfo";
import { DisplayData, InfoProps } from "../Utils/Interfaces";
import { getPaycheckNumber, getDate } from "../Utils/ParsingFunctions";

export default function NonEssentialBroker({ appData, addExpenseItem }: DisplayData) {
    var graphData: DisplayData = { appData, addExpenseItem };
    let infoData: InfoProps = {
        numPaychecks: getPaycheckNumber(appData),
        date: getDate(appData),
    };

    return (
        <>
            <NonessentialInfo {...infoData} />
            <Space h='xl' />
            <NonessentialDisplays {...graphData} />
        </>
    );
}
