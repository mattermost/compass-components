import { useEffect } from 'react';
import type { RefObject } from 'react';

const EVENTS = ['mousedown', 'touchstart'];

export const useClickAway = (
    references: Array<RefObject<HTMLElement | null>>,
    onClickAway: (event: Event) => void
): void => {
    useEffect(() => {
        const handler = (event: Event): void => {
            const isClickAway = references.every((reference) => {
                const { current: element } = reference;

                return element && !element.contains(event.target as Node);
            });

            if (isClickAway) {
                onClickAway(event);
            }
        };

        for (const eventName of EVENTS) {
            document.addEventListener(eventName, handler);
        }

        return (): void => {
            for (const eventName of EVENTS) {
                document.removeEventListener(eventName, handler);
            }
        };
    }, [onClickAway, references]);
};
