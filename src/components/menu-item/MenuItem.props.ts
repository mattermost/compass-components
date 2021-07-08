import React from 'react';

type PMenuItem = {
    label: boolean;
    description?: string;
    destructive?: boolean;
    leadingElement?: React.ReactElement | null;
    trailingElement?: React.ReactElement | null;
    trailingElementLabel?: string | null;
    onClick?: React.MouseEventHandler<HTMLElement>;
    className?: string;
};

type PMenuItemRoot = Required<Pick<PMenuItem, 'destructive'>>;

type PMenuItemTextRoot = {};

export type { PMenuItemRoot, PMenuItemTextRoot };

export default PMenuItem;
