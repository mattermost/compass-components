import React, { useRef, useState } from 'react';
import { usePopper } from 'react-popper';

import { useClickAway } from '../../shared';
import Text from '../../components/text/Text';
import IconButton from '../../components/icon-button';

import type PBottomSheets from './BottomSheets.props';
import BottomSheetsRoot, { BottomSheetRoot } from './BottomSheets.root';
import type { PBottomSheetRoot } from './BottomSheets.props';

const BottomSheets = ({
    items,
    triggerReference,
    onClickAway,
    open,
}: PBottomSheets): JSX.Element | null => {
    const [active, setActive] = useState<boolean>(false);
    const handleToggle = (): void => setActive(!active);

    const bottomSheetsReference = useRef(null);

    useClickAway([bottomSheetsReference, triggerReference], onClickAway);

    usePopper(triggerReference.current, bottomSheetsReference.current, {
        placement: 'bottom-start',
        modifiers: [
            {
                name: 'offset',
                options: {
                    offset: [0, 4],
                },
            },
            {
                name: 'menuSizer',
                enabled: true,
                phase: 'write',
            },
            {
                name: 'computeStyles',
                options: {
                    gpuAcceleration: false,
                },
            },
        ],
    });

    return (
        <BottomSheetsRoot ref={bottomSheetsReference} open={open}>
            {items?.map((item: PBottomSheetRoot, index: number) => {
                const key = `${item.title}_${index}`;

                return (
                    <BottomSheetRoot key={key} active={active} onClick={handleToggle}>
                        {item.button && <IconButton onClick={handleToggle} icon={item.button} />}
                        {item.title && <Text>{item.title}</Text>}
                        {item.children}
                    </BottomSheetRoot>
                );
            })}
        </BottomSheetsRoot>
    );
};

export default BottomSheets;
