import {
  FlexibleWidthXYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
} from "react-vis";
import "../../node_modules/react-vis/dist/style.css";
import { GraphProps } from "./IncomeLineGraph";

//At some point maybe add DiscreteColorLegend if it doesn't screw up the formatting too much

export default function IncomeStackBar(props: GraphProps) {
  return (
    <>
      <FlexibleWidthXYPlot height={300} xType="ordinal">
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <VerticalBarSeries
          data={props.payPeriods}
          barWidth={0.7}
          color={props.payColor}
        />
        <VerticalBarSeries
          data={props.paySpent}
          barWidth={0.7}
          color={props.spentColor}
        />
      </FlexibleWidthXYPlot>
    </>
  );
}
