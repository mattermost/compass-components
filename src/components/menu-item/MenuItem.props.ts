import React from 'react';

type PMenuItem = {
    label: boolean;
    description?: string;
    inlineDescription?: boolean;
    destructive?: boolean;
    disabled?: boolean;
    leadingElement?: React.ReactElement | null;
    trailingElement?: React.ReactElement | null;
    trailingElementLabel?: string | null;
    onClick?: React.MouseEventHandler<HTMLElement>;
    className?: string;
};

type PMenuItemRoot = Required<Pick<PMenuItem, 'destructive' | 'disabled'>>;

type PMenuItemTextRoot = { withMargin?: boolean };

export type { PMenuItemRoot, PMenuItemTextRoot };

export default PMenuItem;
