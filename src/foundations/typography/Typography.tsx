import React from 'react';

import TTypographyVariant from './Typography.types';
import STypography from './Typography.styles';

type PTypography = {
    variant: TTypographyVariant;
    color?: 'primary' | 'secondary';
    size?: number;
    useRegular?: boolean;
    gutter?: 'none' | 'top' | 'bottom' | 'both';
    children?: React.ReactNode | React.ReactNode[];
};

const headingTypes: Record<string, number> = {
    h1: 700,
    h2: 600,
    h3: 500,
    h4: 500,
    h5: 500,
    h6: 400,
    subtitle: 300,
};

const fontSizeMapping: Record<string, number> = {
    ...headingTypes,
    body: 300,
};

const Typography = ({
    children,
    variant = 'body',
    color = 'primary',
    size = 300,
    useRegular = false,
    gutter = 'both',
}: PTypography) => {
    const isHeading = Object.keys(headingTypes).includes(variant);
    const fontType = isHeading && size >= 300 ? 'heading' : 'body';
    const fontSize = !size || (!isHeading && size > 300) ? fontSizeMapping[variant] : size;
    const fontWeight = !useRegular && isHeading ? 600 : 400;

    const getComponent = () => {
        switch (true) {
            case variant === 'subtitle':
                return 'h6';
            case isHeading:
                return variant;
            case variant === 'inline':
                return 'span';
            case variant === 'body':
            default:
                return 'p';
        }
    };

    const getStyle = () => {
        const style = {
            '--typography-font-family': `var(--${fontType}-font-family)`,
            '--typography-font-size': `var(--${fontType}-font-size-${fontSize})`,
            '--typography-font-weight': fontWeight,
            '--typography-line-height': `var(--${fontType}-line-height-${fontSize})`,
            '--typography-color': `var(--${color}-text-color)`,
            '--typography-margin': `var(--${fontType}-margin-top-${fontSize}) 0 var(--${fontType}-margin-bottom-${fontSize})`,
        };

        if (isHeading && size >= 300) {
            style['--typography-font-family'] = 'var(--heading-font-family)';
        }

        if (gutter) {
            switch (true) {
                case gutter === 'none':
                    style['--typography-margin'] = '0';
                    break;
                case gutter === 'top':
                    style['--typography-margin'] = `var(--${fontType}-margin-top-${fontSize}) 0 0`;
                    break;
                case gutter === 'bottom':
                    style['--typography-margin'] = `0 0 var(--${fontType}-margin-bottom-${fontSize})`;
                    break;
                case gutter === 'both':
                default:
                    style[
                        '--typography-margin'
                    ] = `var(--${fontType}-margin-top-${fontSize}) 0 var(--${fontType}-margin-bottom-${fontSize})`;
            }
        }

        return style as React.CSSProperties;
    };

    return (
        <STypography as={getComponent()} style={getStyle()}>
            {children}
        </STypography>
    );
};

export type { PTypography };

export default Typography;
