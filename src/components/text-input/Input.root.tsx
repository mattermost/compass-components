import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import { applyPadding } from '../../utilities/layout';
import Spacing from '../../utilities/spacing';
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
            transition: color ${animation.fastest} ease-in;
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
