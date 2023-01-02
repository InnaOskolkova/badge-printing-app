import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Photo } from './Photo';

export default {
  title: 'Example/Photo',
  component: Photo,
  argTypes: {
  },
} as ComponentMeta<typeof Photo>;

const Template: ComponentStory<typeof Photo> = (args) => <Photo {...args} />;

export const BasePhoto = Template.bind({});
BasePhoto.args = {
  photo: ''
};
