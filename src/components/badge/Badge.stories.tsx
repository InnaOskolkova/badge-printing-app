import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Badge } from './Badge';

export default {
  title: 'Example/Badge',
  component: Badge,
  argTypes: {
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const BaseBadge = Template.bind({});
BaseBadge.args = {
  photo: 'https://via.placeholder.com/150',
  fullName: {
    lastName: 'Осколкова',
    firstName: "Инна",
    patronymic: "Ивановна"
  },
  position: {
    role: "Разработчик",
    level: 1
  }
};
