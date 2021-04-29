import React from 'react';

import Shape from '../../foundations/shape';
import { TShapeElement } from '../../foundations/shape/Shape.types';
import Text from '../text';

type PHiddenComponent = {
    component: TShapeElement;
    type?: 'checkbox' | 'radio';
    componentClass?: string;
    labelClass?: string;
    children?: JSX.Element;
};

const HiddenComponent: React.FC<PHiddenComponent> = ({
    component,
    type,
    componentClass,
    labelClass,
    children,
}: PHiddenComponent) => (
    <Text element={'label'} className={labelClass} for="hidden__input">
        <Shape className={componentClass} id="hidden__input" component={component} type={type} />
        {children}
    </Text>
);

export default HiddenComponent;
