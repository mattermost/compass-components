import styled, { css } from 'styled-components';
import type { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components';

import Spacing, { applyPadding } from '../../utilities/spacing';
import { TTheme } from '../../utilities/theme';

import { PInputRoot } from './TextInput.props';

const InputRoot = styled.input<PInputRoot>(
    ({
        theme: { text, animation },
    }: ThemedStyledProps<PInputRoot, TTheme>): FlattenSimpleInterpolation => css`
        width: 100%;
        height: 100%;
        border: none;
        background-color: transparent;
        ${applyPadding(Spacing.symmetric({ vertical: 25, horizontal: 75 }))};

        &::placeholder {
            color: transparent;
            transition: color ${animation.fastest}ms linear;
        }
        &:focus {
            outline: none;
            &::placeholder {
                color: ${text.disabled};
            }
        }
    `
);

export default InputRoot;
