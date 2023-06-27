import { FlexibleWidthXYPlot, LineMarkSeries, XAxis, YAxis } from "react-vis";
import { GraphProps } from "../Utils/Interfaces";

export default function IncomeLineGraph(props: GraphProps) {
    var ticks = props.payPeriods.map((t) => t.x);

    return (
        <FlexibleWidthXYPlot height={300}>
            <LineMarkSeries data={props.payPeriods} color={props.payColor} style={{ fill: "none", strokeWidth: 3 }} />
            <LineMarkSeries
                data={props.paySpent}
                color={props.spentColor}
                curve={"curveMonotoneX"}
                style={{ fill: "none", strokeWidth: 3 }}
            />

            <XAxis title='Pay Period' tickValues={ticks} />
            <YAxis />
        </FlexibleWidthXYPlot>
    );
}
