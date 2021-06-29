import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import { TTheme } from '../../utilities/theme';

import { PInputRoot } from './TextInput.props';

const InputRoot = styled.input<PInputRoot>(
    ({ theme: { text } }: ThemedStyledProps<PInputRoot, TTheme>): FlattenSimpleInterpolation => {
        const colors: Record<string, string> = {
            placeholder: text.disabled,
        };

        const actionStyles = css`
            &:focus {
                outline: none;

                &::placeholder {
                    color: ${colors.placeholder};
                }
            }
        `;

        return css`
            ${actionStyles};
            width: 100%;
            height: 100%;
            border: none;
            background-color: transparent;

            &::placeholder {
                color: transparent;
                transition: color 200ms ease-in;
            }
        `;
    }
);

export default InputRoot;
