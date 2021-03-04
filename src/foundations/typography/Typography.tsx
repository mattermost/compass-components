import React from 'react';

import { TTypographyVariant } from './Typography.types';
import STypography from './Typography.styles';

type PTypography = {
    variant: TTypographyVariant;
    color?: 'primary' | 'secondary';
    size?: number;
    heading?: boolean;
    component?: 'p';
    children?: React.ReactNode;
};

const headingSizeMapping = {
    25: 'h6',
    50: 'h6',
    75: 'h6',
    100: 'h6',
    200: 'h6',
    300: 'h5',
    400: 'h5',
    500: 'h4',
    600: 'h3',
    700: 'h2',
    1000: 'h1',
};

const Typography = ({ children, component = 'p', color = 'primary', size = 100, heading = false }: PTypography) => {
    const isHeading = heading || size > 300;
    const fontType = isHeading ? 'heading' : 'body';
    const fontSize = !isHeading && size > 300 ? 300 : size;

    const getStyle = () => {
        const style = {
            '--typography-font-family': `var(--${fontType}-font-family)`,
            '--typography-font-size': `var(--${fontType}-font-size-${fontSize})`,
            '--typography-line-height': `var(--${fontType}-line-height-${fontSize})`,
            '--typography-color': `var(--${color}-text-color)`,
        };

        if (isHeading && size > 300) {
            style['--typography-font-family'] = 'var(--heading-font-family)';
        }

        return style as React.CSSProperties;
    };

    return (
        <STypography as={component} style={getStyle()}>
            {children}
        </STypography>
    );
};

export type { PTypography };

export default Typography;
