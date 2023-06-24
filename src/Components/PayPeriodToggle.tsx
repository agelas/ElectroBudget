import { Group, ActionIcon } from "@mantine/core";
import { ChevronsLeft, ChevronsRight } from "tabler-icons-react";

// TODO: Decide if colors need to change on this

export default function PayPeriodToggle() {
    return (
        <Group position='center' spacing='lg'>
            <ActionIcon>
                <ChevronsLeft size={24} />
            </ActionIcon>
            <ActionIcon>
                <ChevronsRight size={24} />
            </ActionIcon>
        </Group>
    );
}
