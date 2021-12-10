import styled, { css } from 'styled-components';
import type { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components';

import { Utils } from '../../shared';
import type { TNewTheme } from '../../utilities/theme';
import { resetButton } from '../../utilities/theme/global-styles/reset-styles';
import Spacing, { applyMargin, applyPadding } from '../../utilities/spacing';
import { applyShape } from '../../foundations/shape';
import { applyTextStyles } from '../text';

import { ICON_BUTTON_DEFINITIONS } from './IconButton.constants';
import type { PIconButtonRoot } from './IconButton.props';

const IconButtonRoot = styled.button.withConfig<PIconButtonRoot>({
    shouldForwardProp: (property, validator) =>
        Utils.blockProperty(property) && validator(property),
})((props: ThemedStyledProps<PIconButtonRoot, TNewTheme>): FlattenSimpleInterpolation => {
    const {
        size,
        compact,
        inverted,
        toggled,
        active,
        destructive,
        disabled,
        theme: { palettes, animation, noStyleReset },
    } = props;

    const { content, navigation, alert, primary } = palettes;
    const { spacing, compactSpacing, fontSize } = ICON_BUTTON_DEFINITIONS[size];

    const colors: Record<string, Record<string, string>> = {
        bg: {
            normal: toggled ? primary['300'] : content.contrast.a00,
            hover: toggled ? primary['400'] : content.contrast.a08,
            active: primary.a16,
        },
        text: {
            normal: toggled ? primary.contrast['300'] : content.contrast.a56,
            hover: toggled ? primary.contrast['300'] : content.contrast.a64,
            active: primary['300'],
        },
    };

    if (inverted) {
        colors.bg = {
            normal: toggled ? navigation.contrast['300'] : navigation.contrast.a00,
            hover: toggled ? navigation.contrast['400'] : navigation.contrast.a08,
            active: navigation.contrast.a08,
        };
        colors.text = {
            normal: toggled ? navigation['300'] : navigation.contrast.a64,
            hover: toggled ? navigation['300'] : navigation.contrast['300'],
            active: toggled ? navigation['300'] : navigation.contrast['300'],
        };
    }

    if (destructive) {
        colors.bg = {
            normal: alert.a00,
            hover: inverted ? alert['400'] : alert.a08,
            active: inverted ? alert['300'] : alert.a16,
        };
        colors.text = {
            normal: inverted ? navigation.contrast.a64 : alert['300'],
            hover: inverted ? alert.contrast['300'] : alert['300'],
            active: inverted ? alert.contrast['300'] : alert['300'],
        };
    }

    if (disabled) {
        colors.bg = {
            normal: content.a00,
            hover: content.a00,
            active: content.a00,
        };
        colors.text = {
            normal: inverted ? navigation.contrast.a32 : content.contrast.a32,
            hover: inverted ? navigation.contrast.a32 : content.contrast.a32,
            active: inverted ? navigation.contrast.a32 : content.contrast.a32,
        };
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
              :hover {
                  background: ${colors.bg.hover};
                  color: ${colors.text.hover};
              }

              :active {
                  ${activeStyles};
              }

              &:focus {
                  box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.32),
                      inset 0 0 0 2px ${destructive ? alert['0'] : primary['0']};
              }

              &:focus:not(:focus-visible) {
                  box-shadow: none;
              }

              &:focus-visible {
                  box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.32),
                      inset 0 0 0 2px ${destructive ? alert['0'] : primary['0']};
              }
          `;

    return css`
        ${noStyleReset && resetButton}

        display: flex;
        align-items: center;
        justify-content: center;

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

        transition: background ${animation.fast} ease-in-out,
                color ${animation.fast} ease-in-out, box-shadow ${animation.fast} ease-in-out;
    `;
});

export default IconButtonRoot;
