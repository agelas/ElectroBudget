import { Space } from "@mantine/core";
import EssentialInfo, { InfoProps } from "./EssentialInfo";
import EssentialDisplays from "./EssentialDisplays";
import { ReactElement } from 'react';

export default function EssentialBroker(): ReactElement<any, any> {

  let infoData: InfoProps = {
    numPaychecks: 7,
    discretionaryToDate: 200,
    availableNow: 1000
  }

  return (
    <>
      <EssentialInfo {...infoData}/>
      <Space h="xl" />
      <EssentialDisplays />
    </>
  );
}
