import React from 'react';
import clsx from 'clsx';

import Icon, { TIconSize } from '../../foundations/icon';
import Text, { TTextSize } from '../text';

import StyledIconButton from './IconButton.styles';
import { PIconButton } from './IconButton.props';

const IconButton: React.FC<PIconButton> = ({
    className,
    size,
    label,
    iconGlyph,
    destructive,
    disabled,
}): JSX.Element => {
    let textSize: TTextSize = 200;
    let iconSize: TIconSize = 20;

    switch (size) {
        case 'xsmall':
            textSize = 75;
            iconSize = 12;
            break;
        case 'small-compact':
        case 'small':
            textSize = 100;
            iconSize = 16;
            break;
        case 'large':
            textSize = 300;
            iconSize = 28;
            break;
        case 'standard':
        default:
            textSize = 200;
            iconSize = 20;
    }

    const buttonLabel = label ? (
        <Text className="IconButton_label" size={textSize} weight="bold">
            {label}
        </Text>
    ) : null;

    const buttonIcon =
        iconGlyph === 'none' ? null : (
            <Icon className="IconButton_icon" glyph={iconGlyph} size={iconSize} />
        );

    return (
        <StyledIconButton
            className={clsx(className, 'IconButton')}
            data-size={size}
            disabled={disabled}
            data-destructive={destructive}
        >
            {buttonIcon}
            {buttonLabel}
        </StyledIconButton>
    );
};

export default IconButton;
