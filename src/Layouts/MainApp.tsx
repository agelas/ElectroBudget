import { AppShell, Navbar, Header, Footer, ActionIcon, Title, useMantineColorScheme, Group } from '@mantine/core';
import { MainLinks, OtherLinks } from './NavLinks';
import NonEssentialBroker from './NonessentialBroker';
import { Sun, MoonStars } from 'tabler-icons-react';
import EssentialBroker from './EssentialBroker';
import SavingsBroker from './SavingsBroker';
import { useCallback, useEffect, useState } from 'react';
import { fetchData } from "../Utils/FetchData";

function MainApp() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [currentPage, setCurrentPage] = useState<string>('Non-Essentials');
  const [appData, setAppData] = useState<any>([]);
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);

  // Here we go again
  const fetch = useCallback(async () => {
    let res = await fetchData(setAppData);
    if (res.success) {
      console.log("res.data loaded");
      console.log(res.data);
      setDataLoaded(true);
    } else {
      console.log("res.data not found")
    }
  }, [dataLoaded])

  // Aaand again
  useEffect(() => {
    console.log(appData)
    fetch()
    console.log(appData)
  }, [fetch])

  return (

    <>
      {dataLoaded &&
        <AppShell
          navbarOffsetBreakpoint="sm"
          asideOffsetBreakpoint="sm"
          fixed
          navbar={
            <Navbar p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
              <Navbar.Section grow mt="xs">
                <MainLinks setterFunction={setCurrentPage} />
              </Navbar.Section>
              <Navbar.Section>
                <OtherLinks />
              </Navbar.Section>
            </Navbar>
          }
          footer={
            <Footer height={60} p="md">
              Footer here
            </Footer>
          }
          header={
            <Header height={70} p="md">
              <Group sx={{ height: '100%' }} px={20} position="apart">
                <Title order={1}>Stay Un-Broke</Title>
                <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
                  {colorScheme === 'dark' ? <Sun size={16} /> : <MoonStars size={16} />}
                </ActionIcon>
              </Group>
            </Header>
          }
        >

          {currentPage === 'Non-Essentials' && <NonEssentialBroker {...appData} />}
          {currentPage === 'Essentials' && <EssentialBroker {...appData} />}
          {currentPage === 'Savings' && <SavingsBroker />}
        </AppShell>
      }
    </>
  );
}

export default MainApp;
