import styled, { css } from 'styled-components';
import type { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components';

import Text, { applyTextMargin, applyTextStyles } from '../text';
import { applyShape } from '../../foundations/shape';
import { Utils } from '../../shared';
import Spacing, { applyPadding } from '../../utilities/spacing';
import type { TTheme } from '../../utilities/theme';

import type { PTagRoot } from './Tag.props';
import type { TTagVariant } from './Tag.types';

const TagRoot = styled(Text).withConfig<PTagRoot>({
    shouldForwardProp: (property, validator) =>
        Utils.blockProperty(property) && validator(property),
})((props: ThemedStyledProps<PTagRoot, TTheme>): FlattenSimpleInterpolation => {
    const { variant, size, onClick, theme } = props;

    const TAG_BACKGROUND_COLOR_MAP: Record<TTagVariant, string> = {
        general: theme.palette.background.dark,
        info: theme.palette.primary.light,
        warning: theme.palette.alert.light,
        success: theme.palette.success.light,
        highlight: theme.palette.tertiary.main,
        shortcut: theme.palette.background.dark,
    };

    return css`
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${TAG_BACKGROUND_COLOR_MAP[variant]};
        color: ${variant === 'highlight' ? theme.palette.primary.dark : theme.palette.text.primary};
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
});

export default TagRoot;
