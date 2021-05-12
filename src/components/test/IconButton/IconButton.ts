import styled, { css } from 'styled-components';
import { ThemedStyledProps, FlattenSimpleInterpolation } from 'styled-components/ts3.6';

import { TTheme } from '../../../foundations/theme-provider/themes/theme.types';
import { applyShape, applyPadding, applyElevation } from '../Foundation';

import IconButtonBase from './IconButton.base';
import { PIconButton } from './IconButton.props';
import {
    PADDING,
    SIZES,
    DEFAULT_PADDING,
    DEFAULT_RADIUS,
    DEFAULT_SIZE,
} from './IconButton.constants';

function applyStyles(props: ThemedStyledProps<PIconButton, TTheme>): FlattenSimpleInterpolation {
    return css`
        // apply shape styles
        ${applyShape({
            height: SIZES[props.size] || DEFAULT_SIZE,
            radius: DEFAULT_RADIUS,
            variant: 'rounded-rectangle',
        })}

        // apply elevation styles
        ${applyElevation({
            elevation: 6,
        })}
        
        // apply padding styles
        ${applyPadding({
            spacing: PADDING[props.size] || DEFAULT_PADDING,
            sides: 'horizontal',
        })}
        
        // style component
        background-color: ${props.theme.palette.primary.contrast};
        color: ${props.theme.palette.primary.main};
        // box-shadow: inset 0 0 0 1px ${props.theme.palette.primary.main};
        cursor: pointer;
    `;
}

const IconButton = styled(IconButtonBase).withConfig({
    shouldForwardProp: (property, defaultValidatorFunction) =>
        !['height', 'radius', 'spacing', 'variant'].includes(property) &&
        defaultValidatorFunction(property),
})(applyStyles);

export default IconButton;
