import React from 'react';
import { SimpleGrid, Paper, Space } from '@mantine/core';
import NonessntialGraphs from './NonessentialGraphs';

export default function NonessentialInfo() {
    return (
        <>
        <SimpleGrid
            cols={4}
            spacing={12}
            breakpoints={[
                { maxWidth: 'md', cols: 4, spacing: 'md' },
                { maxWidth: 'sm', cols: 2, spacing: 'sm' }
            ]}
        >
            <Paper radius="md" p="md"
                sx={(theme) => ({
                    backgroundColor: theme.colors.pink[4]
                })}
            > 1 </Paper>
            <Paper radius="md" p="md"
                sx={(theme) => ({
                    backgroundColor: theme.colors.violet[4]
                })}
            > 2 </Paper>
            <Paper radius="md" p="md"
                sx={(theme) => ({
                    backgroundColor: theme.colors.cyan[4]
                })}
            > 3 </Paper>
            <Paper radius="md" p="md"
                sx={(theme) => ({
                    backgroundColor: theme.colors.teal[4]
                })}
            > 4 </Paper>
        </SimpleGrid>
        <Space h="xl" />
        <NonessntialGraphs />
        </>
    )
}
