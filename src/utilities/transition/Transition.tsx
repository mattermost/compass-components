import React from 'react';
import { Transition as TransitionRoot } from 'react-transition-group';
import styled, { css, withTheme } from 'styled-components';

import { Utils } from '../../shared';

import {
    DEFAULT_TRANSITION_SPEED,
    TRANSITION_TYPE_DEFINITIONS,
    TRANSITION_TYPE_PROPERTY_MAP,
} from './Transition.constants';
import PTransition, { PAnimation } from './Transition.props';

const Animation = styled.div<PAnimation>(
    ({ duration, state, types }: PAnimation) => css`
        transition: ${types
            .map((type) => `${TRANSITION_TYPE_PROPERTY_MAP[type]} ${duration} ease-in-out`)
            .join(', ')};
        ${types.map((type) => TRANSITION_TYPE_DEFINITIONS[type][state])}
    `
);

const Transition = ({
    isVisible,
    children,
    theme,
    type,
    enter = true,
    exit = true,
    speed = DEFAULT_TRANSITION_SPEED,
    onTransitionEnd = Utils.noop,
    onEnter = Utils.noop,
    onEntering = Utils.noop,
    onEntered = Utils.noop,
    onExit = Utils.noop,
    onExiting = Utils.noop,
    onExited = Utils.noop,
}: PTransition): JSX.Element => {
    const types = Utils.isString(type) ? [type] : type;

    const rootProperties = {
        in: isVisible,
        addEndListener: onTransitionEnd,
        duration: theme.animation[speed],
        enter,
        exit,
        onEnter,
        onEntering,
        onEntered,
        onExit,
        onExiting,
        onExited,
    };

    return (
        <TransitionRoot {...rootProperties}>
            {(state): JSX.Element => (
                <Animation state={state} types={types} duration={theme.animation[speed]}>
                    {children}
                </Animation>
            )}
        </TransitionRoot>
    );
};

export default withTheme(Transition);
