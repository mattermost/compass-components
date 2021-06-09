/* eslint-disable prettier/prettier */
'use strict';

const lowerFirst = require('lodash.lowerfirst');
const snakeCase = require('lodash.snakecase');
const toUpper = require('lodash.toupper');

// component.tsx
const component = (name) => `import styled, { css } from 'styled-components';
import { FlattenSimpleInterpolation, ThemedStyledProps } from 'styled-components/ts3.6';

import { TTheme } from '../../foundations/theme-provider/themes/theme.types';

import ${name}Base from './${name}.base';
import {
    DEFAULT_${toUpper(snakeCase(name))}_SIZE,
    ${toUpper(snakeCase(name))}_DEFINITIONS,
} from './${name}.constants';
import P${name} from './${name}.props';

const ${name} = styled(${name}Base)<P${name}>(
    ({
        size = DEFAULT_${toUpper(snakeCase(name))}_SIZE,
        theme,
    }: ThemedStyledProps<P${name}, TTheme>): FlattenSimpleInterpolation => css\`
        display: flex;
        align-items: center;
        justify-content: center;

        color: $\{theme.text.primary};

        width: $\{${toUpper(snakeCase(name))}_DEFINITIONS[size]}px;
        height: $\{${toUpper(snakeCase(name))}_DEFINITIONS[size]}px;
    \`
);

export default ${name};
`;

// component.base.tsx
const base = (name) => `import React from 'react';

import { DEFAULT_${toUpper(snakeCase(name))}_SIZE } from './${name}.constants';
import P${name} from './${name}.props';

const ${name}Base = ({ size = DEFAULT_${toUpper(snakeCase(name))}_SIZE }: P${name}): JSX.Element => (
    <div>Hello 👋, I am a IconButton component with a default size of '{size}'.</div>
);

export default ${name}Base;
`;

// component.stories.mdx
const story = (
    name
) => `import { ArgsTable, Canvas, Meta, Story } from '@storybook/addon-docs/blocks';
import { Utils, DEFAULT_ARGUMENTSTABLE_EXCLUSION } from '../../shared';

import {
    ${toUpper(snakeCase(name))}_SIZES,
    ${toUpper(snakeCase(name))}_SIZE_LABELS,
    DEFAULT_${toUpper(snakeCase(name))}_SIZE
} from './${name}.constants';
import ${name} from './${name}';

export const ${lowerFirst(name)}Args = {
    size: DEFAULT_${toUpper(snakeCase(name))}_SIZE,
};

export const ${lowerFirst(name)}ArgTypes = {
    size: {
        options: ${toUpper(snakeCase(name))}_SIZES,
        control: {
            type: 'select',
            labels: ${toUpper(snakeCase(name))}_SIZE_LABELS,
        },
    },
    ...Utils.hideComponentProperties(),
};

<Meta title={'Components/Avatar'} />

<ArgsTable of={${name}} exclude={[...DEFAULT_ARGUMENTSTABLE_EXCLUSION]} />

<Canvas hidden>
    <Story name="default" args={${lowerFirst(name)}Args} argTypes={${lowerFirst(name)}ArgTypes}>
        {(args) => <${name} {...args} />}
    </Story>
</Canvas>
`;

// component.constants.ts
const constants = (name) => `import { T${name}SizeToken, T${name}Number } from './${name}.types';

const ${toUpper(snakeCase(name))}_SIZES: T${name}SizeToken[] = [
    'xxxs',
    'xxs',
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    'xxl',
    'xxxl',
];

const ${toUpper(snakeCase(name))}_SIZE_LABELS: { [size in T${name}SizeToken]: string } = {
    xxxs: 'xxx-small',
    xxs: 'xx-small',
    xs: 'x-small',
    sm: 'small',
    md: 'medium',
    lg: 'large',
    xl: 'x-large',
    xxl: 'xx-large',
    xxxl: 'xxx-large',
};

const DEFAULT_${toUpper(snakeCase(name))}_SIZE: T${name}SizeToken = 'md';

const ${toUpper(snakeCase(name))}_DEFINITIONS: { [size in T${name}SizeToken]: T${name}Number } = {
    xxxs: 200,
    xxs: 200,
    xs: 200,
    sm: 200,
    md: 200,
    lg: 200,
    xl: 200,
    xxl: 200,
    xxxl: 200,
};

export {
    ${toUpper(snakeCase(name))}_SIZES,
    DEFAULT_${toUpper(snakeCase(name))}_SIZE,
    ${toUpper(snakeCase(name))}_SIZE_LABELS,
    ${toUpper(snakeCase(name))}_DEFINITIONS,
};
`;

// component.types.ts
const props = (name) => `import { T${name}SizeToken } from './${name}.types';

type P${name} = {
    /**
     * the size token to define the ${name} size
     * @default 'md'
     */
    size?: T${name}SizeToken;
    className?: string;
};

export default P${name};
`;

// component.types.ts
const types = (name) => `import { TComponentSizeToken } from '../../shared';

type T${name}Number = number;

export type { T${name}Number, TComponentSizeToken as T${name}SizeToken };
`;

// index.ts
const barrel = (name) => `import ${name} from './${name}';

export * from './${name}.constants';
export * from './${name}.props';
export * from './${name}.types';

export default ${name};
`;

module.exports = {
    component,
    base,
    constants,
    props,
    types,
    story,
    barrel,
};
