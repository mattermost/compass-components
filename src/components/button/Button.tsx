import React from 'react';

import { Utils } from '../../shared';

import {
    BUTTON_SIZE_MAP,
    BUTTON_SIZES,
    BUTTON_VARIANTS,
    DEFAULT_BUTTON_ICON_POSITION,
    DEFAULT_BUTTON_SIZE,
    DEFAULT_BUTTON_VARIANT,
    DEFAULT_BUTTON_WIDTH,
} from './Button.constants';
import type PButton from './Button.props';
import ButtonRoot, { ButtonIconRoot } from './Button.root';

const Button: React.FC<PButton> = (props: PButton) => {
    const {
        label,
        onClick,
        icon,
        iconPosition = DEFAULT_BUTTON_ICON_POSITION,
        size = DEFAULT_BUTTON_SIZE,
        variant = DEFAULT_BUTTON_VARIANT,
        width = DEFAULT_BUTTON_WIDTH,
        active = false,
        destructive = false,
        inverted = false,
        disabled = false,
        ...rest
    } = props;

    Utils.assert(
        BUTTON_VARIANTS.includes(variant),
        `Button: The Button component was used with an invalid 'variant' property. Please choose from the following options: ${BUTTON_VARIANTS.join(
            ', '
        )}`,
        true
    );

    Utils.assert(
        BUTTON_SIZES.includes(size),
        `Button: The Button component was used with an invalid 'size' property. Please choose from the following options: ${BUTTON_SIZES.join(
            ', '
        )}`,
        true
    );

    return (
        <ButtonRoot
            disabled={disabled}
            width={width}
            active={active}
            destructive={destructive}
            inverted={inverted}
            size={size}
            variant={variant}
            onClick={onClick}
            {...rest}
        >
            {icon && iconPosition === 'start' && (
                <ButtonIconRoot
                    glyph={icon}
                    size={BUTTON_SIZE_MAP[size].iconSize}
                    margin={BUTTON_SIZE_MAP[size].iconMargin}
                    marginPosition={'right'}
                />
            )}
            {label}
            {icon && iconPosition === 'end' && (
                <ButtonIconRoot
                    glyph={icon}
                    size={BUTTON_SIZE_MAP[size].iconSize}
                    margin={BUTTON_SIZE_MAP[size].iconMargin}
                    marginPosition={'left'}
                />
            )}
        </ButtonRoot>
    );
};

export default Button;
