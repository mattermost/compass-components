import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import { TTheme } from '../../utilities/theme';

import { PInputRoot } from './TextInput.props';

const InputRoot = styled.input<PInputRoot>(
    ({ theme: { text } }: ThemedStyledProps<PInputRoot, TTheme>): FlattenSimpleInterpolation => css`
        width: 100%;
        height: 100%;
        border: none;
        background-color: transparent;

        &::placeholder {
            color: transparent;
            transition: color 100ms ease-in;
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
