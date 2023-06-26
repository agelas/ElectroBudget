import { Space } from "@mantine/core";
import EssentialInfo, { InfoProps } from "./EssentialInfo";
import EssentialDisplays from "./EssentialDisplays";
import { DisplayData } from "./NonessentialDisplays";

export default function EssentialBroker({ appData, addExpenseItem }: DisplayData) {
    var graphData: DisplayData = { appData, addExpenseItem };
    let infoData: InfoProps = {
        numPaychecks: 7,
        discretionaryToDate: 200,
        availableNow: 1000,
    };

    return (
        <>
            <EssentialInfo {...infoData} />
            <Space h='xl' />
            <EssentialDisplays {...graphData} />
        </>
    );
}
