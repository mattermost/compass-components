import React from 'react';

import Shape from '../../foundations/shape';
import { useDeviceDetect } from '../../shared';
import Grid from '../../utilities/layout';
import Popover from '../../utilities/popover';

import type PMenu from './Menu.props';
import MenuRoot, { MenuGroupLabelRoot, MenuLabelRoot } from './Menu.root';

const Menu = (props: PMenu): JSX.Element => {
    const { trigger, title, width, height, groups, isVisible, ...rest } = props;
    const isMobile = useDeviceDetect();
    const divider = <Shape height="1px" width={'auto'} backgroundColor={'#e0e0e0'} />;

    return (
        <>
            <Popover
                isVisible={isVisible}
                anchorReference={trigger}
                {...rest}
            >
                <MenuRoot width={width} height={height} isMobile={isMobile}>
                    {title && (
                        <>
                            <MenuLabelRoot isMobile={isMobile}>{title}</MenuLabelRoot>
                            {divider}
                        </>
                    )}
                    {groups.map(
                        (group): React.ReactElement => (
                            <Grid flex={1} alignItems={'center'}>
                                {group.title && <MenuGroupLabelRoot isMobile={isMobile} color={'secondary'}>{group.title}</MenuGroupLabelRoot>}
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
