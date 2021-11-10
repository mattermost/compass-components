import type { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components';
import styled, { css } from 'styled-components';

import Spacing, { applyPadding } from '../../utilities/spacing';
import type { TTheme } from '../../utilities/theme';
import { applyShape } from '../../foundations/shape';
import Text, { applyTextMargin, applyTextStyles } from '../../components/text';

import type { PMenuRoot } from './Menu.props';

const MenuLabelRoot = styled(Text)(
    (): FlattenSimpleInterpolation => css`
        ${applyTextStyles({ size: 100, weight: 'bold' })};
        ${applyTextMargin({ margin: 'none' })};
        ${applyPadding(Spacing.symmetric({ vertical: 75, horizontal: 200 }))};
    `
);

const MenuRoot = styled.div<PMenuRoot>(
    ({
        width,
        height,
        isMobile,
        theme: { background },
    }: ThemedStyledProps<PMenuRoot, TTheme>): FlattenSimpleInterpolation => css`
        background-color: ${background.shape};

        ${applyShape({
            width,
            height: isMobile ? '356px' : height,
            radius: 8,
        })};

        transition: background 250ms ease-in-out, color 250ms ease-in-out,
            box-shadow 250ms ease-in-out;
    `
);

export { MenuLabelRoot };

export default MenuRoot;
