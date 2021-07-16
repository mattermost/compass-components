import { RefObject, useEffect } from 'react';

const EVENTS = ['mousedown', 'touchstart'];

export type OnClickAwayCallback = (event: Event) => void;

export const useClickAway = (
    references: Array<RefObject<HTMLElement | null>>,
    onClickAway?: OnClickAwayCallback
): void => {
    useEffect(() => {
        const handler = (event: Event): void => {
            if (onClickAway) {
                const isClickAway = references.every((reference) => {
                    const { current: element } = reference;

                    return element && !element.contains(event.target as Node);
                });

                if (isClickAway) {
                    onClickAway(event);
                }
            }
        };

        if (onClickAway) {
            for (const eventName of EVENTS) {
                document.addEventListener(eventName, handler);
            }
        }

        return (): void => {
            if (onClickAway) {
                for (const eventName of EVENTS) {
                    document.removeEventListener(eventName, handler);
                }
            }
        };
    }, [onClickAway, references]);
};
