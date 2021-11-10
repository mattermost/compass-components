import React from 'react';

import Shape from '../../foundations/shape';
import { useDeviceDetect } from '../../shared';
import Grid from '../../utilities/layout';
import Popover from '../../utilities/popover';

import type PMenu from './Menu.props';
import MenuRoot, { MenuLabelRoot } from './Menu.root';

const Menu = (props: PMenu): JSX.Element => {
    const { trigger, title, width, height, groups, hasSubmenu: ignore, isVisible, ...rest } = props;
    const isMobile = useDeviceDetect();
    const divider = <Shape height="1px" width={'auto'} backgroundColor={'#e0e0e0'} />;

    return (
        <>
            <Popover
                isVisible={isVisible}
                anchorReference={trigger}
                onClickAway={(): void => {}}
                {...rest}
            >
                <MenuRoot width={width} height={height} isMobile={isMobile}>
                    {title && (
                        <>
                            <MenuLabelRoot>{title}</MenuLabelRoot>
                            {divider}
                        </>
                    )}
                    {groups.map(
                        (group): React.ReactElement => (
                            <Grid flex={1} alignItems={'center'}>
                                {group.title && <MenuLabelRoot>{group.title}</MenuLabelRoot>}
                                {group.menuItems}
                                {groups.length > 1 && divider}
                            </Grid>
                        )
                    )}
                </MenuRoot>
            </Popover>
        </>
    );
};

export default Menu;
