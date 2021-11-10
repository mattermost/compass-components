import type { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components';
import styled, { css } from 'styled-components';

import Spacing, { applyMargin, applyPadding } from '../../utilities/spacing';
import type { TTheme } from '../../utilities/theme';
import { applyShape } from '../../foundations/shape';
import Text, { applyTextColor, applyTextMargin, applyTextStyles } from '../../components/text';

import type { PMenuRoot } from './Menu.props';
import { useDeviceDetect } from '../../shared';

const isMobile = useDeviceDetect();

const MenuLabelRoot = styled(Text)(
    (): FlattenSimpleInterpolation => css`
        ${applyTextStyles({ size: 100, weight: 'bold'})};
        ${applyTextMargin({ margin: 'none' })};
        ${applyPadding(Spacing.symmetric({ vertical: 75, horizontal: 200 }))};
    `
);

const MenuRoot = styled.div<PMenuRoot>(
    ({
        width,
        height,
        theme: { background },
    }: ThemedStyledProps<PMenuRoot, TTheme>): FlattenSimpleInterpolation => {

        return css`
            background-color: ${background.shape};

            ${applyShape({
                width,
                height: isMobile ? '356px' : height,
                radius: 8,
            })};

            transition: background 250ms ease-in-out, color 250ms ease-in-out,
                box-shadow 250ms ease-in-out;
        `;
    }
);

export { MenuLabelRoot };

export default MenuRoot;
