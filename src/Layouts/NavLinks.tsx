import React from 'react';
import { Coin, Coffee, SmartHome, Settings, BrandGithub } from 'tabler-icons-react';
import { ThemeIcon, UnstyledButton, Group, Text } from '@mantine/core';

export interface MainLinksProps {
    setterFunction: React.Dispatch<any>;
}

interface MainLinkProps {
    icon: React.ReactNode;
    color: string;
    label: string;
    dispatcher: React.Dispatch<any>;
}

interface OtherLinkProps {
    icon: React.ReactNode;
    color: string;
    label: string;
}

function MainLink({ icon, color, label, dispatcher }: MainLinkProps) {
    return (
        <UnstyledButton
            sx={(theme) => ({
                display: 'block',
                width: '100%',
                padding: theme.spacing.xs,
                borderRadius: theme.radius.sm,
                color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

                '&:hover': {
                    backgroundColor:
                        theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                },
            })}
            onClick={() => { dispatcher(label) }}
        >
            <Group>
                <ThemeIcon color={color} variant="light">
                    {icon}
                </ThemeIcon>
                <Text size="sm">{label}</Text>
            </Group>
        </UnstyledButton>
    );
}

function OtherLink({ icon, color, label }: OtherLinkProps) {
    return (
        <UnstyledButton
            sx={(theme) => ({
                display: 'block',
                width: '100%',
                padding: theme.spacing.xs,
                borderRadius: theme.radius.sm,
                color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

                '&:hover': {
                    backgroundColor:
                        theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                },
            })}
        >
            <Group>
                <ThemeIcon color={color} variant="light">
                    {icon}
                </ThemeIcon>
                <Text size="sm">{label}</Text>
            </Group>
        </UnstyledButton>
    );
}

const primaryData = [
    { icon: <Coffee size={16} />, color: 'blue', label: 'Non-Essentials' },
    { icon: <SmartHome size={16} />, color: 'teal', label: 'Essentials' },
    { icon: <Coin size={16} />, color: 'violet', label: 'Savings' },
];

const secondaryData = [
    { icon: <Settings size={16} />, color: 'grape', label: 'Settings', onClick: (e: { preventDefault: () => void; }) => { e.preventDefault(); window.location.href = "/" } },
    { icon: <BrandGithub size={16} />, color: '#2d5e86', label: 'Code', onClick: (e: { preventDefault: () => void; }) => { e.preventDefault(); window.location.href = "https://github.com/agelas/FinDash" } },
]

export function MainLinks(props: MainLinksProps) {
    const links = primaryData.map((link) => <MainLink {...link} dispatcher={props.setterFunction} key={link.label} />);
    return <div>{links}</div>
}

export function OtherLinks() {
    const links = secondaryData.map((link) => <OtherLink {...link} key={link.label} />);
    return <div>{links}</div>
}