import Button from './Button';
import IconButton from './IconButton';

export default {
    title: 'Components/Test',
    component: Button,
    argTypes: {
        size: {
            control: 'radio',
            options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
        },
    },
};

const ButtonTemplate = (args) => (
    <>
        <Button {...args} />
        <Button {...args} />
        <Button {...args} />
        <Button {...args} size="large" />
    </>
);

export const ButtonTest = ButtonTemplate.bind({});
ButtonTest.args = {
    size: 'medium',
    variant: 'primary',
    label: 'button',
};

const IconButtonTemplate = (args) => <IconButton {...args} />;

export const IconButtonTest = IconButtonTemplate.bind({});
IconButtonTest.args = {
    size: 'medium',
    label: 'button',
};
