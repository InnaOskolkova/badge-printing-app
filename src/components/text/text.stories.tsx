import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Text } from './Text';

export default {
  title: 'Example/Text',
  component: Text,
  argTypes: {
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const BaseText = Template.bind({});
BaseText.args = {
  children: "Текст",
};
