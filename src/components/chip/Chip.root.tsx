import styled, { css } from 'styled-components';
import type { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components';

import Spacing, { applyMargin } from '../../utilities/spacing';
import type { TTheme } from '../../utilities/theme';
import Text from '../text';

import type { PChipRoot } from './Chip.props';

const ChipLabelRoot = styled(Text)<PChipRoot>(
    (props: ThemedStyledProps<PChipRoot, TTheme>): FlattenSimpleInterpolation => {
        const { hasLeadingElement } = props;

        return css`
            ${applyMargin(
                Spacing.trbl({ top: 0, right: 75, bottom: 0, left: hasLeadingElement ? 100 : 75 })
            )}
        `;
    }
);

export default ChipLabelRoot;
