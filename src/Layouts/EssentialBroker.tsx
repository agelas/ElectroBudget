import { Space } from "@mantine/core";
import EssentialInfo from "./EssentialInfo";
import EssentialDisplays from "./EssentialDisplays";
import { IAppData, IHeaderProps } from "../Utils/Interfaces";
import { getPaycheckNumber, getDate } from "../Utils/ParsingFunctions";

export default function EssentialBroker({ appData, addExpenseItem }: IAppData) {
    var graphData: IAppData = { appData, addExpenseItem };
    let infoData: IHeaderProps = {
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
