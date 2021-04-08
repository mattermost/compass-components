import styled from 'styled-components';

import ButtonBase from './Button.base';
import { PButton, PButtonBase } from './Button.props';

const handleProperties = ({
    disabled = false,
    destructive = false,
    variant = 'primary',
    size = 'medium',
    width = 'dynamic',
    ...rest
}: PButton): PButtonBase => {
    const baseProperties: PButtonBase = {
        size,
        width,
        'data-variant': variant,
        ...rest,
    };

    if (destructive) {
        baseProperties['data-destructive'] = destructive;
    }

    if (disabled) {
        baseProperties.disabled = disabled;
    }

    return baseProperties;
};

const Button = styled(ButtonBase).attrs(handleProperties)<PButton>`
    --button-bg: var(--primary-color-main);
    --button-bg-hover: linear-gradient(rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.08));
    --button-bg-active: linear-gradient(rgba(0, 0, 0, 0.16), rgba(0, 0, 0, 0.16));
    --button-text-color: var(--contrast-text-color);

    &[data-destructive] {
        --button-bg: var(--alert-color-main);
    }

    &[disabled] {
        --button-bg: var(--disabled-color-main);
    }

    background: var(--button-bg);
    color: var(--button-text-color);

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
`;

export default Button;
