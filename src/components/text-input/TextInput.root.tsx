import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import { applyShape } from '../../foundations/shape';
import { setAlpha, Utils } from '../../shared';
import { applyMargin, applyPadding } from '../../utilities/layout';
import { TTheme } from '../../utilities/theme';
import Spacing from '../../utilities/spacing';
import { applyTextStyles } from '../text';

import { TEXT_INPUT_VALUES_MAPPING } from './TextInput.constants';
import { PTextInputRoot } from './TextInput.props';
import { TTextInputSizeToken } from './TextInput.types';

const TextInputRoot = styled.div.withConfig({
    shouldForwardProp: Utils.forwardProperties(),
})<PTextInputRoot>(
    ({
        hasError,
        disabled,
        active,
        width,
        size,
        backgroundColor,
        labelAnimation,
        leadingIcon,
        value,
        theme: { palette, action, text, background },
    }: ThemedStyledProps<PTextInputRoot, TTheme>): FlattenSimpleInterpolation => {
        const hasValue = Utils.isString(value) && value.length > 0;

        const colors: Record<string, string> = {
            active: hasError ? palette.alert.main : palette.primary.main,
            text: text.primary,
            background: backgroundColor || background.shape,
            action: action.hover,
            border: active ? palette.primary.main : text.secondary,
            placeholder: text.disabled,
        };
        const labelPositions: Record<TTextInputSizeToken, string> = {
            sm: '-1.4rem, -1rem',
            md: '-1.6rem, -1.2rem',
            lg: '-2rem, -1.4rem',
        };

        if (hasError) {
            colors.border = palette.alert.main;
        }

        if (disabled) {
            colors.active = setAlpha(colors.active, 0.32);
            colors.text = setAlpha(colors.text, 0.16);
            colors.border = colors.text;
            colors.background = background.default;
        }

        if (active) {
            colors.background = setAlpha(colors.active, 0.16);
        }

        const actionStyles = disabled
            ? css`
                  cursor: not-allowed;
                  pointer-events: none;
                  user-select: none;
              `
            : css`
                  &:focus-within {
                      border: 2px solid ${colors.active};
                  }
                  .input__field:focus {
                      outline: none;

                      &::placeholder {
                          color: ${colors.placeholder};
                      }

                      & + .input__label {
                          background-color: ${colors.background};
                          transform: ${labelAnimation
                              ? `translate(${labelPositions[size]}) scale(0.7)`
                              : 'display: none'};
                          color: ${colors.active};
                      }
                  }
              `;

        return css`
            ${actionStyles}
            color: ${colors.text};
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

            .input__field::placeholder {
                color: transparent;
                transition: color 200ms ease-in;
            }
            .input__label {
                position: absolute;
                white-space: nowrap;
                transform: translate(${hasValue ? labelPositions[size] : '0, 0'});
                background-color: transparent;
                transition: transform 200ms ease-in;
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
            }

            .input__field {
                width: 100%;
                height: 100%;
                border: none;
                background-color: transparent;
            }
        `;
    }
);

export default TextInputRoot;
