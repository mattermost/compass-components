import React from 'react';

import Text from '../text';

type PHiddenComponent = {
    type?: 'checkbox' | 'radio';
    componentClass?: string;
    labelClass?: string;
    children?: JSX.Element;
    checked?: boolean;
    onChange?: () => void;
};

const HiddenComponent: React.FC<PHiddenComponent> = ({
    type,
    componentClass,
    labelClass,
    children,
    checked,
}: PHiddenComponent) => (
    <Text element={'label'} className={labelClass} for="hidden__input">
        <input className={componentClass} id="hidden__input" defaultChecked={checked} type={type} />
        {children}
    </Text>
);

export default HiddenComponent;
