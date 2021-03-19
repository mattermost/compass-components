import styled from 'styled-components';

import { TIconButtonSize } from './IconButton.types';
import {
    ICON_BUTTON_SIZES,
    ICON_BUTTON_DIMENSIONS,
    ICON_BUTTON_PADDING,
    ICON_BUTTON_SPACING,
} from './IconButton.constants';

function generateSizingStyles(size: TIconButtonSize): string {
    return `
        &[data-size="${size}"] {
            padding: 0 ${ICON_BUTTON_PADDING[size]}px;
            min-width: ${ICON_BUTTON_DIMENSIONS[size]}px;
            height: ${ICON_BUTTON_DIMENSIONS[size]}px;

            .IconButton_icon + .IconButton_label {
                margin-left: ${ICON_BUTTON_SPACING[size]}px;
            }
        }
    `;
}

const StyledIconButton = styled.button`
    &.IconButton {
        // define local variables using global variables and fallbacks
        --normal-text-rgb: var(--button-normal-text-rgb, 61, 60, 64);
        --active-text-rgb: var(--button-active-text-rgb, 22, 109, 224);
        --normal-background-rgb: var(--button-normal-background-rgb, 61, 60, 64);
        --active-background-rgb: var(--button-active-background-rgb, 22, 109, 224);
        --border-rgb: var(--button-border-rgb, 22, 109, 224);
        --destructive-rgb: var(--button-destructive-rgb, 247, 67, 67);
        --speed-shortest: var(--animation-speed-shortest, 0.1s);

        // element container base styles
        display: inline-flex;
        justify-content: center;
        align-items: center;
        position: relative;
        padding: 0 10px;
        min-width: 40px;
        height: 40px;
        border-radius: 4px;
        border: none;
        outline: none;
        background: transparent;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        overflow: hidden;
        cursor: pointer;

        // sub elements
        .IconButton_icon,
        .IconButton_label {
            color: rgba(var(--normal-text-rgb), 0.56);
        }
        .IconButton_icon + .IconButton_label {
            margin-left: 6px;
        }

        // - ::before for fill, ::after for border
        &::before,
        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            border-radius: 4px;
            border: none;
            background: transparent;
            z-index: 0;
            pointer-events: none;
        }
        &::before {
            opacity: 0;
            background: rgba(var(--normal-background-rgb), 0.08);
        }
        &::after {
            opacity: 0;
            border: solid 2px rgba(var(--border-rgb), 1);
        }

        // states
        &:hover {
            .IconButton_icon,
            .IconButton_label {
                color: rgba(var(--normal-text-rgb), 0.72);
            }
            &::before {
                opacity: 1;
            }
        }

        // - only applies focus using keyboard in newer browsers, fallback is standard behaviour
        &:focus {
            &::after {
                opacity: 1;
            }
        }
        &:focus:not(:focus-visible) {
            &::after {
                opacity: 0;
            }
        }
        &:focus-visible {
            &::after {
                opacity: 1;
            }
        }

        &:active,
        &[data-toggled='true'] {
            .IconButton_icon,
            .IconButton_label {
                color: rgb(var(--active-text-rgb));
            }
            &::before {
                background: rgba(var(--active-background-rgb), 0.08);
                opacity: 1;
            }
            &:hover {
                &::before {
                    background: rgba(var(--active-background-rgb), 0.16);
                }
            }
        }
        &[data-toggled='true'] {
            &:active {
                &::before {
                    background: rgba(var(--active-background-rgb), 0.08);
                }
            }
        }

        // variations
        &[data-destructive='true']:not([disabled]) {
            .IconButton_icon,
            .IconButton_label {
                color: rgb(var(--destructive-rgb));
            }

            &::after {
                border-color: rgba(var(--destructive-rgb), 1);
            }

            &:active,
            &[data-toggled='true'] {
                &::before {
                    background: rgba(var(--destructive-rgb), 0.08);
                }
                &:hover {
                    &::before {
                        background: rgba(var(--destructive-rgb), 0.16);
                    }
                }
            }
            &[data-toggled='true'] {
                &:active {
                    &::before {
                        background: rgba(var(--destructive-rgb), 0.08);
                    }
                }
            }
        }
        &[disabled] {
            cursor: not-allowed;

            &,
            &:hover,
            &:focus,
            &:focus-visible,
            &:active {
                .IconButton_icon,
                .IconButton_label {
                    color: rgba(var(--normal-text-rgb), 0.32);
                }

                &::before,
                &::after {
                    opacity: 0;
                }
            }
        }

        // define sizes
        ${ICON_BUTTON_SIZES.map((iconSize) => generateSizingStyles(iconSize))}

        // animation
        body.enable-animations & {
            &::before {
                transition: opacity var(--animation-speed-shortest) 0s ease-in-out,
                    background-color var(--animation-speed-shortest) 0s ease-in-out;
            }
            &::after {
                transition: opacity var(--animation-speed-shortest) 0s ease-in-out;
            }
        }
    }
`;

export default StyledIconButton;
