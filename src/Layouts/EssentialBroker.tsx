import { Space } from "@mantine/core";
import EssentialInfo, { InfoProps } from "./EssentialInfo";
import EssentialDisplays from "./EssentialDisplays";
import { ReactElement } from 'react';
import { DisplayData } from "./NonessentialDisplays";

export default function EssentialBroker(props: any): ReactElement<any, any> {

  var graphData: DisplayData = { graphData: props }
  let infoData: InfoProps = {
    numPaychecks: 7,
    discretionaryToDate: 200,
    availableNow: 1000
  }

  return (
    <>
      <EssentialInfo {...infoData} />
      <Space h="xl" />
      <EssentialDisplays {...graphData} />
    </>
  );
}
