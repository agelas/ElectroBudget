import { Space } from "@mantine/core";
import NonessentialDisplays from "./NonessentialDisplays";
import NonessentialInfo from "./NonessentialInfo";
import { IAppData, IHeaderProps } from "../Utils/Interfaces";
import { getPaycheckNumber, getDate } from "../Utils/ParsingFunctions";

export default function NonEssentialBroker({ appData, addExpenseItem }: IAppData) {
    var graphData: IAppData = { appData, addExpenseItem };
    let infoData: IHeaderProps = {
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
