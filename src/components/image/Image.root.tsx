import styled, { css } from 'styled-components';
import type { ThemedStyledProps } from 'styled-components';

import { Utils } from '../../shared';
import type { TTheme } from '../../utilities/theme';
import Spacing, { applyPadding } from '../../utilities/spacing';
import { applyShape } from '../../foundations/shape';

import type { PImageRoot } from './Image.props';

const ImageRoot = styled.img.withConfig<PImageRoot>({
    shouldForwardProp: (property, validator) =>
        Utils.blockProperty(property) && validator(property),
})((props: ThemedStyledProps<PImageRoot, TTheme>) => {
    const {
        theme: {
            palette: { background, text },
        },
        width,
        height,
        radius,
        thumbnail,
    } = props;

    const thumbnailStyles = thumbnail
        ? css`
              background-color: ${background.main};
              border: 1px solid ${text.secondary};

              ${applyPadding(Spacing.all(50))};
              ${applyShape({ radius })};
          `
        : null;

    return css`
        display: block;
        margin: auto;

        ${thumbnailStyles}

        ${applyShape({
            width,
            height,
            radius,
        })};
    `;
});

export default ImageRoot;
