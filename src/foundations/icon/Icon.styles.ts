import styled from 'styled-components';

import { TIconSize } from './Icon.types';
import { PStyledIcon } from './Icon.props';
import { DEFAULT_ICON_SIZE, ICON_SIZES, ICON_FONT_SIZES } from './Icon.constants';

function generateIconFontSizes(
    iconSize: TIconSize,
    iconFontSizes: Record<TIconSize, number>
): string {
    return `
&[data-size="${iconSize}"] {
    width: ${iconSize}px;
    height: ${iconSize}px;

    &::before {
        font-size: ${iconFontSizes[iconSize]}px;
        letter-spacing: ${iconFontSizes[iconSize]}px;
    }
}
    `;
}

const StyledIcon = styled.i<PStyledIcon>`
    &.Icon {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        position: relative;
        padding: 0;
        width: 20px;
        height: 20px;

        &::before {
            margin: 0; // remove margins added by fontello
            font-size: ${ICON_FONT_SIZES[DEFAULT_ICON_SIZE]}px;
            line-height: 1;
            letter-spacing: ${ICON_FONT_SIZES[DEFAULT_ICON_SIZE]}px;
        }

        // sizes
        ${ICON_SIZES.map((iconSize) => generateIconFontSizes(iconSize, ICON_FONT_SIZES))}
        // animation
        .enable-animations & {
            transition: color var(--animation-speed-shorter) 0s ease-in-out;
        }
    }
`;

export default StyledIcon;
