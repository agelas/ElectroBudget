import { Group } from "@mantine/core";
import SavingsAccountPanel from "./SavingsAccountPanel";
import { SavingsAccountsData } from "../Utils/Interfaces";

export default function SavingsAccounts({ AccountsData }: SavingsAccountsData) {
    var MappedAccounts = AccountsData.map((item, i) => {
        return (
            <SavingsAccountPanel
                key={i}
                accountHolder={item.accountHolder}
                accountType={item.accountType}
                goal={item.goal}
                currentValue={item.currentValue}
            />
        );
    });

    return <Group spacing='lg'>{MappedAccounts}</Group>;
}
