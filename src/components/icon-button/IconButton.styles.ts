import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation } from 'styled-components/ts3.6';

import { TIconButtonSize } from './IconButton.types';
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

const StyledIconButton = styled.button`
    // define component colours
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
        --colour-foreground: rgba(var(--colour-primary-rgb), 0.32);

        &[data-inverted='true'] {
            --colour-foreground: rgba(var(--colour-inverted-primary-rgb), 0.32);
        }
    }

    &:not([disabled]) {
        &:hover {
            --colour-foreground: rgba(var(--colour-primary-rgb), 0.72);
            --colour-background: rgba(var(--colour-primary-rgb), 0.08);
        }

        &:active {
            --colour-foreground: rgb(var(--colour-secondary-rgb));
            --colour-background: rgba(var(--colour-secondary-rgb), 0.08);
        }

        &[data-destructive='true'] {
            --colour-foreground: rgb(var(--colour-destructive-rgb));
            --colour-border: rgb(var(--colour-destructive-rgb));

            &:hover {
                --colour-background: rgba(var(--colour-destructive-rgb), 0.08);
            }

            &:active {
                --colour-background: rgba(var(--colour-destructive-rgb), 0.16);
            }
        }

        &[data-toggled='true']:not([data-destructive='true']) {
            --colour-foreground: rgb(var(--colour-inverted-primary-rgb));
            --colour-background: rgb(var(--colour-secondary-rgb));
            --colour-border: rgb(var(--colour-inverted-focus-rgb));

            &:hover {
                --colour-background: rgba(var(--colour-secondary-rgb), 0.92);
            }

            &:active {
                --colour-foreground: rgb(var(--colour-secondary-rgb));
                --colour-background: rgba(var(--colour-secondary-rgb), 0.08);
            }
        }

        &[data-inverted='true'] {
            --colour-foreground: rgba(var(--colour-inverted-primary-rgb), 0.64);
            --colour-border: rgb(var(--colour-inverted-focus-rgb));

            &:hover {
                --colour-foreground: rgb(var(--colour-inverted-primary-rgb));
                --colour-background: rgba(var(--colour-inverted-primary-rgb), 0.08);
            }

            &:active {
                --colour-background: rgba(var(--colour-inverted-primary-rgb), 0.16);
            }

            &[data-destructive='true'] {
                --colour-border: rgb(var(--colour-destructive-rgb));

                &:hover {
                    --colour-foreground: rgb(var(--colour-inverted-primary-rgb));
                    --colour-background: rgba(var(--colour-destructive-rgb), 0.8);
                }

                &:active {
                    --colour-background: rgb(var(--colour-destructive-rgb));
                }
            }

            &[data-toggled='true']:not([data-destructive='true']) {
                --colour-foreground: rgb(var(--colour-secondary-rgb));
                --colour-background: rgb(var(--colour-inverted-primary-rgb));
                --colour-border: rgb(var(--colour-inverted-focus-rgb));

                &:hover {
                    --colour-background: rgba(var(--colour-inverted-primary-rgb), 0.92);
                }

                &:active {
                    --colour-foreground: rgb(var(--colour-inverted-primary-rgb));
                    --colour-background: rgba(var(--colour-inverted-primary-rgb), 0.16);
                }
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
