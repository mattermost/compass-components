import React from 'react';

import Shape from '../../foundations/shape';
import { TShapeElement } from '../../foundations/shape/Shape.types';
import Text from '../text';

type PHiddenComponent = {
    component: TShapeElement;
    type?: 'checkbox' | 'radio';
    componentClass?: string;
    labelClass?: string;
};

const HiddenComponent: React.FC<PHiddenComponent> = ({
    component,
    type,
    componentClass,
    labelClass,
    ...rest
}: PHiddenComponent) => (
    <Text element={'label'} className={labelClass} for="hidden__input">
        <Shape className={componentClass} id="hidden__input" component={component} type={type} />
        <Text element={'span'} {...rest} />
    </Text>
);

export default HiddenComponent;
