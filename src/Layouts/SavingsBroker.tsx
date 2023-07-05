import { Space } from "@mantine/core";
import SavingsDisplays from "./SavingsDisplays";
import SavingsInfo from "./SavingsInfo";
import { ReactElement } from "react";
import { DisplayData, InfoProps, SavingsAccountsData } from "../Utils/Interfaces";
import { getDate, getPaycheckNumber, getSavingsAccounts } from "../Utils/ParsingFunctions";

export default function SavingsBroker({ appData, addExpenseItem }: DisplayData): ReactElement<any, any> {
    let infoData: InfoProps = {
        numPaychecks: getPaycheckNumber(appData),
        date: getDate(appData),
    };

    let accountsData: SavingsAccountsData = {
        AccountsData: getSavingsAccounts(appData),
    };

    return (
        <>
            <SavingsInfo {...infoData} />
            <Space h='xl' />
            <SavingsDisplays AccountsData={accountsData.AccountsData} />
        </>
    );
}
