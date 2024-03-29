import { AppShell, Navbar, Header, Footer, ActionIcon, Title, useMantineColorScheme, Group } from "@mantine/core";
import { MainLinks, OtherLinks } from "./NavLinks";
import NonEssentialBroker from "./NonessentialBroker";
import { Sun, MoonStars } from "tabler-icons-react";
import EssentialBroker from "./EssentialBroker";
import SavingsBroker from "./SavingsBroker";
import { PayContext } from "../Utils/PayContext";
import { useEffect, useState } from "react";
import { IAllocations, ISavingsPanelProps } from "../Utils/Interfaces";

function MainApp() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const [currentPage, setCurrentPage] = useState<string>("Non-Essentials");
    const [appData, setAppData] = useState<any>([]);
    const [dataLoaded, setDataLoaded] = useState<boolean>(false);
    const [payCheckOffset, setPayCheckOffset] = useState(0);

    window.addEventListener("beforeunload", (e) => {
        e.preventDefault();

        window.api.saveData(appData).then((response: any) => {
            if (response.success) {
                console.log("Data saved successfully");
            } else {
                console.error("Failed to save data: ", response.error);
            }
        });
    });

    useEffect(() => {
        async function fetchData() {
            try {
                window.api.requestData("Renderer Requests Data");
                const response = await window.api.localData();
                setAppData(response);
                setDataLoaded(true);
            } catch (error) {
                console.log(error);
                let response = await fetch("data.json");
                let json = await response.json();
                setAppData(json);
                setDataLoaded(true);
            }
        }

        fetchData();
    }, []);

    const addExpenseItem = (newItem: any) => {
        const updatedData = [...appData];
        const lastIndex = updatedData.length - 1;
        const targetPaycheck = updatedData[lastIndex];

        if (lastIndex !== -1) {
            targetPaycheck.ExpenseItems.push(newItem);
        }

        setAppData(updatedData);
    };

    const addSavingsAccount = (newAccount: ISavingsPanelProps) => {
        const updatedData = [...appData];
        const lastIndex = updatedData.length - 1;
        const targetPayObject = updatedData[lastIndex];

        if (lastIndex !== -1) {
            targetPayObject.SavingsAccounts.push(newAccount);
        }

        setAppData(updatedData);
    };

    const deleteExpenseItem = (itemName: string) => {
        const updatedData = [...appData];
        const lastIndex = updatedData.length - 1;
        const targetPaycheck = updatedData[lastIndex];

        if (lastIndex !== -1) {
            targetPaycheck.ExpenseItems = targetPaycheck.ExpenseItems.filter(
                (item: { Name: string }) => item.Name !== itemName,
            );
        }
        console.log("Attempt at delete update");
        setAppData(updatedData);
    };

    const updateAllocations = (newAllocations: IAllocations) => {
        const updatedData = [...appData];
        const lastIndex = updatedData.length - 1;
        const targetObject = updatedData[lastIndex];

        if (lastIndex !== -1) {
            targetObject.Allocations = newAllocations;
        }
        setAppData(updatedData);
    };

    return (
        <>
            {dataLoaded && (
                <PayContext.Provider value={{ payCheckOffset, setPayCheckOffset }}>
                    <AppShell
                        navbarOffsetBreakpoint='sm'
                        asideOffsetBreakpoint='sm'
                        fixed
                        navbar={
                            <Navbar p='md' hiddenBreakpoint='sm' width={{ sm: 200, lg: 300 }}>
                                <Navbar.Section grow mt='xs'>
                                    <MainLinks setterFunction={setCurrentPage} />
                                </Navbar.Section>
                                <Navbar.Section>
                                    <OtherLinks />
                                </Navbar.Section>
                            </Navbar>
                        }
                        footer={
                            <Footer height={60} p='md'>
                                Stay un-broke, no promises though
                            </Footer>
                        }
                        header={
                            <Header height={70} p='md'>
                                <Group sx={{ height: "100%" }} px={20} position='apart'>
                                    <Title order={1}>ElectroBudget</Title>
                                    <ActionIcon variant='default' onClick={() => toggleColorScheme()} size={30}>
                                        {colorScheme === "dark" ? <Sun size={16} /> : <MoonStars size={16} />}
                                    </ActionIcon>
                                </Group>
                            </Header>
                        }
                    >
                        {currentPage === "Non-Essentials" && (
                            <NonEssentialBroker appData={appData} addExpenseItem={addExpenseItem} />
                        )}
                        {currentPage === "Essentials" && (
                            <EssentialBroker appData={appData} addExpenseItem={addExpenseItem} />
                        )}
                        {currentPage === "Savings" && (
                            <SavingsBroker appData={appData} addExpenseItem={addSavingsAccount} />
                        )}
                    </AppShell>
                </PayContext.Provider>
            )}
        </>
    );
}

export default MainApp;
