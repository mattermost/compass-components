import React from 'react';

import StyledTypography from './Typography.styles';
import { PStyledTypography, PTypography } from './Typography.props';
import { FONT_SIZE_MAPPING, HEADING_VARIANTS } from './Typography.constants';

const Typography: React.FC<PTypography> = ({
    children,
    removeLineHeight = false,
    variant = 'body',
    color = 'primary',
    size = 300,
    useRegular = false,
    gutter = 'both',
}: PTypography): JSX.Element => {
    const isHeading = HEADING_VARIANTS.includes(variant);
    const fontType = isHeading && size >= 300 ? 'heading' : 'body';
    const fontSize = !size || (!isHeading && size > 300) ? FONT_SIZE_MAPPING[variant] : size;
    const fontWeight = !useRegular && isHeading ? 600 : 400;

    const getComponent = (): string => {
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

    const styledTypographyProperties: PStyledTypography = {
        color,
        gutter,
        removeLineHeight,
        weight: fontWeight,
        size: fontSize,
        type: fontType,
    };

    // TODO: find a better way to pass a computed component to the `as` property
    return (
        <StyledTypography as={getComponent() as never} {...styledTypographyProperties}>
            {children}
        </StyledTypography>
    );
};

export default Typography;
