import styled, { css } from 'styled-components';
import type { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components';

import type { TTheme } from '../theme';
import { Utils } from '../../shared';

import type { PBottomSheetsRoot, PBottomSheetRoot } from './BottomSheets.props';

const BottomSheetRoot = styled.div<PBottomSheetRoot>(
    ({ active }) => css`
        width: 100%;
        height: 100%;
        &:first-of-type {
            ${active
                ? `
            transform: translate3d(0, 0, 0);
        `
                : 'transform: translateX(-100%);'}
        }
        &:last-of-type {
            ${active
                ? `
            transform: translate3d(0, 0, 0);
        `
                : 'transform: translateX(100%);'}
        }

        transition: transform 200ms 0ms ease-in-out;
    `
);

const BottomSheetsRoot = styled.div.withConfig<PBottomSheetsRoot>({
    shouldForwardProp: (property, validator) =>
        Utils.blockProperty(property) && validator(property),
})((props: ThemedStyledProps<PBottomSheetsRoot, TTheme>): FlattenSimpleInterpolation => {
    const { open } = props;

    return css`
        background: white;
        position: absolute;
        left: 0;
        bottom: 0;
        padding: 12px 0;
        width: 100%;
        height: auto;
        border-radius: 12px 12px 0 0;
        box-shadow: 0px 6px 14px rgba(0, 0, 0, 0.12);
        visibility: hidden;
        transform: translate3d(0, 100%, 0);
        z-index: 1;
        overflow-y: auto;
        will-change: transform, visibility;

        ${open &&
        `
            transform: translate3d(0, 0, 0);
            visibility: visible;
        `}
    `;
});

export { BottomSheetRoot };

export default BottomSheetsRoot;
