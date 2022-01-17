import styled, { css } from 'styled-components';
import type { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components';

import { setAlpha, Utils } from '../../shared';
import type { TTheme } from '../../utilities/theme';
import { resetButton } from '../../utilities/theme/global-styles/reset-styles';
import Spacing, { applyMargin, applyPadding } from '../../utilities/spacing';
import { applyShape } from '../../foundations/shape';
import { applyTextStyles } from '../text';

import { ICON_BUTTON_DEFINITIONS } from './IconButton.constants';
import type { PIconButtonRoot } from './IconButton.props';

const IconButtonRoot = styled.button.withConfig<PIconButtonRoot>({
    shouldForwardProp: (property, validator) =>
        Utils.blockProperty(property) && validator(property),
})((props: ThemedStyledProps<PIconButtonRoot, TTheme>): FlattenSimpleInterpolation => {
    const {
        size,
        compact,
        toggled,
        active,
        destructive,
        disabled,
        theme: {
            type,
            palette: { primary, alert, text },
            animation,
            noStyleReset,
        },
    } = props;

    const isDark = type === 'dark';
    const { spacing, compactSpacing, fontSize } = ICON_BUTTON_DEFINITIONS[size];

    const colors: Record<'bg' | 'text', Record<string, string>> = {
        bg: {
            normal: toggled ? primary.dark : setAlpha(text.primary, 0),
            hover: toggled ? primary.darker : setAlpha(text.primary, 0.08),
            active: setAlpha(primary.dark, 0.08),
        },
        text: {
            normal: toggled ? primary.contrast : setAlpha(text.primary, 0.56),
            hover: toggled ? primary.contrast : setAlpha(text.primary, 0.72),
            active: primary.dark,
        },
    };

    if (destructive) {
        colors.bg = {
            normal: setAlpha(alert.dark, 0),
            hover: isDark ? alert.dark : setAlpha(alert.dark, 0.08),
            active: isDark ? alert.darker : setAlpha(alert.dark, 0.16),
        };
        colors.text = {
            normal: alert.dark,
            hover: isDark ? alert.contrast : alert.dark,
            active: isDark ? alert.contrast : alert.dark,
        };
    }

    if (disabled) {
        colors.bg.normal = setAlpha(text.primary, 0);
        colors.text.normal = setAlpha(text.primary, 0.32);
    }

    const activeStyles = css`
        background: ${colors.bg.active};
        color: ${colors.text.active};
    `;

    const actionStyles = disabled
        ? css`
              cursor: not-allowed;
          `
        : css`
              &:hover {
                  background: ${colors.bg.hover};
                  color: ${colors.text.hover};
              }

              &:active {
                  ${activeStyles};
              }

              &:focus {
                  box-shadow: inset 0 0 0 2px ${destructive ? alert.light : primary.light};
              }

              &:focus:not(:focus-visible) {
                  box-shadow: none;
              }

              &:focus-visible {
                  box-shadow: inset 0 0 0 2px ${destructive ? alert.light : primary.light};
              }
          `;

    return css`
        ${noStyleReset && resetButton}

        display: flex;
        align-items: center;
        justify-content: center;
        place-self: flex-start;

        cursor: pointer;

        background: ${colors.bg.normal};
        color: ${colors.text.normal};

        ${applyShape({ radius: 4 })};
        ${applyPadding(Spacing.all(compact ? compactSpacing : spacing))};

        span {
            ${applyMargin(Spacing.only('left', 75))};
            ${applyTextStyles({
                size: fontSize,
                weight: 'bold',
                inheritLineHeight: true,
            })};
        }

        ${actionStyles};

        ${active && activeStyles}

        transition-property: box-shadow, background-color, color;
        transition-duration: ${animation.fast}ms;
        transition-timing-function: linear;
    `;
});

export default IconButtonRoot;
