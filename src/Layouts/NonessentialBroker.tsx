import { Space } from "@mantine/core";
import NonessentialDisplays from "./NonessentialDisplays";
import NonessentialInfo from "./NonessentialInfo";
import { DisplayData, InfoProps } from "../Utils/Interfaces";

export default function NonEssentialBroker({ appData, addExpenseItem }: DisplayData) {
    var graphData: DisplayData = { appData, addExpenseItem };
    let infoData: InfoProps = {
        numPaychecks: 7,
        discretionaryToDate: 200,
        availableNow: 1000,
    };

    return (
        <>
            <NonessentialInfo {...infoData} />
            <Space h='xl' />
            <NonessentialDisplays {...graphData} />
        </>
    );
}
