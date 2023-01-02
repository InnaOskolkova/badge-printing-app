import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input, Select } from './Field';

export default {
  title: 'Example/Field',
  component: Input,
  argTypes: {
    onChange: 'action'
  },
} as unknown as ComponentMeta<typeof Input>;

const InputTemplate: ComponentStory<typeof Input> = (args) => {
  const [value, setValue] = useState(args.value);
  
  const onChange = (value: string) => {
    setValue(value);
    args.onChange(value);
  };

  return (
    <Input
      label={args.label}
      value={value}
      placeholder={args.placeholder}
      onChange={onChange} />
    );
};

export const InputField = InputTemplate.bind({});
InputField.args = {
  label: "Фамилия",
  value: "Осколкова",
  placeholder: "Введите фамилию"
};

const SelectTemplate: ComponentStory<typeof Select> = (args) => {
  const [value, setValue] = useState(args.value);
  
  const onChange = (value: string) => {
    setValue(value);
    args.onChange(value);
  };

  return (
    <Select
      label={args.label}
      value={value}
      options={args.options}
      placeholder={args.placeholder}
      onChange={onChange} />
    );
};

export const SelectField = SelectTemplate.bind({});
SelectField.args = {
  label: "Должность",
  value: "designer",
  options: [
    { value: 'designer', label: 'Дизайнер' },
    { value: 'manager', label: 'Менеджер' },
    { value: 'developer', label: 'Разработчик' }
  ],
  placeholder: "Выберите должность"
};
