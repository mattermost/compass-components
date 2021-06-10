import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import { TTheme } from '../../foundations/theme-provider/themes/theme.types';
import { applyTextStyles } from '../text/Text.mixins';
import { applyMargin, applyPadding } from '../../foundations/layout/Grid.mixins';
import { applyShape } from '../../foundations/shape/Shape.mixins';
import { Spacing } from '../../foundations/layout';
import { setAlpha, Utils } from '../../shared';

import { DEFAULT_ICON_BUTTON_SIZE, ICON_BUTTON_DEFINITIONS } from './IconButton.constants';
import { PIconButtonRoot } from './IconButton.props';

const IconButtonRoot = styled.button.withConfig({
    shouldForwardProp: Utils.forwardProperties(),
})<PIconButtonRoot>(
    ({
        size = DEFAULT_ICON_BUTTON_SIZE,
        theme,
    }: ThemedStyledProps<PIconButtonRoot, TTheme>): FlattenSimpleInterpolation => {
        const colors: Record<string, string> = {
            background: theme.palette.primary.main,
            hover: theme.action.hover,
            active: theme.palette.primary.main,
            border: theme.palette.primary.main,
        };

        const opacities: Record<string, Record<string, number>> = {
            background: { default: 0, hover: 0.08, active: 0.08 },
            text: { default: 0.64, hover: 0.72, active: 1 },
        };

        return css`
            display: flex;
            align-items: center;
            justify-content: center;

            color: ${setAlpha(theme.text.primary, opacities.text.default)};

            background: ${setAlpha(colors.background, opacities.background.default)};

            ${applyShape({ radius: 4 })};
            ${applyPadding(Spacing.all(ICON_BUTTON_DEFINITIONS[size].spacing))};

            span {
                ${applyMargin(Spacing.only('left', 75))};
                ${applyTextStyles({
                    size: ICON_BUTTON_DEFINITIONS[size].fontSize,
                    weight: 'bold',
                })};
            }

            :hover {
                background: ${setAlpha(colors.hover, opacities.background.hover)};
                color: ${setAlpha(theme.text.primary, opacities.text.hover)};
            }
            :active {
                background: ${setAlpha(colors.active, opacities.background.active)};
                color: ${setAlpha(theme.palette.primary.main, opacities.text.active)};
            }
            &:focus {
                box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.32),
                    inset 0 0 0 2px ${colors.border};
            }
            &:focus:not(:focus-visible) {
                box-shadow: none;
            }
            &:focus-visible {
                box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.32),
                    inset 0 0 0 2px ${colors.border};
            }
        `;
    }
);

export default IconButtonRoot;
