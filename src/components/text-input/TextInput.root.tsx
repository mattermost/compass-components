import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import { TTheme } from '../../foundations/theme-provider/themes/theme.types';
import { setAlpha, Utils } from '../../shared';
import { applyTextStyles } from '../text/Text.mixins';
import { applyMargin, applyPadding } from '../../foundations/layout/Grid.mixins';
import { applyShape } from '../../foundations/shape/Shape.mixins';
import { Spacing } from '../../foundations/layout';

import { TEXT_INPUT_VALUES_MAPPING } from './TextInput.constants';
import { PTextInput } from './TextInput.props';

const TextInputRoot = styled.div.withConfig({
    shouldForwardProp: Utils.forwardProperties(),
})<PTextInput>(
    ({
        hasError,
        disabled,
        active,
        width,
        size,
        backgroundColor,
        theme: { palette, action, text, background },
    }: ThemedStyledProps<PTextInput, TTheme>): FlattenSimpleInterpolation => {
        const colors: Record<string, string> = {
            active: hasError ? palette.alert.main : palette.primary.main,
            text: text.primary,
            background: backgroundColor || background.shape,
            action: action.hover,
            border: active ? palette.primary.main : text.secondary,
            placeholder: text.disabled,
        };

        if (disabled) {
            colors.active = setAlpha(colors.active, 0.32);
            colors.text = setAlpha(colors.text, 0.16);
            colors.border = colors.text;
            colors.background = background.default;
        }

        if (active) {
            colors.background = setAlpha(colors.active, 0.16);
        }

        if (hasError) {
            colors.border = palette.alert.main;
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
                          transform: translate(-1.8rem, -1.4rem) scale(0.7);
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
                height: TEXT_INPUT_VALUES_MAPPING[size],
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
                transform: translate(0, 0);
                background-color: transparent;
                transition: transform 200ms ease-in;
                ${applyPadding(Spacing.symmetric({ vertical: 25, horizontal: 75 }))};
                ${applyMargin(Spacing.only('left', TEXT_INPUT_VALUES_MAPPING[size].labelMargin))};
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
