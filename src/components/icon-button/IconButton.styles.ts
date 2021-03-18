import styled from 'styled-components';

import { TIconButtonSize } from './IconButton.types';
import { PStyledIconButton } from './IconButton.props';

// eslint-disable-next-line max-params
function generateSizeStyles(
    sizeLabel: TIconButtonSize,
    size: number,
    padding: number,
    spacing: number
): string {
    return `
        &[data-size="${sizeLabel}"] {
            padding: 0 ${padding}px;
            min-width: ${size}px;
            height: ${size}px;

            .IconButton_icon + .IconButton_label {
                margin-left: ${spacing}px;
            }
        }
    `;
}

const StyledIconButton = styled.button<PStyledIconButton>`
    --button-text-normal-rgb: var(--button-text-normal-rgb-default, 61, 60, 64);
    --button-text-active-rgb: var(--button-text-active-rgb-default, 22, 109, 224);
    --button-text-destructive-rgb: var(--button-text-destructive-rgb-default, 247, 67, 67);
    --button-background-normal-rgb: var(--button-background-normal-rgb-default, 61, 60, 64);
    --button-background-active-rgb: var(--button-background-active-rgb-default, 22, 109, 224);
    --button-border-rgb: var(--button-border-rgb-default, 22, 109, 224);

    &.IconButton {
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
            color: rgba(var(--button-text-normal-rgb), 0.56);
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
            background: rgba(var(--button-background-normal-rgb), 0.08);
        }
        &::after {
            opacity: 0;
            border: solid 2px rgba(var(--button-border-rgb), 1);
        }

        // states
        &:hover {
            .IconButton_icon,
            .IconButton_label {
                color: rgba(var(--button-text-normal-rgb), 0.72);
            }
            &::before {
                opacity: 1;
            }
        }
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
                color: rgb(var(--button-text-active-rgb));
            }
            &::before {
                background: rgba(var(--button-background-active-rgb), 0.08);
                opacity: 1;
            }
            &:hover {
                &::before {
                    background: rgba(var(--button-background-active-rgb), 0.16);
                }
            }
        }

        // variations
        &[data-destructive='true']:not([disabled]) {
            .IconButton_icon,
            .IconButton_label {
                color: rgb(var(--button-text-destructive-rgb));
            }

            &::after {
                border-color: rgba(var(--button-text-destructive-rgb), 1);
            }

            &:active {
                &::before {
                    background: rgba(var(--button-text-destructive-rgb), 0.08);
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
                    color: rgba(var(--button-text-normal-rgb), 0.32);
                }

                &::before,
                &::after {
                    opacity: 0;
                }
            }
        }

        // sizes (xsmall, small, small-compact, standard, large)
        ${generateSizeStyles('xsmall', 24, 6, 4)}

        ${generateSizeStyles('small', 32, 8, 4)}
    
        ${generateSizeStyles('small-compact', 28, 6, 4)}
    
        ${generateSizeStyles('standard', 40, 10, 6)}
    
        ${generateSizeStyles('large', 48, 10, 6)}
    
        // animation
        .enable-animations & {
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
