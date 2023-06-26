import { Group, ActionIcon } from "@mantine/core";
import { useContext } from "react";
import { ChevronsLeft, ChevronsRight } from "tabler-icons-react";
import { PayContext } from "../Utils/PayContext";

// TODO: Decide if colors need to change on this

export default function PayPeriodToggle() {
    const context = useContext(PayContext);

    if (!context) {
        throw new Error("PayPeriodToggle must be used within a PayContent");
    }

    const { payCheckOffset, setPayCheckOffset } = context;

    const incrementOffset = () => {
        setPayCheckOffset(payCheckOffset + 1);
    };

    const decrementOffset = () => {
        if (payCheckOffset > 0) {
            setPayCheckOffset(payCheckOffset - 1);
        }
    };

    return (
        <Group position='center' spacing='lg'>
            <ActionIcon onClick={incrementOffset}>
                <ChevronsLeft size={24} />
            </ActionIcon>
            <ActionIcon onClick={decrementOffset}>
                <ChevronsRight size={24} />
            </ActionIcon>
        </Group>
    );
}
