import styled from 'styled-components';

import ButtonBase from './Button.base';
import {
    DEFAULT_BUTTON_SIZE,
    DEFAULT_BUTTON_VARIANT,
    DEFAULT_BUTTON_WIDTH,
} from './Button.constants';
import { PButton, PButtonBase } from './Button.props';

const handleProperties = ({
    disabled = false,
    destructive = false,
    variant = DEFAULT_BUTTON_VARIANT,
    size = DEFAULT_BUTTON_SIZE,
    width = DEFAULT_BUTTON_WIDTH,
    ...rest
}: PButton): PButtonBase => {
    const baseProperties: PButtonBase = {
        size,
        width,
        'data-variant': variant,
        ...rest,
    };

    if (size && size !== DEFAULT_BUTTON_SIZE) {
        baseProperties['data-size'] = size;
    }

    if (destructive) {
        baseProperties['data-destructive'] = destructive;
    }

    if (disabled) {
        baseProperties.disabled = disabled;
    }

    return baseProperties;
};

const Button = styled(ButtonBase).attrs(handleProperties)<PButton>`
    // define local variables
    --button-bg: var(--primary-color-main);
    --button-bg-hover: linear-gradient(
        rgba(var(--action-color-hover), 0.08),
        rgba(var(--action-color-hover), 0.08)
    );
    --button-bg-active: linear-gradient(
        rgba(var(--action-color-active), 0.16),
        rgba(var(--action-color-active), 0.16)
    );

    --button-border: var(--primary-color-main);
    --button-text-color: var(--contrast-text-color);

    --button-icon-margin: 7px;

    &[data-size='small'] {
        --button-icon-margin: 5px;
    }

    &[data-size='large'] {
        --button-icon-margin: 8px;
    }

    // destructive button
    &[data-destructive] {
        --button-bg: var(--alert-color-main);
    }

    // disabled button
    &[disabled] {
        --button-bg: var(--action-color-disabled);
    }

    &[data-variant='secondary'] {
        --button-bg: transparent;
        --button-bg-hover: var();
    }

    background: var(--button-bg);
    color: var(--button-text-color);

    line-height: 16px;

    &:not([disabled]) {
        &:hover {
            background-image: var(--button-bg-hover);
        }

        &:active {
            background-image: var(--button-bg-active);
        }

        &:focus {
            box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.32), inset 0 0 0 2px var(--button-bg);
        }
    }

    i {
        &:first-child {
            margin-right: var(--button-icon-margin);
        }
        &:last-child {
            margin-left: var(--button-icon-margin);
        }
    }
`;

export default Button;
