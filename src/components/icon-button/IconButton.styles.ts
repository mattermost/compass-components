import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation } from 'styled-components/ts3.6';

import { TIconButtonSize, IconButtonLayer, IconButtonState } from './IconButton.types';
import {
    ICON_BUTTON_SIZES,
    ICON_BUTTON_DIMENSIONS,
    ICON_BUTTON_PADDING,
    ICON_BUTTON_SPACING,
} from './IconButton.constants';

function generateSizingStyles(size: TIconButtonSize): FlattenSimpleInterpolation {
    return css`
        &[data-size='${size}'] {
            --horizontal-padding: ${ICON_BUTTON_PADDING[size]}px;
            --size: ${ICON_BUTTON_DIMENSIONS[size]}px;
            --child-spacing: ${ICON_BUTTON_SPACING[size]}px;
        }
    `;
}

function getRBGColour({ color, opacity }: IconButtonLayer): string {
    if (opacity && opacity >= 0 && opacity < 1) {
        return `rgba(var(${color}), ${opacity})`;
    }

    return `rgb(var(${color}))`;
}

function getLayerColours(layer: IconButtonLayer): string {
    return `--color-${layer.name}: ${getRBGColour(layer)};`;
}

function generateStateStyles(stateStyles: IconButtonState[]): FlattenSimpleInterpolation {
    return css`
        ${stateStyles
            .map(({ selector, layers }: IconButtonState) => {
                if (!selector) {
                    return `
                        ${layers.map(getLayerColours).join('\n')}
                    `;
                }

                return `
                    &:${selector} {
                        ${layers.map(getLayerColours).join('\n')}
                    }
                `;
            })
            .join('\n')};
    `;
}

