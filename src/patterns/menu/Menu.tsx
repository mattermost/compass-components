import React from 'react';

import Shape from '../../foundations/shape';
import Grid from '../../utilities/layout';
import Popover from '../../utilities/popover';

import type PMenu from './Menu.props';
import MenuRoot, {MenuGroupLabelRoot, MenuLabelRoot} from './Menu.root';

const Menu = (props: PMenu): JSX.Element => {
    const {
        renderTrigger = true,
        trigger,
        title,
        width,
        height,
        groups,
        hasSubmenu,
        isVisible,
        ...rest
    } = props;
    const divider = <Shape height="1px" width={'auto'} backgroundColor={'#e0e0e0'}></Shape>;
    return (
        <>
            {renderTrigger && trigger.element}
            <Popover
                isVisible={isVisible}
                anchorReference={trigger.ref}
                onClickAway={(): void => {}}
                {...rest}
            >
                <MenuRoot width={width} height={height}>
                    {title && (<><MenuLabelRoot>{title}</MenuLabelRoot>
                    {divider}</>
                    )}
                    {groups.map(
                        (group): React.ReactElement => (
                            <Grid flex={1} alignItems={'center'}>
                                {group.title && <MenuGroupLabelRoot>{group.title}</MenuGroupLabelRoot>}
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
