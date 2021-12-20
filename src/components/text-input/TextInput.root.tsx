import styled, { css } from 'styled-components';
import type { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components';

import { applyShape } from '../../foundations/shape';
import { setAlpha, blendColors, Utils } from '../../shared';
import Spacing, { applyMargin, applyPadding } from '../../utilities/spacing';
import type { TTheme } from '../../utilities/theme';
import { applyTextStyles } from '../text';

import { TEXT_INPUT_VALUES_MAPPING, LABEL_POSITIONS } from './TextInput.constants';
import type { PTextInputRoot } from './TextInput.props';

const TextInputRoot = styled.div.withConfig<PTextInputRoot>({
    shouldForwardProp: (property, validator) =>
        Utils.blockProperty(property, ['disabled', 'value', 'width', 'size']) &&
        validator(property),
})((props: ThemedStyledProps<PTextInputRoot, TTheme>): FlattenSimpleInterpolation => {
    const {
        theme: { palette, animation },
        hasError,
        disabled,
        active,
        animatedLabel,
        value,
        width,
        size,
        leadingIcon,
        onClear,
        backgroundColor = palette.background.main,
    } = props;

    const hasValue = Utils.isString(value) && value.length > 0;
    const isClearable = Utils.isFunction(onClear);
    const colors: Record<string, string> = {
        active: hasError ? palette.alert.dark : palette.primary.dark,
        text: palette.text.primary,
        background: backgroundColor,
        action: setAlpha(palette.text.primary, 0.24),
        border: active ? palette.primary.dark : palette.text.secondary,
    };

    if (hasError) {
        colors.border = palette.alert.dark;
    }

    if (disabled) {
        colors.active = setAlpha(colors.active, 0.32);
        colors.text = setAlpha(colors.text, 0.16);
        colors.border = colors.text;
        colors.background = setAlpha(colors.background, 0.16);
    }

    const actionStyles = disabled
        ? css`
              cursor: not-allowed;
              pointer-events: none;
              user-select: none;
          `
        : css`
              &:hover {
                  border-color: ${blendColors(colors.border, setAlpha(colors.action, 0.32))};
              }
              &:active {
                  border-color: ${colors.active};
                  background-color: ${setAlpha(colors.active, 0.16)};
              }

              input:focus + span {
                  background-color: ${backgroundColor};
                  ${animatedLabel
                      ? `transform: translate(${LABEL_POSITIONS[size]}) scale(0.7); color: ${colors.active};`
                      : 'transform: scale(0); opacity: 0;'};
              }
              &:focus-within {
                  border: 2px solid ${colors.active};
              }
          `;

    return css`
        ${actionStyles};
        color: ${colors.text};
        box-sizing: content-box;
        border: 1px solid ${colors.border};
        position: relative;
        display: flex;
        align-items: center;
        background-color: ${colors.background};
        ${applyShape({
            radius: 4,
            width: width === 'full' ? '100%' : `${width}px`,
            height: TEXT_INPUT_VALUES_MAPPING[size].height,
        })};
        ${applyPadding(
            Spacing.symmetric({
                vertical: 0,
                horizontal: TEXT_INPUT_VALUES_MAPPING[size].spacing,
            })
        )};

        span {
            position: absolute;
            white-space: nowrap;
            background-color: ${hasValue ? backgroundColor : 'transparent'};
            color: ${colors.text};
            opacity: 1;
            transform: translate(${hasValue ? LABEL_POSITIONS[size] : '0, 0'})
                scale(${hasValue ? '0.7' : '1'});
            ${applyShape({ radius: 4 })};
            ${applyPadding(Spacing.symmetric({ vertical: 25, horizontal: 75 }))};
            ${applyMargin(
                Spacing.only('left', leadingIcon ? TEXT_INPUT_VALUES_MAPPING[size].labelMargin : 0)
            )};
            ${applyTextStyles({
                size: TEXT_INPUT_VALUES_MAPPING[size].labelSize,
                inheritLineHeight: true,
            })};

            transition: all ${animation.fastest}ms linear;
        }

        .trailing-icon {
            cursor: ${isClearable ? 'pointer' : 'none'};
        }
    `;
});

export default TextInputRoot;
