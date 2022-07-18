import React from "react";
import { RingProgress, Text } from "@mantine/core";

export interface RingProps{
    total: number;
    spent: number;
}

export default function RingGraph(props: RingProps) {
    return(
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
    )
}