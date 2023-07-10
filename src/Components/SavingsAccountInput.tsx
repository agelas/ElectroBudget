import { TextInput, Group, Button } from "@mantine/core";
import { useForm } from "@mantine/form";

export function SavingsAccountInput() {
    const form = useForm({
        initialValues: {
            accountName: "",
            accountType: "",
            goal: 0,
            currentValue: 0,
        },
    });

    return (
        <>
            <form>
                <TextInput
                    required
                    label='Account Name'
                    placeholder='Wells Fargo/Chase/etc.'
                    {...form.getInputProps("accountName")}
                />
                <TextInput 
                    required
                    label='Account Type'
                    placeholder='Checking/Roth IRA/etc.'
                    {...form.getInputProps("accountType")}
                />
            </form>
        </>
    );
}
