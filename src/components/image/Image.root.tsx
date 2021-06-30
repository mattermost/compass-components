import styled, { css } from 'styled-components';
import { ThemedStyledProps } from 'styled-components/ts3.6';

import { Utils } from '../../shared';
import { TTheme } from '../../utilities/theme';
import Spacing from '../../utilities/spacing';
import { applyPadding } from '../../utilities/layout';
import { applyShape } from '../../foundations/shape';

import { PImageRoot } from './Image.props';

const ImageRoot = styled.img.withConfig<PImageRoot>({
    shouldForwardProp: Utils.forwardProperties(),
})(
    ({
        theme: { background, border },
        width,
        height,
        radius,
        thumbnail,
    }: ThemedStyledProps<PImageRoot, TTheme>) => {
        const thumbnailStyles = thumbnail
            ? css`
                  background-color: ${background.default};
                  border: 1px solid ${border.disabled};

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
    }
);

export default ImageRoot;
