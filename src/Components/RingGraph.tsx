import React from "react";
import { RingProgress, Text } from "@mantine/core";

export default function RingGraph() {
    return(
        <RingProgress
            size={200}
            thickness={20}
            roundCaps
            label={
                <Text size='md' align='center'>Funds Used</Text>
            }
            sections={[
                {value: 70, color: 'cyan'},
                {value: 30, color: 'red'}
            ]}
        />
    )
}