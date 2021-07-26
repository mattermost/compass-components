import React, { ForwardedRef } from 'react';

import Icon from '../../foundations/icon';
import { Utils } from '../../shared';

import {
    DEFAULT_ICON_BUTTON_ELEMENT,
    DEFAULT_ICON_BUTTON_SIZE,
    ICON_BUTTON_DEFINITIONS,
} from './IconButton.constants';
import PIconButton from './IconButton.props';
import IconButtonRoot from './IconButton.root';

/**
 * we need to pass it into `React.forwardRef`, since functional components do
 * not allow refs to be passed on in any other way.
 *
 * This is needed for some components to hold a reference to the `parent`- or
 * `trigger`-component (such as in the `Popover` component)
 */
const IconButton = React.forwardRef(
    (
        {
            icon,
            element = DEFAULT_ICON_BUTTON_ELEMENT,
            size = DEFAULT_ICON_BUTTON_SIZE,
            compact = false,
            inverted = false,
            toggled = false,
            destructive = false,
            disabled = false,
            label,
            onClick,
            ...rest
        }: PIconButton,
        reference: ForwardedRef<HTMLButtonElement>
    ): JSX.Element => {
        Utils.assert(
            (!destructive && !toggled) || (destructive && !toggled) || (toggled && !destructive),
            'IconButton: component was used with both `destructive` and `toggled` properties set to true. Please use only one of the options',
            true
        );

        const isDisabled = disabled || !Utils.isFunction(onClick);

        const rootProperties = {
            size,
            compact,
            inverted,
            toggled,
            destructive,
            disabled: isDisabled,
            onClick,
        };

        return (
            <IconButtonRoot ref={reference} as={element} {...rootProperties} {...rest}>
                <Icon glyph={icon} size={ICON_BUTTON_DEFINITIONS[size].iconSize} />
                {label && <span>{label}</span>}
            </IconButtonRoot>
        );
    }
);

export default IconButton;
