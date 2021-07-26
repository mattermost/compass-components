import styled, { css } from 'styled-components';

import { Utils } from '../../shared';
import { parseSpacing } from '../spacing';

import { PFlexRoot } from './Flex.props';

const FlexRoot = styled.div.withConfig<PFlexRoot>({
    shouldForwardProp: (property, validator) =>
        Utils.blockProperty(property, [
            'flex',
            'wrap',
            'row',
            'padding',
            'margin',
            'width',
            'height',
        ]) && validator(property),
})(
    ({ flex, wrap, row, justify, alignment, padding, margin, width, height }: PFlexRoot) => css`
        display: flex;
        flex: ${flex};
        flex-wrap: ${wrap ? 'wrap' : 'nowrap'};
        flex-direction: ${row ? 'row' : 'column'};
        align-items: ${alignment};
        justify-content: ${justify};
        padding: ${padding ? parseSpacing(padding) : '0'};
        margin: ${margin ? parseSpacing(margin) : '0'};
        ${(Utils.isNumber(width) || Utils.isString(width)) &&
        css`
            max-width: ${Utils.getPxValue(width)};
        `}
        ${(Utils.isNumber(height) || Utils.isString(height)) &&
        css`
            max-height: ${Utils.getPxValue(height)};
        `}
    `
);

export default FlexRoot;
