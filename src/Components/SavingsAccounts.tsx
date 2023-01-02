import { Group } from "@mantine/core";
import SavingsAccountPanel from "./SavingsAccountPanel";

const Accounts = [ // Dummy data
    {
        Account: 'Wells Fargo',
        Type: 'Savings',
        Goal: 50000,
        Current: 22000
    },
    {
        Account: 'TD Ameritrade',
        Type: 'Brokerage',
        Goal: 60000,
        Current: 3000,
    },
    {
        Account: 'TD Ameritrade',
        Type: 'Roth IRA',
        Goal: 60000,
        Current: 4000,
    }
]

export default function SavingsAccounts() {
    var MappedAccounts = Accounts.map( (item, i) => {
        return (
            <SavingsAccountPanel key={i} accountHolder={item.Account} accountType={item.Type} goal={item.Goal} currentPrincipal={item.Current} />
        )
    })

    return (  
        <Group spacing="lg" >
            {MappedAccounts}
        </Group>    
    )
}