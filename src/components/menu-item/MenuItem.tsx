import React from 'react';
import type { ForwardedRef } from 'react';

import Grid from '../../utilities/layout';
import Spacing from '../../utilities/spacing';

import type PMenuItem from './MenuItem.props';
import MenuItemRoot, { MenuItemLabelRoot, MenuItemDescriptionRoot } from './MenuItem.root';

const MenuItem = React.forwardRef(
    (props: PMenuItem, reference: ForwardedRef<null>): JSX.Element => {
        const {
            label,
            description,
            inlineDescription = false,
            destructive = false,
            disabled = false,
            leadingElement,
            trailingElementLabel,
            trailingElement,
            onClick,
            onHover,
        } = props;

        const rootProperties = {
            onMouseEnter: onHover,
            onClick,
            destructive,
            disabled,
        };

        return (
            <MenuItemRoot {...rootProperties} ref={reference}>
                {leadingElement}
                <Grid
                    flex={1}
                    row={inlineDescription}
                    alignItems={inlineDescription ? 'center' : 'initial'}
                    padding={Spacing.only('left', leadingElement ? 125 : 0)}
                >
                    <MenuItemLabelRoot>{label}</MenuItemLabelRoot>
                    {description && (
                        <MenuItemDescriptionRoot withMargin={!inlineDescription}>
                            {description}
                        </MenuItemDescriptionRoot>
                    )}
                </Grid>
                <Grid
                    row
                    alignItems={'center'}
                    justifyItems={'flex-start'}
                    alignSelf={'flex-start'}
                >
                    {trailingElement && trailingElementLabel && (
                        <MenuItemDescriptionRoot>{trailingElementLabel}</MenuItemDescriptionRoot>
                    )}
                    {trailingElement}
                </Grid>
            </MenuItemRoot>
        );
    }
);

export default MenuItem;
