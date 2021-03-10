import { css } from 'styled-components';

const baseGutter = 8;
const baseLineHeight = baseGutter * 2.5;

const bodyFontSizes: Record<string, number> = {
    25: baseGutter * 1.25,
    50: baseGutter * 1.375,
    75: baseGutter * 1.5,
    100: baseGutter * 1.75,
    200: baseGutter * 2,
    300: baseGutter * 2.25,
};

const headingFontSizes: Record<string, number> = {
    ...bodyFontSizes,
    400: baseGutter * 2.5,
    500: baseGutter * 2.75,
    600: baseGutter * 3.125,
    700: baseGutter * 4,
    1000: baseGutter * 5,
};

const getMargin = (fontSize: number, multiplier: number): number =>
    Math.round((fontSize * multiplier) / 4) * 4;

const GlobalFontStyles = css`
    --body-font-family: “Open Sans”, sans-serif;
    --heading-font-family: Metropolis, sans-serif;

    --base-font-size: ${baseGutter * 1.75}px;
    --base-line-height: ${baseGutter * 2.5}px;

    --body-font-size-25: ${bodyFontSizes[25]}px;
    --body-font-size-50: ${bodyFontSizes[50]}px;
    --body-font-size-75: ${bodyFontSizes[75]}px;
    --body-font-size-100: ${bodyFontSizes[100]}px;
    --body-font-size-200: ${bodyFontSizes[200]}px;
    --body-font-size-300: ${bodyFontSizes[300]}px;

    --body-line-height-25: ${baseLineHeight * 0.8}px;
    --body-line-height-50: ${baseLineHeight * 0.8}px;
    --body-line-height-75: ${baseLineHeight * 0.8}px;
    --body-line-height-100: ${baseLineHeight}px;
    --body-line-height-200: ${baseLineHeight * 1.2}px;
    --body-line-height-300: ${baseLineHeight * 1.4}px;

    --body-margin-top-25: ${Math.min(getMargin(bodyFontSizes[25], 0.75), 8)}px;
    --body-margin-top-50: ${Math.min(getMargin(bodyFontSizes[50], 0.75), 8)}px;
    --body-margin-top-75: ${Math.min(getMargin(bodyFontSizes[75], 0.75), 8)}px;
    --body-margin-top-100: ${Math.min(getMargin(bodyFontSizes[100], 0.75), 8)}px;
    --body-margin-top-200: ${Math.min(getMargin(bodyFontSizes[200], 0.75), 8)}px;
    --body-margin-top-300: ${Math.min(getMargin(bodyFontSizes[300], 0.75), 8)}px;

    --body-margin-bottom-25: ${Math.min(getMargin(bodyFontSizes[25], 0.75), 8)}px;
    --body-margin-bottom-50: ${Math.min(getMargin(bodyFontSizes[50], 0.75), 8)}px;
    --body-margin-bottom-75: ${Math.min(getMargin(bodyFontSizes[75], 0.75), 8)}px;
    --body-margin-bottom-100: ${Math.min(getMargin(bodyFontSizes[100], 0.75), 8)}px;
    --body-margin-bottom-200: ${Math.min(getMargin(bodyFontSizes[200], 0.75), 8)}px;
    --body-margin-bottom-300: ${Math.min(getMargin(bodyFontSizes[300], 0.75), 8)}px;

    --heading-font-size-25: ${headingFontSizes[25]}px;
    --heading-font-size-50: ${headingFontSizes[50]}px;
    --heading-font-size-75: ${headingFontSizes[75]}px;
    --heading-font-size-100: ${headingFontSizes[100]}px;
    --heading-font-size-200: ${headingFontSizes[200]}px;
    --heading-font-size-300: ${headingFontSizes[300]}px;
    --heading-font-size-400: ${headingFontSizes[400]}px;
    --heading-font-size-500: ${headingFontSizes[500]}px;
    --heading-font-size-600: ${headingFontSizes[600]}px;
    --heading-font-size-700: ${headingFontSizes[700]}px;
    --heading-font-size-1000: ${headingFontSizes[1000]}px;

    --heading-line-height-25: ${baseLineHeight * 0.8}px;
    --heading-line-height-50: ${baseLineHeight * 0.8}px;
    --heading-line-height-75: ${baseLineHeight * 0.8}px;
    --heading-line-height-100: ${baseLineHeight}px;
    --heading-line-height-200: ${baseLineHeight * 1.2}px;
    --heading-line-height-300: ${baseLineHeight * 1.2}px;
    --heading-line-height-400: ${baseLineHeight * 1.4}px;
    --heading-line-height-500: ${baseLineHeight * 1.4}px;
    --heading-line-height-600: ${baseLineHeight * 1.5}px;
    --heading-line-height-700: ${baseLineHeight * 2}px;
    --heading-line-height-1000: ${baseLineHeight * 2.4}px;

    --heading-margin-top-25: ${Math.min(getMargin(headingFontSizes[25], 1.125), 8)}px;
    --heading-margin-top-50: ${Math.min(getMargin(headingFontSizes[50], 1.125), 8)}px;
    --heading-margin-top-75: ${Math.min(getMargin(headingFontSizes[75], 1.125), 8)}px;
    --heading-margin-top-100: ${Math.min(getMargin(headingFontSizes[100], 1.125), 8)}px;
    --heading-margin-top-200: ${Math.min(getMargin(headingFontSizes[200], 1.125), 8)}px;
    --heading-margin-top-300: ${Math.min(getMargin(headingFontSizes[300], 1.125), 8)}px;
    --heading-margin-top-400: ${Math.min(getMargin(headingFontSizes[400], 1.125), 8)}px;
    --heading-margin-top-500: ${Math.min(getMargin(headingFontSizes[500], 1.125), 8)}px;
    --heading-margin-top-600: ${Math.min(getMargin(headingFontSizes[600], 1.125), 8)}px;
    --heading-margin-top-700: ${Math.min(getMargin(headingFontSizes[700], 1.125), 8)}px;
    --heading-margin-top-1000: ${Math.min(getMargin(headingFontSizes[1000], 1.125), 8)}px;

    --heading-margin-bottom-25: ${Math.min(getMargin(headingFontSizes[25], 0.5), 8)}px;
    --heading-margin-bottom-50: ${Math.min(getMargin(headingFontSizes[50], 0.5), 8)}px;
    --heading-margin-bottom-75: ${Math.min(getMargin(headingFontSizes[75], 0.5), 8)}px;
    --heading-margin-bottom-100: ${Math.min(getMargin(headingFontSizes[100], 0.5), 8)}px;
    --heading-margin-bottom-200: ${Math.min(getMargin(headingFontSizes[200], 0.5), 8)}px;
    --heading-margin-bottom-300: ${Math.min(getMargin(headingFontSizes[300], 0.5), 8)}px;
    --heading-margin-bottom-400: ${Math.min(getMargin(headingFontSizes[400], 0.5), 8)}px;
    --heading-margin-bottom-500: ${Math.min(getMargin(headingFontSizes[500], 0.5), 8)}px;
    --heading-margin-bottom-600: ${Math.min(getMargin(headingFontSizes[600], 0.5), 8)}px;
    --heading-margin-bottom-700: ${Math.min(getMargin(headingFontSizes[700], 0.5), 8)}px;
    --heading-margin-bottom-1000: ${Math.min(getMargin(headingFontSizes[1000], 0.5), 8)}px;

    --primary-text-color: #333;
    --secondary-text-color: #787878;
`;

export default GlobalFontStyles;
