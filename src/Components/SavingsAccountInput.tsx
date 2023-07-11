import { TextInput, NumberInput, Group, Button, Box } from "@mantine/core";
import { useForm } from "@mantine/form";

export function SavingsAccountForm() {
    const form = useForm({
        initialValues: {
            accountName: "",
            accountType: "",
            goal: 0,
            currentValue: 0,
        },
    });

    return (
        <Box mx='auto'>
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
