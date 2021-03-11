import { css } from 'styled-components';

const VBorderRadius = css`
    --border-radius-0: 0;
    --border-radius-4: var(--size-25);
    --border-radius-8: var(--size-50);
    --border-radius-12: calc(var(--size-50) * 1.5);
    --border-radius-16: var(--size-100);
    --border-radius-20: calc(var(--size-50) * 2.5);
    --border-radius-24: var(--size-150);
    --border-radius-circle: 50%;
    // setting a big value renders a pill-shape border-radius
    --border-radius-pill: 10000px;
`;

export default VBorderRadius;
