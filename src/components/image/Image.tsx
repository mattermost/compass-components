import styled, { css, ThemedStyledProps } from 'styled-components/ts3.6';

import { TTheme } from '../../foundations/theme-provider/themes/theme.types';
import { applyShape } from '../../foundations/shape/Shape.mixins';

import { PImage } from './Image.props';
import ImageBase from './Image.base';

const Image = styled(ImageBase)<PImage>(
    ({
        theme: { background, text },
        size,
        width,
        height,
        radius,
        thumbnail,
    }: ThemedStyledProps<PImage, TTheme>) => {
        const thumbnailStyles = thumbnail
            ? css`
                  padding: 0.25rem;
                  background-color: ${background.default};
                  border: 1px solid ${text.disabled};
                  border-radius: ${radius};
              `
            : null;

        return css`
            display: block;
            margin: auto;
            width: ${size === 'full' ? '100%' : width};
            height: ${size === 'full' ? 'auto' : height};

            ${thumbnailStyles}

            ${applyShape({ width, height, radius })};
        `;
    }
);

export default Image;
