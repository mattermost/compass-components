import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import { setAlpha, Utils } from '../../shared';
import { TTheme } from '../../utilities/theme';
import Spacing, { SPACING_TOKENS } from '../../utilities/spacing';
import { applyMargin, applyPadding } from '../../utilities/layout';
import { applyShape } from '../../foundations/shape';
import { applyTextStyles } from '../text';

import { ICON_BUTTON_DEFINITIONS } from './IconButton.constants';
import { PIconButtonRoot } from './IconButton.props';

const IconButtonRoot = styled.button.withConfig<PIconButtonRoot>({
    shouldForwardProp: (property, validator) =>
        Utils.blockProperty(property) && validator(property),
})(
    ({
        size,
        compact,
        inverted,
        toggled,
        destructive,
        disabled,
        theme: { palette, action, text, animation },
    }: ThemedStyledProps<PIconButtonRoot, TTheme>): FlattenSimpleInterpolation => {
        const isDefault = !inverted && !destructive && !toggled;
        const { main, contrast } = destructive && !toggled ? palette.alert : palette.primary;

        // this solution is not ideal and should probably be refactored in the
        // `applyPadding` and `applyMargin` mixin-function
        let spacingTokenIndex = SPACING_TOKENS.indexOf(ICON_BUTTON_DEFINITIONS[size].spacing);

        if (compact && spacingTokenIndex > 0) {
            spacingTokenIndex -= 1;
        }

        const colors: Record<string, string> = {
            background: main,
            text: toggled ? contrast : text.primary,
        };

        const opacities: Record<string, Record<string, number>> = {
            background: {
                default: toggled ? 1 : 0,
                hover: toggled ? 0.92 : 0.08,
                active: inverted ? 0.16 : 0.08,
            },
            text: {
                default: toggled ? 1 : 0.56,
                hover: toggled ? 1 : 0.72,
                active: 1,
            },
        };

        if (inverted) {
            colors.background = contrast;
            colors.text = toggled ? main : contrast;
        }

        if (destructive && !toggled) {
            colors.background = main;
            colors.text = inverted ? contrast : main;

            opacities.background.hover = inverted ? 0.8 : 0.08;
            opacities.background.active = inverted ? 1 : 0.16;
        }

        // override some values for disabled icon-buttons
        if (disabled) {
            // set colors to the 'disabled'-grey
            colors.text = action.disabled;
            // icon and text are slightly opaque with disabled buttons
            opacities.background.default = 0;
            opacities.text.default = 0.32;
        }

        const actionStyles = disabled
            ? css`
                  cursor: not-allowed;
              `
            : css`
                  :hover {
                      background: ${setAlpha(
                          isDefault ? action.hover : colors.background,
                          opacities.background.hover
                      )};
                      color: ${setAlpha(colors.text, opacities.text.hover)};
                  }

                  :active {
                      background: ${setAlpha(colors.background, opacities.background.active)};
                      color: ${setAlpha(inverted ? contrast : main, opacities.text.active)};
                  }

                  &:focus {
                      box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.32),
                          inset 0 0 0 2px ${destructive ? palette.alert.main : main};
                  }

                  &:focus:not(:focus-visible) {
                      box-shadow: none;
                  }

                  &:focus-visible {
                      box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.32),
                          inset 0 0 0 2px ${destructive ? palette.alert.main : main};
                  }
              `;

        return css`
            display: flex;
            align-items: center;
            justify-content: center;

            color: ${setAlpha(colors.text, opacities.text.default)};
            background: ${setAlpha(colors.background, opacities.background.default)};

            ${applyShape({ radius: 4 })};
            ${applyPadding(Spacing.all(SPACING_TOKENS[spacingTokenIndex]))};

            span {
                ${applyMargin(Spacing.only('left', 75))};
                ${applyTextStyles({
                    size: ICON_BUTTON_DEFINITIONS[size].fontSize,
                    weight: 'bold',
                    inheritLineHeight: true,
                })};
            }

            ${actionStyles};

            transition: background ${animation.fast} ease-in-out,
                color ${animation.fast} ease-in-out, box-shadow ${animation.fast} ease-in-out;
        `;
    }
);

export default IconButtonRoot;
