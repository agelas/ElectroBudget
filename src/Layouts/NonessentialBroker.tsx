import { Space } from "@mantine/core";
import NonessentialDisplays, { DisplayData } from "./NonessentialDisplays";
import NonessentialInfo, { InfoProps } from "./NonessentialInfo";

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
