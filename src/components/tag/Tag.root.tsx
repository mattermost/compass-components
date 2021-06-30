import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import Text, { applyTextMargin, applyTextStyles } from '../text';
import { applyShape } from '../../foundations/shape';
import { Utils } from '../../shared';
import { applyPadding } from '../../utilities/layout';
import Spacing from '../../utilities/spacing';
import { TTheme } from '../../utilities/theme';

import { PTagRoot } from './Tag.props';
import { TTagVariant } from './Tag.types';

const TagRoot = styled(Text).withConfig<PTagRoot>({
    shouldForwardProp: Utils.forwardProperties(),
})(
    ({
        variant,
        size,
        onClick,
        theme,
    }: ThemedStyledProps<PTagRoot, TTheme>): FlattenSimpleInterpolation => {
        const TAG_BACKGROUND_COLOR_MAP: Record<TTagVariant, string> = {
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
                    vertical: 0,
                    horizontal: 50,
                })
            )};

            ${applyShape({
                radius: 4,
                width: 'auto',
                height: 'auto',
            })};

            ${applyTextMargin({ margin: 'none' })};
            ${applyTextStyles({ size, weight: variant === 'highlight' ? 'regular' : 'bold' })};
        `;
    }
);

export default TagRoot;
