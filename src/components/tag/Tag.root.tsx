import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import { Spacing } from '../../foundations/layout';
import { applyPadding } from '../../foundations/layout/Grid.mixins';
import { applyShape } from '../../foundations/shape/Shape.mixins';
import { TTheme } from '../../foundations/theme-provider/themes/theme.types';
import { applyTextMargin, applyTextStyles, applyTextColor } from '../text/Text.mixins';
import Text from '../text';
import { Utils } from '../../shared';

import { DEFAULT_TAG_TYPE } from './Tag.constants';
import PTag from './Tag.props';
import { TTagType } from './Tag.types';

const TagRoot = styled(Text).withConfig({
    shouldForwardProp: Utils.forwardProperties(),
})<PTag>(
    ({
        type = DEFAULT_TAG_TYPE,
        theme,
    }: ThemedStyledProps<PTag, TTheme>): FlattenSimpleInterpolation => {
        const isMention = type === 'highlight';

        const TAG_BACKGROUND_COLOR_MAP: Record<TTagType, TTheme> = {
            general: theme.background.skeleton,
            info: theme.palette.primary.light,
            warning: theme.palette.alert.light,
            success: theme.palette.success.light,
            highlight: theme.highlight.mention,
            shortcut: theme.background.skeleton,
        };

        const colors: Record<string, string> = {
            background: TAG_BACKGROUND_COLOR_MAP[type],
            text: isMention ? theme.palette.primary.main : theme.text.primary,
        };

        return css`
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: ${colors.background};
            color: ${colors.text};
            text-transform: ${isMention ? 'none' : 'uppercase'};
            cursor: ${isMention ? 'pointer' : 'inherit'};

            ${applyPadding(
                Spacing.symmetric({
                    vertical: 25,
                    horizontal: 25,
                })
            )};

            ${applyShape({
                radius: 4,
                width: 'auto',
                height: 'auto',
            })};
            ${applyTextMargin({ margin: 'none' })};
            ${applyTextStyles({ weight: isMention ? 'normal' : 'bold' })};
            ${applyTextColor({ color: colors.text, theme })};
        `;
    }
);

export default TagRoot;
