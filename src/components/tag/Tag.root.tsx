import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import { Spacing } from '../../foundations/layout';
import { applyPadding } from '../../foundations/layout/Grid.mixins';
import { applyShape } from '../../foundations/shape/Shape.mixins';
import { TTheme } from '../../foundations/theme-provider/themes/theme.types';
import { applyTextMargin, applyTextStyles, applyTextColor } from '../text/Text.mixins';
import Text from '../text';
import { Utils } from '../../shared';

import PTag, { PTagRoot } from './Tag.props';
import { TTagVariant } from './Tag.types';

const TagRoot = styled(Text).withConfig({
    shouldForwardProp: Utils.forwardProperties(),
})<PTagRoot>(
    ({ variant, size, theme }: ThemedStyledProps<PTag, TTheme>): FlattenSimpleInterpolation => {
        const isMention = variant === 'highlight';

        const TAG_BACKGROUND_COLOR_MAP: Record<TTagVariant, TTheme> = {
            general: theme.background.skeleton,
            info: theme.palette.primary.light,
            warning: theme.palette.alert.light,
            success: theme.palette.success.light,
            highlight: theme.highlight.mention,
            shortcut: theme.background.skeleton,
        };

        const colors: Record<string, string> = {
            background: TAG_BACKGROUND_COLOR_MAP[variant],
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
            ${applyTextStyles({ size, weight: isMention ? 'normal' : 'bold' })};
            ${applyTextColor({ color: colors.text, theme })};
        `;
    }
);

export default TagRoot;
