import { RingProgress, Text, Group } from "@mantine/core";

export interface RingProps{
    total: number;
    spent: number;
}

export default function RingGraph(props: RingProps) {
    return(
        <Group>
            <RingProgress
                size={200}
                thickness={20}
                roundCaps
                label={
                    <Text size='md' align='center'>Funds Used</Text>
                }
                sections={[
                    {value: ((props.total-props.spent)/props.total*100), color: 'cyan'},
                    {value: (props.spent/props.total*100), color: 'red'}
                ]}
            />
            <Text size="lg"> ${props.spent} spent out of ${(props.total).toFixed(2)}</Text>
        </Group>
    )
}