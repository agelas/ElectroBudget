import React from "react";
import { Stack, Button, ScrollArea } from '@mantine/core';

export default function CostStack() {
    return(
        <Stack spacing="lg" sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[0], height: 300})}>
            <Button variant="outline">1</Button>
            <Button variant="outline">2</Button>
            <Button variant="outline">3</Button> 
            <Button variant="outline">1</Button>
            <Button variant="outline">2</Button>
            <Button variant="outline">3</Button> 
        </Stack>
    )
}