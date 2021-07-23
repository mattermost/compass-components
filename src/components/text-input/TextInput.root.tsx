import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import { applyShape } from '../../foundations/shape';
import { setAlpha, blendColors, Utils } from '../../shared';
import { applyMargin, applyPadding } from '../../utilities/layout';
import { TTheme } from '../../utilities/theme';
import Spacing from '../../utilities/spacing';
import { applyTextStyles } from '../text';

import { TEXT_INPUT_VALUES_MAPPING, LABEL_POSITIONS } from './TextInput.constants';
import { PTextInputRoot } from './TextInput.props';

const TextInputRoot = styled.div<PTextInputRoot>(
    ({
        theme: { palette, action, text, background, animation },
        hasError,
        disabled,
        active,
        animatedLabel,
        value,
        width,
        size,
        leadingIcon,
        onClear,
        backgroundColor = background.default,
    }: ThemedStyledProps<PTextInputRoot, TTheme>): FlattenSimpleInterpolation => {
        const hasValue = Utils.isString(value) && value.length > 0;
        const isClearable = Utils.isFunction(onClear);

        const colors: Record<string, string> = {
            active: hasError ? palette.alert.main : palette.primary.main,
            text: text.primary,
            background: backgroundColor,
            action: action.hover,
            border: active ? palette.primary.main : text.disabled,
        };

        if (hasError) {
            colors.border = palette.alert.main;
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
                    Spacing.only(
                        'left',
                        leadingIcon === 'none' ? 0 : TEXT_INPUT_VALUES_MAPPING[size].labelMargin
                    )
                )};
                ${applyTextStyles({
                    size: TEXT_INPUT_VALUES_MAPPING[size].labelSize,
                    inheritLineHeight: true,
                })};

                transition: all ${animation.fastest} ease-in-out;
            }

            .clear {
                cursor: ${isClearable ? 'pointer' : 'none'};
            }
        `;
    }
);

export default TextInputRoot;
