import React from 'react';
import clsx from 'clsx';

import Icon from '../icon';
import Text from '../text';

import StyledIconButton from './IconButton.styles';
import { PIconButton } from './IconButton.props';
import {
    DEFAULT_ICON_BUTTON_SIZE,
    ICON_BUTTON_TEXT_SIZES,
    ICON_BUTTON_ICON_SIZES,
} from './IconButton.constants';

const IconButton: React.FC<PIconButton> = ({
    ariaLabel,
    className,
    destructive,
    disabled,
    iconGlyph,
    inverted,
    label,
    size = DEFAULT_ICON_BUTTON_SIZE,
    toggled,
}): JSX.Element => {
    const buttonIcon =
        iconGlyph === 'none' ? null : (
            <Icon
                className="IconButton_icon"
                glyph={iconGlyph}
                size={ICON_BUTTON_ICON_SIZES[size]}
            />
        );

    const buttonLabel = label ? (
        <Text
            className="IconButton_label"
            size={ICON_BUTTON_TEXT_SIZES[size]}
            weight="bold"
            margin="none"
            element="span"
        >
            {label}
        </Text>
    ) : null;

    return (
        <StyledIconButton
            aria-label={ariaLabel}
            className={clsx(className, 'IconButton')}
            disabled={disabled}
            data-destructive={destructive}
            data-size={size}
            data-toggled={toggled}
            data-inverted={inverted}
        >
            {buttonIcon}
            {buttonLabel}
        </StyledIconButton>
    );
};

export default IconButton;
