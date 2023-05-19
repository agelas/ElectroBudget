import { Timeline, Text } from "@mantine/core";
import { Cash, FileDollar } from "tabler-icons-react";

//TODO: Change bullet icon colors, should be responsive.

export interface PayTimelineInterface {
    lineColor: string;
  }

export default function PayTimeline(props: PayTimelineInterface) {
    const d = new Date();
    const day = d.getDate();
    let daysNextPay: number, daysLastPay: number;

    if (day <= 15) {
        daysNextPay = 15 - day;
        daysLastPay = day;
    } else {
        let lastDayOfMonth = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
        daysNextPay = lastDayOfMonth - day;

        daysLastPay = day - 15;
    }

    return (
        <Timeline active={1} color={props.lineColor} >
            <Timeline.Item bullet={<Cash size={24} />} bulletSize={36} title='Last Paycheck'>
                <Text color='dimmed'>{daysLastPay} days ago</Text>
            </Timeline.Item>

            <Timeline.Item bullet={<FileDollar size={24} />} bulletSize={36} title='Next Paycheck'>
                <Text color='dimmed'>In {daysNextPay} days</Text>
            </Timeline.Item>
        </Timeline>
    )
}