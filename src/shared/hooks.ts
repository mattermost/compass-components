import { useEffect } from 'react';
import type { RefObject } from 'react';

const EVENTS = ['mousedown', 'touchstart'];

type TonClickAwayCallback = (event: Event) => void;

type TuseClickAwayReferences = Array<RefObject<HTMLElement | null>>;

export const useClickAway = (
    references: TuseClickAwayReferences,
    onClickAway?: TonClickAwayCallback
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

export type { TonClickAwayCallback, TuseClickAwayReferences };
