import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import { setAlpha, blendColors } from '../../shared';
import Spacing from '../../utilities/spacing';
import { applyMargin, applyPadding } from '../../utilities/layout';
import { TTheme } from '../../utilities/theme';
import { applyShape } from '../../foundations/shape';
import { applyTextStyles } from '../text';

import { PMenuItemRoot, PMenuItemTextRoot } from './MenuItem.props';

const MenuItemLabelRoot = styled.span<PMenuItemTextRoot>(
    (): FlattenSimpleInterpolation => css`
        ${applyTextStyles({ size: 100, weight: 'bold' })};
        ${applyMargin(Spacing.only('right', 100))};
    `
);

const MenuItemDescriptionRoot = styled.span<PMenuItemTextRoot>(
    ({ withMargin = false }): FlattenSimpleInterpolation => css`
        ${applyMargin(Spacing.only('top', withMargin ? 50 : 0))};
        ${applyTextStyles({ size: 75, weight: 'regular' })};
    `
);

const MenuItem = styled.div<PMenuItemRoot>(
    ({
        destructive,
        disabled,
        theme: { background, palette, action, text },
    }: ThemedStyledProps<PMenuItemRoot, TTheme>): FlattenSimpleInterpolation => {
        const { main, contrast } = destructive ? palette.alert : palette.primary;

        const colors = {
            hover: destructive ? main : blendColors(background.shape, setAlpha(action.hover, 0.08)),
            active: destructive
                ? blendColors(main, setAlpha(action.hover, 0.16))
                : blendColors(background.shape, setAlpha(main, 0.08)),
            text: setAlpha(text.primary, 0.56),
        };

        const actionStyles = disabled
            ? css`
                  cursor: not-allowed;
                  > * {
                      color: ${text.primary};
                      opacity: 0.32;
                  }
              `
            : css`
                  // Text and leading Icons (not all elements) should have the error color when in default state
                  > i {
                      color: ${destructive && !disabled ? main : colors.text};
                  }

                  ${MenuItemLabelRoot} {
                      color: ${destructive && !disabled ? main : setAlpha(colors.text, 1)};
                  }
                  :hover {
                      background: ${colors.hover};
                      color: ${destructive
                          ? setAlpha(contrast, 0.64)
                          : setAlpha(colors.text, 0.72)};
                  }

                  :active {
                      background: ${colors.active};
                      color: ${destructive ? setAlpha(contrast, 0.64) : colors.text};
                  }

                  :focus {
                      background: ${destructive ? main : background.shape};
                      box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.32), inset 0 0 0 2px ${main};
                      color: ${destructive ? setAlpha(contrast, 0.64) : colors.text};
                  }

                  :focus:not(:focus-visible) {
                      box-shadow: none;
                  }

                  :focus-visible {
                      outline: none;
                      background: ${destructive ? main : background.shape};
                      box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.32), inset 0 0 0 2px ${main};
                      color: ${destructive ? setAlpha(contrast, 0.64) : colors.text};
                  }

                  // setting the values created higher specificity for them,
                  // so we need to set the correct values here for the action states
                  :hover,
                  :active,
                  :focus,
                  :focus-visible {
                      > i {
                          color: ${destructive && !disabled ? contrast : 'inherit'};
                      }

                      ${MenuItemLabelRoot} {
                          color: ${destructive && !disabled ? contrast : setAlpha(colors.text, 1)};
                      }
                  }
              `;

        return css`
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;

            background-color: ${background.shape};
            color: ${colors.text};

            ${applyShape({ radius: 0, width: '100%' })};
            ${applyPadding(Spacing.trbl({ top: 100, right: 175, bottom: 100, left: 200 }))};

            ${actionStyles};

            transition: background 250ms ease-in-out, color 250ms ease-in-out,
                box-shadow 250ms ease-in-out;
        `;
    }
);

export { MenuItemLabelRoot, MenuItemDescriptionRoot };

export default MenuItem;
