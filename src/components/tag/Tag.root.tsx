import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import { Spacing } from '../../foundations/layout';
import { applyPadding } from '../../foundations/layout/Grid.mixins';
import { applyShape } from '../../foundations/shape/Shape.mixins';
import { TTheme } from '../../foundations/theme-provider/themes/theme.types';
import { applyTextMargin, applyTextStyles } from '../text/Text.mixins';
import Text from '../text';
import { Utils } from '../../shared';

import { PTagRoot } from './Tag.props';
import { TTagVariant } from './Tag.types';

const TagRoot = styled(Text).withConfig({
    shouldForwardProp: Utils.forwardProperties(),
})<PTagRoot>(
    ({
        variant,
        size,
        onClick,
        theme,
    }: ThemedStyledProps<PTagRoot, TTheme>): FlattenSimpleInterpolation => {
        const TAG_BACKGROUND_COLOR_MAP: Record<TTagVariant, TTheme> = {
            general: theme.background.skeleton,
            info: theme.palette.primary.light,
            warning: theme.palette.alert.light,
            success: theme.palette.success.light,
            highlight: theme.highlight.mention,
            shortcut: theme.background.skeleton,
        };

        return css`
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: ${TAG_BACKGROUND_COLOR_MAP[variant]};
            color: ${variant === 'highlight' ? theme.palette.primary.main : theme.text.primary};
            text-transform: ${variant === 'highlight' ? 'none' : 'uppercase'};
            cursor: ${Utils.isFunction(onClick) ? 'pointer' : 'inherit'};

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
            ${applyTextStyles({ size, weight: variant === 'highlight' ? 'normal' : 'bold' })};
        `;
    }
);

export default TagRoot;
