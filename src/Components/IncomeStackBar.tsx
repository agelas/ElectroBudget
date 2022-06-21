import { FlexibleWidthXYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, VerticalBarSeries } from "react-vis";
import '../../node_modules/react-vis/dist/style.css';

//At some point maybe add DiscreteColorLegend if it doesn't screw up the formatting too much

export default function IncomeStackBar() {
    const data1 = [
        {x: 'P1', y: 10},
        {x: 'P2', y: 10},
        {x: 'P3', y: 10}
    ]

    const data2 = [
        {x: 'P1', y: 4},
        {x: 'P2', y: 6},
        {x: 'P3', y: 4}
    ]

    return(
       <>
        <FlexibleWidthXYPlot height={300} xType="ordinal">
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
            <VerticalBarSeries
                data={data1}
                barWidth={0.7}
                color="#12939A"
                
            />
            <VerticalBarSeries
                data={data2}
                barWidth={0.7}
                color="#79C7E3"
            />
        </FlexibleWidthXYPlot>
       </> 
    )
}