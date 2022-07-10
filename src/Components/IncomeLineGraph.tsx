import {FlexibleWidthXYPlot, LineMarkSeries, XAxis, YAxis} from 'react-vis';

export interface LineGraphProps {
    payPeriods: Array<[]>,
    paySpent: Array<[]>
}

export default function IncomeLineGraph(props: LineGraphProps) {
    /*
    const data = [
        {x: 0, y: 8},
        {x: 1, y: 8},
        {x: 2, y: 8},
        {x: 3, y: 8},
        {x: 4, y: 8},
        {x: 5, y: 8},
        {x: 6, y: 8},
        {x: 7, y: 8},
        {x: 8, y: 8},
        {x: 9, y: 8},
        {x: 10, y: 8}
    ];

    const data2 = [
        {x: 0, y: 7},
        {x: 1, y: 5},
        {x: 2, y: 4},
        {x: 3, y: 7},
        {x: 4, y: 1},
        {x: 5, y: 8},
        {x: 6, y: 6},
        {x: 7, y: 3},
        {x: 8, y: 2},
        {x: 9, y: 0}
      ];
      */

    return (
        <FlexibleWidthXYPlot height={300} >
            <LineMarkSeries data={props.payPeriods} style={{ fill: 'none', strokeWidth: 3}}/>
            <LineMarkSeries data={props.paySpent} color="pink" curve={'curveMonotoneX'} style={{ fill: 'none', strokeWidth: 3, }}/>
            
            <XAxis title="Pay Period"/>
            <YAxis />
        </FlexibleWidthXYPlot>
    )
}