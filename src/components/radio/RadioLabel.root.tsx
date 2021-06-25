import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import Text, { applyTextMargin, applyTextStyles } from '../text';
import { Utils } from '../../shared';
import { TTheme } from '../../utilities/theme';

import { RADIO_VALUES_MAPPING } from './Radio.constants';
import { PRadioLabel } from './Radio.props';

const RadioLabelRoot = styled(Text).withConfig({
    shouldForwardProp: Utils.forwardProperties(),
})<PRadioLabel>(({ size }: ThemedStyledProps<PRadioLabel, TTheme>): FlattenSimpleInterpolation => {
    // @default: `size === 'medium'`
    let labelMargin = 10;

    if (size === 'sm') {
        labelMargin = 8;
    } else if (size === 'lg') {
        labelMargin = 12;
    }

    return css`
        ${applyTextStyles({
            inheritLineHeight: true,
            size: RADIO_VALUES_MAPPING[size].labelSize,
        })};
        ${applyTextMargin({ margin: 'none' })};
        margin-left: ${labelMargin}px;
    `;
});

export default RadioLabelRoot;
