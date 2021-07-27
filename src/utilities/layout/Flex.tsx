import React from 'react';

import { Utils } from '../../shared';

import {
    DEFAULT_FLEX_ALIGNMENT,
    DEFAULT_FLEX_COMPONENT,
    DEFAULT_FLEX_FLEX,
    DEFAULT_FLEX_JUSTIFY,
    DEFAULT_FLEX_ROW,
    DEFAULT_FLEX_WRAP,
    FLEX_ALIGNMENTS,
    FLEX_ELEMENTS,
    FLEX_JUSTIFIES,
} from './Flex.constants';
import PFlex from './Flex.props';
import FlexRoot from './Flex.root';

const Flex = function <T>({
    element = DEFAULT_FLEX_COMPONENT,
    alignment = DEFAULT_FLEX_ALIGNMENT,
    justify = DEFAULT_FLEX_JUSTIFY,
    flex = DEFAULT_FLEX_FLEX,
    row = DEFAULT_FLEX_ROW,
    wrap = DEFAULT_FLEX_WRAP,
    ...rest
}: PFlex & T): JSX.Element {
    Utils.assert(
        FLEX_ALIGNMENTS.includes(alignment),
        `Compass Components - Flex: incompatible alignment property (${alignment}) set on Flex component. Please choose from the following: ${FLEX_ALIGNMENTS.join(
            ', '
        )}`
    );

    Utils.assert(
        FLEX_JUSTIFIES.includes(justify),
        `Compass Components - Flex: incompatible justify property (${justify}) set on Flex component. Please choose from the following: ${FLEX_JUSTIFIES.join(
            ', '
        )}`
    );

    Utils.assert(
        FLEX_ELEMENTS.includes(element) || Utils.isFunctionalComponent(element),
        `Compass Components - Flex: incompatible element property (${element}) used in Flex component. Please choose from the following: ${FLEX_ELEMENTS.join(
            ', '
        )}`
    );

    const rootProperties = {
        alignment,
        justify,
        flex,
        row,
        wrap,
        ...rest,
    };

    return <FlexRoot {...rootProperties} as={element} />;
};

export default Flex;
