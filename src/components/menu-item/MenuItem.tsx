import React from 'react';
import type { ForwardedRef } from 'react';

import Grid from '../../utilities/layout';
import Spacing from '../../utilities/spacing';

import type PMenuItem from './MenuItem.props';
import MenuItemRoot, { MenuItemLabelRoot, MenuItemDescriptionRoot } from './MenuItem.root';

const MenuItem = React.forwardRef(
    (
        {
            label,
            description,
            inlineDescription = false,
            destructive = false,
            disabled = false,
            leadingElement,
            trailingElementLabel,
            trailingElement,
            ...rest
        }: PMenuItem,
        reference: ForwardedRef<HTMLButtonElement>
    ): JSX.Element => {
        const rootProperties = {
            destructive,
            disabled,
        };

        return (
            <MenuItemRoot ref={reference} {...rootProperties} {...rest}>
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
