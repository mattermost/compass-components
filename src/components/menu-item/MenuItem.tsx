import React from 'react';

import Grid from '../../utilities/layout';
import Spacing from '../../utilities/spacing';

import PMenuItem from './MenuItem.props';
import MenuItemRoot, { MenuItemLabelRoot, MenuItemDescriptionRoot } from './MenuItem.root';

const MenuItem = ({
    label,
    description,
    destructive = false,
    leadingElement = null,
    trailingElementLabel = null,
    trailingElement = null,
}: PMenuItem): JSX.Element => {
    const rootProperties = {
        destructive,
    };

    return (
        <MenuItemRoot {...rootProperties}>
            {leadingElement}
            <Grid flex={1} padding={Spacing.only('left', leadingElement ? 125 : 0)}>
                <MenuItemLabelRoot>{label}</MenuItemLabelRoot>
                {description && <MenuItemDescriptionRoot>{description}</MenuItemDescriptionRoot>}
            </Grid>
            <Grid row alignment={'center'}>
                {trailingElement && trailingElementLabel && (
                    <MenuItemDescriptionRoot>{trailingElementLabel}</MenuItemDescriptionRoot>
                )}
                {trailingElement}
            </Grid>
        </MenuItemRoot>
    );
};

export default MenuItem;
