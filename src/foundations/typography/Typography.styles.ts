import styled from 'styled-components';

import { PStyledTypography } from './Typography.props';

const getMargin = (props: PStyledTypography): string => {
    const { gutter, type, size } = props;

    switch (true) {
        case gutter === 'none':
            return '0';
        case gutter === 'top':
            return `var(--${type}-margin-top-${size}) 0 0`;
        case gutter === 'bottom':
            return `0 0 var(--${type}-margin-bottom-${size})`;
        case gutter === 'both':
        default:
            return `var(--${type}-margin-top-${size}) 0 var(--${type}-margin-bottom-${size})`;
    }
};

const StyledTypography = styled.p<PStyledTypography>`
    font-family: ${(props: PStyledTypography): string => `var(--${props.type}-font-family)`};
    font-size: ${(props: PStyledTypography): string =>
        `var(--${props.type}-font-size-${props.size})`};
    font-weight: ${(props: PStyledTypography): number => props.weight};
    line-height: ${(props: PStyledTypography): string =>
        `var(--${props.type}-line-height-${props.size})`};
    color: ${(props: PStyledTypography): string => `var(--${props.color}-text-color, #000000)`};
    margin: ${(props: PStyledTypography): string => getMargin(props)};
`;

export default StyledTypography;
