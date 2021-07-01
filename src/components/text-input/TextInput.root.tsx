import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import { applyShape } from '../../foundations/shape';
import { setAlpha } from '../../shared';
import { applyPadding } from '../../utilities/layout';
import { TTheme } from '../../utilities/theme';
import Spacing from '../../utilities/spacing';

import { TEXT_INPUT_VALUES_MAPPING } from './TextInput.constants';
import { PTextInputRoot } from './TextInput.props';

const TextInputRoot = styled.div<PTextInputRoot>(
    ({
        theme: { palette, action, text, background },
        hasError,
        disabled,
        active,
        width,
        size,
        backgroundColor = background.default,
    }: ThemedStyledProps<PTextInputRoot, TTheme>): FlattenSimpleInterpolation => {
        const colors: Record<string, string> = {
            active: hasError ? palette.alert.main : palette.primary.main,
            text: text.primary,
            background: backgroundColor,
            action: action.hover,
            border: active ? palette.primary.main : text.secondary,
        };

        if (hasError) {
            colors.border = palette.alert.main;
        }

        if (active) {
            colors.background = setAlpha(colors.active, 0.16);
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
                  &:focus-within {
                      border: 2px solid ${colors.active};
                  }
              `;

        return css`
            ${actionStyles};
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
        `;
    }
);

export default TextInputRoot;