const StyledIconButton = styled.button`
    // set component colors
    --color-primary-rgb: var(--button-color-primary-rgb, 61, 60, 64);
    --color-inverted-primary-rgb: var(--button-color-inverted-primary-rgb, 255, 255, 255);
    --color-secondary-rgb: var(--button-color-secondary-rgb, 22, 109, 224);
    --color-inverted-secondary-rgb: var(--button-color-inverted-secondary-rgb, 20, 93, 191);
    --color-focus-rgb: var(--button-color-focus-rgb, 22, 109, 224);
    --color-inverted-focus-rgb: var(--button-color-inverted-focus-rgb, 87, 158, 255);
    --color-destructive-rgb: var(--button-color-destructive-rgb, 247, 67, 67);

    // set component variable defaults
    --color-foreground: rgba(var(--color-primary-rgb), 0.56);
    --color-background: transparent;
    --color-border: rgb(var(--color-focus-rgb));
    --size: 40px;
    --radius-border: 4px;
    --child-spacing: 6px;
    --horizontal-padding: 8px;
    --animation-speed: var(--animation-speed-shortest);

    // default container styles
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    min-width: var(--size);
    height: var(--size);
    border-radius: var(--radius-border);
    color: var(--color-foreground);
    background: var(--color-background);
    border: solid 2px transparent;
    cursor: pointer;
    padding: 0 var(--horizontal-padding);

    &:focus {
        border-color: var(--color-border);
    }
    &:focus:not(:focus-visible) {
        border-color: transparent;
    }
    &:focus-visible {
        border-color: var(--color-border);
    }

    &[disabled] {
        cursor: not-allowed;
    }

    // default child element styles
    .IconButton_icon {
        --icon-color-foreground: var(--color-foreground);
    }
    .IconButton_label {
        color: var(--color-foreground);
    }
    .IconButton_icon + .IconButton_label {
        margin-left: var(--child-spacing);
    }

    // apply variable sizing changes
    ${ICON_BUTTON_SIZES.map(generateSizingStyles)}

    // apply interaction state changes
    &[disabled] {
        ${generateStateStyles([
            {
                layers: [{ name: 'foreground', color: '--color-primary-rgb', opacity: 0.32 }],
            },
        ])}

        &[data-inverted='true'] {
            ${generateStateStyles([
                {
                    layers: [
                        {
                            name: 'foreground',
                            color: '--color-inverted-primary-rgb',
                            opacity: 0.32,
                        },
                    ],
                },
            ])}
        }
    }

    &:not([disabled]) {
        ${generateStateStyles([
            {
                selector: 'hover',
                layers: [
                    { name: 'foreground', color: '--color-primary-rgb', opacity: 0.72 },
                    { name: 'background', color: '--color-primary-rgb', opacity: 0.08 },
                ],
            },
            {
                selector: 'active',
                layers: [
                    { name: 'foreground', color: '--color-secondary-rgb' },
                    { name: 'background', color: '--color-secondary-rgb', opacity: 0.08 },
                ],
            },
        ])}

        &[data-destructive='true'] {
            ${generateStateStyles([
                {
                    layers: [
                        { name: 'foreground', color: '--color-destructive-rgb' },
                        { name: 'border', color: '--color-destructive-rgb' },
                    ],
                },
                {
                    selector: 'hover',
                    layers: [
                        {
                            name: 'background',
                            color: '--color-destructive-rgb',
                            opacity: 0.08,
                        },
                    ],
                },
                {
                    selector: 'active',
                    layers: [
                        {
                            name: 'background',
                            color: '--color-destructive-rgb',
                            opacity: 0.16,
                        },
                    ],
                },
            ])}
        }

        &[data-toggled='true']:not([data-destructive='true']) {
            ${generateStateStyles([
                {
                    layers: [
                        { name: 'foreground', color: '--color-inverted-primary-rgb' },
                        { name: 'background', color: '--color-secondary-rgb' },
                        { name: 'border', color: '--color-inverted-focus-rgb' },
                    ],
                },
                {
                    selector: 'hover',
                    layers: [
                        {
                            name: 'background',
                            color: '--color-secondary-rgb',
                            opacity: 0.92,
                        },
                    ],
                },
                {
                    selector: 'active',
                    layers: [
                        { name: 'foreground', color: '--color-secondary-rgb' },
                        {
                            name: 'background',
                            color: '--color-secondary-rgb',
                            opacity: 0.08,
                        },
                    ],
                },
            ])}
        }

        &[data-inverted='true'] {
            ${generateStateStyles([
                {
                    layers: [
                        {
                            name: 'foreground',
                            color: '--color-inverted-primary-rgb',
                            opacity: 0.64,
                        },
                        { name: 'border', color: '--color-inverted-focus-rgb' },
                    ],
                },
                {
                    selector: 'hover',
                    layers: [
                        { name: 'foreground', color: '--color-inverted-primary-rgb' },
                        {
                            name: 'background',
                            color: '--color-inverted-primary-rgb',
                            opacity: 0.08,
                        },
                    ],
                },
                {
                    selector: 'active',
                    layers: [
                        {
                            name: 'background',
                            color: '--color-inverted-primary-rgb',
                            opacity: 0.16,
                        },
                    ],
                },
            ])}

            &[data-destructive='true'] {
                ${generateStateStyles([
                    {
                        layers: [{ name: 'border', color: '--color-destructive-rgb' }],
                    },
                    {
                        selector: 'hover',
                        layers: [
                            { name: 'foreground', color: '--color-inverted-primary-rgb' },
                            {
                                name: 'background',
                                color: '--color-destructive-rgb',
                                opacity: 0.8,
                            },
                        ],
                    },
                    {
                        selector: 'active',
                        layers: [{ name: 'background', color: '--color-destructive-rgb' }],
                    },
                ])}
            }

            &[data-toggled='true']:not([data-destructive='true']) {
                ${generateStateStyles([
                    {
                        layers: [
                            { name: 'foreground', color: '--color-secondary-rgb' },
                            { name: 'background', color: '--color-inverted-primary-rgb' },
                            { name: 'border', color: '--color-inverted-focus-rgb' },
                        ],
                    },
                    {
                        selector: 'hover',
                        layers: [
                            {
                                name: 'background',
                                color: '--color-inverted-primary-rgb',
                                opacity: 0.92,
                            },
                        ],
                    },
                    {
                        selector: 'active',
                        layers: [
                            { name: 'foreground', color: '--color-inverted-primary-rgb' },
                            {
                                name: 'background',
                                color: '--color-inverted-primary-rgb',
                                opacity: 0.16,
                            },
                        ],
                    },
                ])}
            }
        }
    }

    // apply animation transitions
    body.enable-animations & {
        transition: color var(--animation-speed) 0s ease-in-out,
            border var(--animation-speed) 0s ease-in-out,
            background var(--animation-speed) 0s ease-in-out;
    }
`;

export default StyledIconButton;
