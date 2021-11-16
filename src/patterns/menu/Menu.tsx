import React, { useRef, useState } from 'react';
import type { MutableRefObject } from 'react';
import type { Property } from 'csstype';
import { css } from 'styled-components';

import MenuItem from '../../components/menu-item';
import type PMenuItem from '../../components/menu-item/MenuItem.props';
import Icon from '../../foundations/icon';
import Shape from '../../foundations/shape';
import Popover from '../../utilities/popover';
import type { TonClickAwayCallback } from '../../shared';
import Grid from '../../utilities/grid';

import MenuRoot, { MenuLabelRoot } from './Menu.root';

type MenuData = {
    items?: MenuData[];
    url?: string;
} & PMenuItem;

type Properties = {
    title: string;
    trigger: MutableRefObject<null>;
    isVisible: boolean;
    isMobile: boolean;
    data: MenuData;
    onClickAway: TonClickAwayCallback;
};

type SubProperties = {
    data: MenuData;
    isMobile: boolean;
};

const menuTransitions = {
    mainMenu: {
        properties: ['transform'],
        entering: css`
            transform: translate3d(0, 0, 0);
        `,
        entered: css`
            transform: translate3d(0, 0, 0);
        `,
        exiting: css`
            transform: translate3d(0, 150%, 0);
        `,
        exited: css`
            transform: translate3d(0, 150%, 0);
        `,
        unmounted: css`
            transform: translate3d(0, 150%, 0);
        `,
    },
    subMenu: {
        properties: ['transform'],
        entering: css`
            transform: translate3d(0, 0, 0);
        `,
        entered: css`
            transform: translate3d(0, 0, 0);
        `,
        exiting: css`
            transform: translate3d(100%, 0, 0);
        `,
        exited: css`
            transform: translate3d(100%, 0, 0);
        `,
        unmounted: css`
            transform: translate3d(100%, 0, 0);
        `,
    },
};

const Divider = (): JSX.Element => (
    <Shape height="1px" width={'auto'} backgroundColor={'#e0e0e0'} />
);

const mobileMenuStyles = {
    position: 'fixed' as Property.Position,
    bottom: 0,
    left: 0,
    right: 0,
    height: '356px',
};

const SubMenu = (props: SubProperties): JSX.Element => {
    const subMenuTrigger = useRef(null);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const { data, isMobile } = props;

    const handleToggle = (): void => setIsVisible(!isVisible);

    return (
        <>
            <MenuItem
                label={data.label}
                ref={subMenuTrigger}
                leadingElement={data.leadingElement}
                trailingElement={<Icon glyph={'chevron-right'} />}
                onClick={isMobile ? handleToggle : undefined}
                onHover={isMobile ? undefined : handleToggle}
            />
            <Popover
                anchorReference={subMenuTrigger}
                isVisible={isVisible}
                zIndex={1000}
                placement={isMobile ? undefined : 'right'}
                styles={isMobile ? mobileMenuStyles : undefined}
                customTransition={isMobile ? menuTransitions.subMenu : undefined}
            >
                <MenuRoot isMobile={isMobile}>
                    {data.label && isMobile && (
                        <>
                            <Grid
                                columnsTemplate={'auto 1fr'}
                                placeItems={'center'}
                                onClick={handleToggle}
                            >
                                <Icon glyph="chevron-left" />
                                <MenuLabelRoot isMobile={isMobile}>{data.label}</MenuLabelRoot>
                            </Grid>
                            <Divider />
                        </>
                    )}
                    {data.items?.map((item, index) => {
                        const key = `${item.label}_${index}`;

                        if (item.items && item.items.length > 0) {
                            return <SubMenu key={key} data={item} isMobile={isMobile} />;
                        }

                        return (
                            <MenuItem
                                key={key}
                                label={item.label}
                                leadingElement={item.leadingElement}
                                trailingElement={item.trailingElement}
                            />
                        );
                    })}
                </MenuRoot>
            </Popover>
        </>
    );
};

const Menu = (props: Properties): JSX.Element => {
    const { title, trigger, isVisible, data, onClickAway, isMobile } = props;

    return (
        <Popover
            anchorReference={trigger}
            isVisible={isVisible}
            onClickAway={onClickAway}
            styles={isMobile ? mobileMenuStyles : undefined}
            customTransition={isMobile ? menuTransitions.mainMenu : undefined}
        >
            <MenuRoot isMobile={isMobile}>
                {title && (
                    <>
                        <MenuLabelRoot isMobile={isMobile}>{title}</MenuLabelRoot>
                        <Divider />
                    </>
                )}
                {data.items?.map((item, index) => {
                    const key = `${item.label}_${index}`;

                    if (item.items && item.items.length > 0) {
                        return <SubMenu key={key} data={item} isMobile={isMobile} />;
                    }

                    return (
                        <MenuItem
                            key={key}
                            label={item.label}
                            leadingElement={item.leadingElement}
                            trailingElement={item.trailingElement}
                        />
                    );
                })}
            </MenuRoot>
        </Popover>
    );
};

export default Menu;
