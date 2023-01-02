import { useState, useEffect } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Checkbox, RadioButton, Toggle } from './Flag';

export default {
  title: 'Example/Flag',
  component: Checkbox,
  // argTypes: {
  //   onChange: 'action'
  // },
} as ComponentMeta<typeof Checkbox>;

const CheckboxTemplate: ComponentStory<typeof Checkbox> = (args) => {
  const [checked, setChecked] = useState(args.checked);
  useEffect(() => setChecked(args.checked), [args.checked]);

  const onChange = (checked: boolean) => {
    setChecked(checked);
    args.onChange(checked);
  };

  return (
    <Checkbox
      label={args.label}
      checked={checked}
      onChange={onChange} />
  );
};

export const BaseCheckbox = CheckboxTemplate.bind({});
BaseCheckbox.args = {
  label: "Выбрать",
  checked: true
};


const RadioButtonTemplate: ComponentStory<typeof RadioButton> = (args) => {
  const [checked, setChecked] = useState(args.checked);
  useEffect(() => setChecked(args.checked), [args.checked]);

  const onChange = (checked: boolean) => {
    setChecked(checked);
    args.onChange(checked);
  };

  return (
    <RadioButton
      label={args.label}
      checked={checked}
      onChange={onChange} />
  );
};

export const BaseRadioButton = RadioButtonTemplate.bind({});
BaseRadioButton.args = {
  label: "Выбрать",
  checked: true
};


const ToggleTemplate: ComponentStory<typeof Toggle> = (args) => {
  const [checked, setChecked] = useState(args.checked);
  useEffect(() => setChecked(args.checked), [args.checked]);

  const onChange = (checked: boolean) => {
    setChecked(checked);
    args.onChange(checked);
  };

  return (
    <Toggle
      label={args.label}
      checked={checked}
      onChange={onChange} />
  );
};

export const BaseToggle = ToggleTemplate.bind({});
BaseToggle.args = {
  label: "Выбрать",
  checked: true
};
