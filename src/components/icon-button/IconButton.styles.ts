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

function getRBGColour({ colour, opacity }: IconButtonLayer): string {
    if (opacity && opacity >= 0 && opacity < 1) {
        return `rgba(var(${colour}), ${opacity})`;
    }

    return `rgb(var(${colour}))`;
}

function getLayerColours(layer: IconButtonLayer): string {
    return `--colour-${layer.name}: ${getRBGColour(layer)};`;
}

function generateStateStyles(stateStyles: IconButtonState[]): FlattenSimpleInterpolation {
    return css`
        ${stateStyles
            .map(({ selector, layers }: IconButtonState) => {
                if (selector === 'base') {
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
    // set component colours
    --colour-primary-rgb: var(--button-colour-primary-rgb, 61, 60, 64);
    --colour-inverted-primary-rgb: var(--button-colour-inverted-primary-rgb, 255, 255, 255);
    --colour-secondary-rgb: var(--button-colour-secondary-rgb, 22, 109, 224);
    --colour-inverted-secondary-rgb: var(--button-colour-inverted-secondary-rgb, 20, 93, 191);
    --colour-focus-rgb: var(--button-colour-focus-rgb, 22, 109, 224);
    --colour-inverted-focus-rgb: var(--button-colour-inverted-focus-rgb, 87, 158, 255);
    --colour-destructive-rgb: var(--button-colour-destructive-rgb, 247, 67, 67);

    // set component variable defaults
    --colour-foreground: rgba(var(--colour-primary-rgb), 0.56);
    --colour-background: transparent;
    --colour-border: rgb(var(--colour-focus-rgb));
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
    color: var(--colour-foreground);
    background: var(--colour-background);
    border: solid 2px transparent;
    cursor: pointer;
    padding: 0 var(--horizontal-padding);

    &:focus {
        border-color: var(--colour-border);
    }
    &:focus:not(:focus-visible) {
        border-color: transparent;
    }
    &:focus-visible {
        border-color: var(--colour-border);
    }

    &[disabled] {
        cursor: not-allowed;
    }

    // default child element styles
    .IconButton_icon {
        --icon-color-foreground: var(--colour-foreground);
    }
    .IconButton_label {
        color: var(--colour-foreground);
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
                selector: 'base',
                layers: [{ name: 'foreground', colour: '--colour-primary-rgb', opacity: 0.32 }],
            },
        ])}

        &[data-inverted='true'] {
            ${generateStateStyles([
                {
                    selector: 'base',
                    layers: [
                        {
                            name: 'foreground',
                            colour: '--colour-inverted-primary-rgb',
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
                    { name: 'foreground', colour: '--colour-primary-rgb', opacity: 0.72 },
                    { name: 'background', colour: '--colour-primary-rgb', opacity: 0.08 },
                ],
            },
            {
                selector: 'active',
                layers: [
                    { name: 'foreground', colour: '--colour-secondary-rgb' },
                    { name: 'background', colour: '--colour-secondary-rgb', opacity: 0.08 },
                ],
            },
        ])}

        &[data-destructive='true'] {
            ${generateStateStyles([
                {
                    selector: 'base',
                    layers: [
                        { name: 'foreground', colour: '--colour-destructive-rgb' },
                        { name: 'border', colour: '--colour-destructive-rgb' },
                    ],
                },
                {
                    selector: 'hover',
                    layers: [
                        {
                            name: 'background',
                            colour: '--colour-destructive-rgb',
                            opacity: 0.08,
                        },
                    ],
                },
                {
                    selector: 'active',
                    layers: [
                        {
                            name: 'background',
                            colour: '--colour-destructive-rgb',
                            opacity: 0.16,
                        },
                    ],
                },
            ])}
        }

        &[data-toggled='true']:not([data-destructive='true']) {
            ${generateStateStyles([
                {
                    selector: 'base',
                    layers: [
                        { name: 'foreground', colour: '--colour-inverted-primary-rgb' },
                        { name: 'background', colour: '--colour-secondary-rgb' },
                        { name: 'border', colour: '--colour-inverted-focus-rgb' },
                    ],
                },
                {
                    selector: 'hover',
                    layers: [
                        {
                            name: 'background',
                            colour: '--colour-secondary-rgb',
                            opacity: 0.92,
                        },
                    ],
                },
                {
                    selector: 'active',
                    layers: [
                        { name: 'foreground', colour: '--colour-secondary-rgb' },
                        {
                            name: 'background',
                            colour: '--colour-secondary-rgb',
                            opacity: 0.08,
                        },
                    ],
                },
            ])}
        }

        &[data-inverted='true'] {
            ${generateStateStyles([
                {
                    selector: 'base',
                    layers: [
                        {
                            name: 'foreground',
                            colour: '--colour-inverted-primary-rgb',
                            opacity: 0.64,
                        },
                        { name: 'border', colour: '--colour-inverted-focus-rgb' },
                    ],
                },
                {
                    selector: 'hover',
                    layers: [
                        { name: 'foreground', colour: '--colour-inverted-primary-rgb' },
                        {
                            name: 'background',
                            colour: '--colour-inverted-primary-rgb',
                            opacity: 0.08,
                        },
                    ],
                },
                {
                    selector: 'active',
                    layers: [
                        {
                            name: 'background',
                            colour: '--colour-inverted-primary-rgb',
                            opacity: 0.16,
                        },
                    ],
                },
            ])}

            &[data-destructive='true'] {
                ${generateStateStyles([
                    {
                        selector: 'base',
                        layers: [{ name: 'border', colour: '--colour-destructive-rgb' }],
                    },
                    {
                        selector: 'hover',
                        layers: [
                            { name: 'foreground', colour: '--colour-inverted-primary-rgb' },
                            {
                                name: 'background',
                                colour: '--colour-destructive-rgb',
                                opacity: 0.8,
                            },
                        ],
                    },
                    {
                        selector: 'active',
                        layers: [{ name: 'background', colour: '--colour-destructive-rgb' }],
                    },
                ])}
            }

            &[data-toggled='true']:not([data-destructive='true']) {
                ${generateStateStyles([
                    {
                        selector: 'base',
                        layers: [
                            { name: 'foreground', colour: '--colour-secondary-rgb' },
                            { name: 'background', colour: '--colour-inverted-primary-rgb' },
                            { name: 'border', colour: '--colour-inverted-focus-rgb' },
                        ],
                    },
                    {
                        selector: 'hover',
                        layers: [
                            {
                                name: 'background',
                                colour: '--colour-inverted-primary-rgb',
                                opacity: 0.92,
                            },
                        ],
                    },
                    {
                        selector: 'active',
                        layers: [
                            { name: 'foreground', colour: '--colour-inverted-primary-rgb' },
                            {
                                name: 'background',
                                colour: '--colour-inverted-primary-rgb',
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
