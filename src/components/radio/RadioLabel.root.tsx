import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import Spacing, { TSpacingToken } from '../../utilities/spacing';
import { applyMargin } from '../../utilities/layout';
import { applyTextMargin, applyTextStyles } from '../text';
import { Utils } from '../../shared';
import { TTheme } from '../../utilities/theme';

import { RADIO_VALUES_MAPPING } from './Radio.constants';
import { PRadioLabel } from './Radio.props';

const RadioLabelRoot = styled.span.withConfig<PRadioLabel>({
    shouldForwardProp: (property, validator) =>
        Utils.blockProperty(property) && validator(property),
})(({ size }: ThemedStyledProps<PRadioLabel, TTheme>): FlattenSimpleInterpolation => {
    // @default: `size === 'md'`
    let labelMargin: TSpacingToken = 125;

    if (size === 'sm') {
        labelMargin = 100;
    } else if (size === 'lg') {
        labelMargin = 150;
    }

    return css`
        ${applyTextStyles({
            inheritLineHeight: true,
            size: RADIO_VALUES_MAPPING[size].labelSize,
        })};
        ${applyTextMargin({ margin: 'none' })};
        ${applyMargin(Spacing.only('left', labelMargin))};
    `;
});

export default RadioLabelRoot;
