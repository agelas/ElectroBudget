import { Space } from "@mantine/core";
import SavingsDisplays from "./SavingsDisplays";
import SavingsInfo from "./SavingsInfo";
import { ReactElement } from "react";
import { IAppData, IHeaderProps } from "../Utils/Interfaces";
import { getDate, getPaycheckNumber, getSavingsAccounts } from "../Utils/ParsingFunctions";

export default function SavingsBroker({ appData, addExpenseItem }: IAppData): ReactElement<any, any> {
    let infoData: IHeaderProps = {
        numPaychecks: getPaycheckNumber(appData),
        date: getDate(appData),
    };

    let accountsData = {
        accountsData: getSavingsAccounts(appData),
    };

    return (
        <>
            <SavingsInfo {...infoData} />
            <Space h='xl' />
            <SavingsDisplays accountsData={accountsData.accountsData} addAccountFunction={addExpenseItem} />
        </>
    );
}
