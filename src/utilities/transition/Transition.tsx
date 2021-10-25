import React from 'react';
import { Transition as TransitionRoot } from 'react-transition-group';
import styled, { css, withTheme } from 'styled-components';

import { Utils } from '../../shared';

import { DEFAULT_TRANSITION_SPEED, TRANSITION_TYPE_DEFINITIONS } from './Transition.constants';
import type PTransition from './Transition.props';
import type { PAnimation } from './Transition.props';

const Animation = styled.div<PAnimation>(
    ({ duration, state, types, delay, customTransition }: PAnimation) => {
        const customProperties = customTransition?.properties || [];
        const properties = Array.from(
            new Set(
                types
                    .flatMap((type) => TRANSITION_TYPE_DEFINITIONS[type].properties)
                    .concat(customProperties)
            )
        );

        const customTransitionStyles =
            customTransition && customTransition[state]
                ? css`
                      ${customTransition[state]}
                  `
                : null;

        return css`
            transition: ${properties
                .map((property) => `${property} ${duration}ms ease-in-out ${delay}ms`)
                .join(', ')};
            ${types.map((type) => TRANSITION_TYPE_DEFINITIONS[type][state])};
            ${customTransitionStyles};
        `;
    }
);

const Transition = ({
    isVisible,
    children,
    theme,
    type = [],
    enter = true,
    exit = true,
    speed = {
        in: DEFAULT_TRANSITION_SPEED,
        out: DEFAULT_TRANSITION_SPEED,
    },
    delay = {
        in: 0,
        out: 0,
    },
    onTransitionEnd = Utils.noop,
    customTransition,
    ...rest
}: PTransition): JSX.Element => {
    const types = Array.isArray(type) ? type : [type];
    const delays = {
        in: Utils.isNumber(delay) ? delay : delay.in,
        out: Utils.isNumber(delay) ? delay : delay.out,
    };
    const speeds = {
        in: Utils.isString(speed) ? theme.animation[speed] : theme.animation[speed.in || 'normal'],
        out: Utils.isString(speed)
            ? theme.animation[speed]
            : theme.animation[speed.out || 'normal'],
    };

    const rootProperties = {
        in: isVisible,
        addEndListener: onTransitionEnd,
        enter,
        exit,
        ...rest,
    };

    return (
        <TransitionRoot {...rootProperties}>
            {(state): JSX.Element => (
                <Animation
                    state={state}
                    types={types}
                    duration={state === 'entering' || state === 'entered' ? speeds.in : speeds.out}
                    customTransition={customTransition}
                    delay={state === 'entering' || state === 'entered' ? delays.in : delays.out}
                >
                    {children}
                </Animation>
            )}
        </TransitionRoot>
    );
};

export default withTheme(Transition);
