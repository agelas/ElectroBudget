import { Timeline, Text } from "@mantine/core";
import { Cash, FileDollar } from "tabler-icons-react";

export default function PayTimeline() {
    return(
        <Timeline active={1}>
            <Timeline.Item bullet={<Cash size={24}/>} bulletSize={36} title='Last Paycheck'>
                <Text color='dimmed'>5 days ago</Text>
            </Timeline.Item>

            <Timeline.Item bullet={<FileDollar size={24}/>} bulletSize={36} title='Next Paycheck'>
                <Text color='dimmed'>In 3 days</Text>
            </Timeline.Item>

        </Timeline>
    )
}