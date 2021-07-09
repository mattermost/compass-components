import styled, { css } from 'styled-components';

import { Utils } from '../../shared';
import { parseSpacing } from '../spacing';

import { PGridRoot } from './Grid.props';

const GridRoot = styled.div.withConfig<PGridRoot>({
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
    ({
        flex,
        wrap,
        row,
        alignItems,
        justifyItems,
        alignSelf,
        justifySelf,
        padding,
        margin,
        width,
        height,
    }: PGridRoot) => css`
        display: flex;
        flex: ${flex};
        flex-wrap: ${wrap ? 'wrap' : 'nowrap'};
        flex-direction: ${row ? 'row' : 'column'};
        align-items: ${alignItems};
        justify-content: ${justifyItems};
        ${alignSelf &&
        css`
            align-self: ${alignSelf};
        `}
        ${justifySelf &&
        css`
            justify-self: ${justifySelf};
        `}
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
        background: transparent;
    `
);

export default GridRoot;
