import React from 'react';

import Text from '../../components/text';
import Shape from '../../foundations/shape';
import Grid from '../../utilities/layout';
import Popover from '../../utilities/popover';
import Spacing from '../../utilities/spacing';

import type PMenu from './Menu.props';

const Menu = (props: PMenu): JSX.Element => {
    const {
        renderTrigger = true,
        trigger,
        title,
        width,
        container,
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
                <Shape element={container} width={width} elevation={hasSubmenu ? 5 : 4} radius={8}>
                    <Grid flex={1} justifyItems={'left'} alignItems={'center'}>
                        {title && <Grid
                                    flex={1}
                                    row
                                    alignItems={'initial'}
                                    padding={Spacing.only('left', 150)}
                                >
                                    <Text color="primary">{title}</Text>
                                </Grid>}
                        {groups.map(
                            (group): React.ReactElement => (
                                <Grid flex={1} alignItems={'center'}>
                                    {group.title && <Grid
                                    flex={1}
                                    row
                                    alignItems={'initial'}
                                    padding={Spacing.only('left', 150)}
                                >
                                    <Text color="secondary">{group.title}</Text>
                                </Grid>}
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
