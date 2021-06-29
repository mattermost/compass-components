import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import { applyTextStyles } from '../text';
import { setAlpha, Utils } from '../../shared';
import { applyMargin, applyPadding } from '../../utilities/layout';
import { TTheme } from '../../utilities/theme';
import Spacing from '../../utilities/spacing';

import { TEXT_INPUT_VALUES_MAPPING } from './TextInput.constants';
import { PLabelRoot } from './TextInput.props';
import { TTextInputSizeToken } from './TextInput.types';

const LabelRoot = styled.label<PLabelRoot>(
    ({
        theme: { background },
        active,
        size,
        value,
        animatedLabel,
        leadingIcon,
        backgroundColor = background.default,
    }: ThemedStyledProps<PLabelRoot, TTheme>): FlattenSimpleInterpolation => {
        const hasValue = Utils.isString(value) && value.length > 0;

        const colors: Record<string, string> = {
            background: backgroundColor || background.shape,
        };
        const labelPositions: Record<TTextInputSizeToken, string> = {
            sm: '-22px, -16px',
            md: '-26px, -20px',
            lg: '-32px, -22px',
        };

        if (active) {
            colors.background = setAlpha(colors.active, 0.16);
        }

        const actionStyles = css`
                input:focus + & {
                    background-color: ${colors.background};
                    transform: ${
                        animatedLabel ? `translate(${labelPositions[size]}) scale(0.7)` : 'scale(0)'
                    };
                }
            }
        `;

        return css`
            ${actionStyles};
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
        `;
    }
);

export default LabelRoot;
