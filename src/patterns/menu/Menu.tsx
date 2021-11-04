import React from 'react';

import Text from '../../components/text';
import Shape from '../../foundations/shape';
import Grid from '../../utilities/layout';
import Popover from '../../utilities/popover';

import type PMenu from './Menu.props';

const Menu = ({
    trigger,
    renderTrigger = true,
    title,
    width,
    container,
    groups,
    placement,
    offset,
    hasSubmenu,
    isVisible,
    ...rest
}: PMenu): JSX.Element => {
    const divider = <Shape height="1px" width={'auto'} backgroundColor={'#e0e0e0'}></Shape>;
    return (
        <>
            {renderTrigger && trigger.element}
            <Popover
                isVisible={isVisible}
                anchorReference={trigger.ref}
                placement={placement}
                offset={offset}
                onClickAway={(): void => {}}
                {...rest}
            >
                <Shape element={container} width={width} elevation={hasSubmenu ? 5 : 4} radius={8}>
                    <Grid flex={1} justifyItems={'left'} alignItems={'center'}>
                        {title && <Text color="primary">{title}</Text>}
                        {groups.map(
                            (group): React.ReactElement => (
                                <Grid flex={1} alignItems={'center'}>
                                    {group.title && <Text color="secondary">{group.title}</Text>}
                                    {group.menuItems}
                                    {groups.length > 1 && divider}
                                </Grid>
                            )
                        )}
                    </Grid>
                </Shape>
            </Popover>
        </>
    );
};

export default Menu;
