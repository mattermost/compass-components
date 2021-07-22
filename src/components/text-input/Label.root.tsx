import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import { applyTextStyles } from '../text';
import { Utils, setAlpha } from '../../shared';
import { applyMargin, applyPadding } from '../../utilities/layout';
import { TTheme } from '../../utilities/theme';
import Spacing from '../../utilities/spacing';

import { TEXT_INPUT_VALUES_MAPPING, LABEL_POSITIONS } from './TextInput.constants';
import { PLabelRoot } from './TextInput.props';

const LabelRoot = styled.label<PLabelRoot>(
    ({
        theme: { background, animation, palette, text },
        size,
        value,
        animatedLabel,
        leadingIcon,
        hasError,
        disabled,
        backgroundColor = background.default,
    }: ThemedStyledProps<PLabelRoot, TTheme>): FlattenSimpleInterpolation => {
        const hasValue = Utils.isString(value) && value.length > 0;

        const colors: Record<string, string> = {
            active: hasError ? palette.alert.main : palette.primary.main,
            text: text.primary,
        };

        if (disabled) {
            colors.text = setAlpha(colors.text, 0.16);
        }

        return css`
            position: absolute;
            white-space: nowrap;
            background-color: ${hasValue ? backgroundColor : 'transparent'};
            color: ${colors.text};
            opacity: 1;
            transform: translate(${hasValue ? LABEL_POSITIONS[size] : '0, 0'})
                scale(${hasValue ? '0.7' : '1'});

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

            input:focus + & {
                background-color: ${backgroundColor};
                ${animatedLabel
                    ? `transform: translate(${LABEL_POSITIONS[size]}) scale(0.7); color: ${colors.active};`
                    : 'transform: scale(0); opacity: 0;'};
            }

            transition: all ${animation.fastest} ease-in;
        `;
    }
);

export default LabelRoot;
