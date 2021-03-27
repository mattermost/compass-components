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
    // define local variables using global variables and fallbacks
    --colour-primary-rgb: var(--button-colour-primary-rgb, 61, 60, 64);
    --colour-inverted-primary-rgb: var(--button-colour-inverted-primary-rgb, 255, 255, 255);

    --colour-secondary-rgb: var(--button-colour-secondary-rgb, 22, 109, 224);
    --colour-inverted-secondary-rgb: var(--button-colour-inverted-secondary-rgb, 20, 93, 191);

    --colour-focus-rgb: var(--button-colour-focus-rgb, 22, 109, 224);
    --colour-inverted-focus-rgb: var(--button-colour-inverted-focus-rgb, 87, 158, 255);

    --colour-destructive-rgb: var(--button-colour-destructive-rgb, 247, 67, 67);
    --colour-inverted-destructive-rgb: var(--button-colour-inverted-destructive-rgb, 247, 67, 67);

    // element container base styles
    align-items: center;
    background: transparent;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    display: inline-flex;
    height: 40px;
    justify-content: center;
    min-width: 40px;
    outline: none;
    overflow: hidden;
    padding: 0 10px;
    position: relative;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    // sub elements
    .IconButton_icon,
    .IconButton_label {
        color: rgba(var(--colour-primary-rgb), 0.56);
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
        background: rgba(var(--colour-primary-rgb), 0.08);
    }
    &::after {
        opacity: 0;
        border: solid 2px rgba(var(--colour-focus-rgb), 1);
    }

    // states
    &:hover {
        .IconButton_icon,
        .IconButton_label {
            color: rgba(var(--colour-primary-rgb), 0.72);
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

    &:active {
        .IconButton_icon,
        .IconButton_label {
            color: rgba(var(--colour-secondary-rgb), 1);
        }
        &::before {
            background: rgba(var(--colour-secondary-rgb), 0.08);
            opacity: 1;
        }
    }

    &[data-inverted='true'] {
        .IconButton_icon,
        .IconButton_label {
            color: rgba(var(--colour-inverted-primary-rgb), 0.64);
        }
        &::before {
            background: rgba(var(--colour-inverted-primary-rgb), 0.08);
        }
        &::after {
            border: solid 2px rgba(var(--colour-inverted-focus-rgb), 1);
        }
        &:hover {
            .IconButton_icon,
            .IconButton_label {
                color: rgba(var(--colour-inverted-primary-rgb), 1);
            }
        }
        &:active {
            &::before {
                background: rgba(var(--colour-inverted-primary-rgb), 0.16);
            }
        }
    }

    // variations
    &[data-toggled='true']:not([disabled]):not([data-destructive='true']) {
        .IconButton_icon,
        .IconButton_label {
            color: rgba(var(--colour-inverted-primary-rgb), 1);
        }
        &::before {
            background: rgba(var(--colour-secondary-rgb), 1);
            opacity: 1;
        }
        &::after {
            border: solid 2px rgba(var(--colour-inverted-focus-rgb), 1);
        }
        &:hover {
            &::before {
                background: rgba(var(--colour-secondary-rgb), 0.92);
            }
        }
        &:active {
            .IconButton_icon,
            .IconButton_label {
                color: rgba(var(--colour-secondary-rgb), 1);
            }
            &::before {
                background: rgba(var(--colour-secondary-rgb), 0.08);
            }
        }

        &[data-inverted='true'] {
            .IconButton_icon,
            .IconButton_label {
                color: rgba(var(--colour-inverted-secondary-rgb), 1);
            }
            &::before {
                background: rgba(var(--colour-inverted-primary-rgb), 1);
            }
            &:hover {
                &::before {
                    background: rgba(var(--colour-inverted-primary-rgb), 0.92);
                }
            }
            &:active {
                .IconButton_icon,
                .IconButton_label {
                    color: rgba(var(--colour-inverted-primary-rgb), 1);
                }
                &::before {
                    background: rgba(var(--colour-inverted-primary-rgb), 0.08);
                }
            }
        }
    }

    &[data-destructive='true']:not([disabled]) {
        .IconButton_icon,
        .IconButton_label {
            color: rgba(var(--colour-destructive-rgb), 1);
        }

        &::after {
            border-color: rgba(var(--colour-destructive-rgb), 1);
        }

        &:hover {
            &::before {
                background: rgba(var(--colour-destructive-rgb), 0.08);
            }
        }

        &:active {
            &::before {
                background: rgba(var(--colour-destructive-rgb), 0.16);
            }
        }

        &[data-inverted='true'] {
            .IconButton_icon,
            .IconButton_label {
                color: rgba(var(--colour-inverted-primary-rgb), 0.64);
            }
            &:hover {
                .IconButton_icon,
                .IconButton_label {
                    color: rgba(var(--colour-inverted-primary-rgb), 1);
                }
                &::before {
                    background: rgba(var(--colour-inverted-destructive-rgb), 0.8);
                }
            }
            &:active {
                &::before {
                    background: rgba(var(--colour-destructive-rgb), 1);
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
                color: rgba(var(--colour-primary-rgb), 0.32);
            }

            &::before,
            &::after {
                opacity: 0;
            }
        }
        &[data-inverted='true'] {
            .IconButton_icon,
            .IconButton_label {
                color: rgba(var(--colour-inverted-primary-rgb), 0.32);
            }
        }
    }

    // define sizes
    ${ICON_BUTTON_SIZES.map((iconSize) => generateSizingStyles(iconSize))}

    // animation
        body.enable-animations & {
        &::before {
            transition: opacity var(--animation-speed) 0s ease-in-out,
                background var(--animation-speed) 0s ease-in-out;
        }
        &::after {
            transition: opacity var(--animation-speed) 0s ease-in-out;
        }
    }
`;

export default StyledIconButton;
