import { css } from 'styled-components';

const GlobalFontStyles = css`
    --body-font-family: “Open Sans”, sans-serif;
    --heading-font-family: Metropolis, sans-serif;

    --base-font-size: 14px;
    --base-line-height: 20px;

    --body-font-size-25: 10px;
    --body-font-size-50: 11px;
    --body-font-size-75: 12px;
    --body-font-size-100: var(--base-font-size, 14px);
    --body-font-size-200: 16px;
    --body-font-size-300: 18px;

    --body-line-height-25: calc(var(--base-line-height, 20px) * 0.8);
    --body-line-height-50: calc(var(--base-line-height, 20px) * 0.8);
    --body-line-height-75: calc(var(--base-line-height, 20px) * 0.8);
    --body-line-height-100: var(--base-line-height, 20px);
    --body-line-height-200: calc(var(--base-line-height, 20px) * 1.2);
    --body-line-height-300: calc(var(--base-line-height, 20px) * 1.4);

    --heading-font-size-25: var(--body-font-size-25, 10px);
    --heading-font-size-50: var(--body-font-size-50, 11px);
    --heading-font-size-75: var(--body-font-size-75, 12px);
    --heading-font-size-100: var(--body-font-size-100, 14px);
    --heading-font-size-200: var(--body-font-size-200, 16px);
    --heading-font-size-300: var(--body-font-size-300, 18px);
    --heading-font-size-400: 20px;
    --heading-font-size-500: 22px;
    --heading-font-size-600: 25px;
    --heading-font-size-700: 32px;
    --heading-font-size-1000: 40px;

    --heading-line-height-25: var(--body-line-height-25, 16px);
    --heading-line-height-50: var(--body-line-height-50, 16px);
    --heading-line-height-75: var(--body-line-height-75, 16px);
    --heading-line-height-100: var(--body-line-height-100, 20px);
    --heading-line-height-200: var(--body-line-height-200, 24px);
    --heading-line-height-300: var(--body-line-height-200, 24px);
    --heading-line-height-400: calc(var(--base-line-height, 20px) * 1.4);
    --heading-line-height-500: calc(var(--base-line-height, 20px) * 1.4);
    --heading-line-height-600: calc(var(--base-line-height, 20px) * 1.5);
    --heading-line-height-700: calc(var(--base-line-height, 20px) * 2);
    --heading-line-height-1000: calc(var(--base-line-height, 20px) * 2.4);

    --primary-text-color: #333;
    --secondary-text-color: #787878;
`;

export default GlobalFontStyles;
