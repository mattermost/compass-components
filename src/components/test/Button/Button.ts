import styled, { css } from 'styled-components';
import { ThemedStyledProps, FlattenSimpleInterpolation } from 'styled-components/ts3.6';

import { TTheme } from '../../../foundations/theme-provider/themes/theme.types';
import { applyShape, applyPadding, applyElevation } from '../Foundation';

import ButtonBase from './Button.base';
import { PButton } from './Button.props';
import { PADDING, SIZES, DEFAULT_PADDING, DEFAULT_RADIUS, DEFAULT_SIZE } from './Button.constants';

function applyStyles(props: ThemedStyledProps<PButton, TTheme>): FlattenSimpleInterpolation {
    return css`
        // apply shape styles
        ${applyShape({
            height: SIZES[props.size] || DEFAULT_SIZE,
            radius: DEFAULT_RADIUS,
            variant: 'rounded-rectangle',
        })}

        // apply elevation styles
        ${applyElevation({
            elevation: 3,
        })}
        
        // apply padding styles
        ${applyPadding({
            spacing: PADDING[props.size] || DEFAULT_PADDING,
            sides: 'horizontal',
        })}
        
        // style component
        background-color: ${props.theme.palette.primary.main};
        color: ${props.theme.palette.primary.contrast};
        // box-shadow: inset 0 0 0 1px ${props.theme.palette.primary.main};
        cursor: pointer;
    `;
}

const Button = styled(ButtonBase).withConfig({
    shouldForwardProp: (property, defaultValidatorFunction) =>
        !['height', 'radius'].includes(property) && defaultValidatorFunction(property),
})(applyStyles);

export default Button;
