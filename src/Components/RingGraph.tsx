import { RingProgress, Text, Group } from "@mantine/core";
import { RingProps } from "../Utils/Interfaces";

export default function RingGraph(props: RingProps) {
    return (
        <Group>
            <RingProgress
                size={200}
                thickness={20}
                roundCaps
                label={
                    <Text size='md' align='center'>
                        Funds Used
                    </Text>
                }
                sections={[
                    {
                        value: ((props.total - props.spent) / props.total) * 100,
                        color: props.totalColor,
                    },
                    { value: (props.spent / props.total) * 100, color: props.spentColor },
                ]}
            />
            <Text size='lg'>
                {" "}
                ${props.spent.toFixed(2)} spent out of ${props.total.toFixed(2)}
            </Text>
        </Group>
    );
}
