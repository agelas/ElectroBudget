import { TextInput, NumberInput, Group, Button, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import { ISavingsForm, ISavingsPanelProps } from "../Utils/Interfaces";

export function SavingsAccountForm({ addAccountFunction }: ISavingsForm) {
    const form = useForm({
        initialValues: {
            accountName: "",
            accountType: "",
            goal: 0,
            currentValue: 0,
        },
    });

    const handleSubmit = (values: typeof form.values) => {
        const newAccount: ISavingsPanelProps = {
            accountHolder: values.accountName,
            accountType: values.accountType,
            goal: values.goal,
            currentValue: values.currentValue,
        };
        addAccountFunction(newAccount);
    };

    return (
        <Box mx='auto'>
            <form onSubmit={form.onSubmit(handleSubmit)}>
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
                <NumberInput mt='sm' label='Goal' placeholder='Goal' {...form.getInputProps("goal")} />
                <NumberInput
                    mt='sm'
                    label='Current Value'
                    placeholder='Current Value'
                    {...form.getInputProps("currentValue")}
                />
                <Group position='center' mt='md'>
                    <Button type='submit'>Submit</Button>
                </Group>
            </form>
        </Box>
    );
}
