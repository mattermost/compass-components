import styled from 'styled-components';

const STypography = styled.p`
    font-family: var(--typography-font-family, var(--body-font-family, Arial, sans-serif));
    font-size: var(--typography-font-size, var(--base-font-size, 14px));
    font-weight: var(--typography-font-weight, inherit);
    line-height: var(--typography-line-height, var(--base-line-height, 20px));
    color: var(--typography-color, var(--primary-text-color, black));
    margin: var(--typography-margin, 8px 0);
`;

export default STypography;
