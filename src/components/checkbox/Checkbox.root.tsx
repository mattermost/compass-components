import styled, { css } from 'styled-components';
import type { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components';

import ShapeRoot from '../../foundations/shape/Shape.root';
import { setAlpha, Utils } from '../../shared';
import type { TTheme } from '../../utilities/theme';
import TextRoot from '../text/Text.root';

import type { PCheckboxRoot } from './Checkbox.props';

const CheckboxRoot = styled.label.withConfig({
    shouldForwardProp: (property, validator) =>
        Utils.blockProperty(property) && validator(property),
})<PCheckboxRoot>((props: ThemedStyledProps<PCheckboxRoot, TTheme>): FlattenSimpleInterpolation => {
    const {
        theme: {
            palette: { primary, secondary, alert },
            text,
            animation,
        },
        hasError,
        disabled,
        checked,
    } = props;

    const mainColor = hasError ? alert : primary;

    const backgroundColor = checked ? mainColor[300] : '#FFF';
    const borderColor = {
        normal: hasError ? mainColor[0] : setAlpha(text.primary, 0.24),
        hover: hasError ? mainColor[50] : setAlpha(text.primary, 0.48),
        focus: hasError ? mainColor[100] : secondary[300],
    };

    const activeStyles = disabled
        ? css`
              cursor: not-allowed;
          `
        : css`
              &:hover {
                  box-shadow: inset 0 0 0 1px ${borderColor.hover};
              }

              &:focus {
                  box-shadow: inset 0 0 0 2px ${borderColor.focus};
              }

              &:focus:not(:focus-visible) {
                  box-shadow: inset 0 0 0 1px ${borderColor.normal};
              }

              &:focus-visible {
                  box-shadow: inset 0 0 0 2px ${borderColor.focus};
              }
          `;

    return css`
        display: flex;
        align-items: center;

        color: ${text.primary};

        input {
            display: none;

            + ${ShapeRoot} {
                border: none;
                background: ${backgroundColor};
                color: ${mainColor.contrast[300]};
                box-shadow: inset 0 0 0 1px ${borderColor.normal};

                ${activeStyles};

                transition-property: box-shadow, background-color, color;
                transition-duration: ${animation.fast}ms;
                transition-timing-function: linear;
            }
        }

        ${TextRoot} {
            margin-left: 10px;
        }

        ${disabled &&
        css`
            opacity: 0.32;
        `}
    `;
});

export default CheckboxRoot;
