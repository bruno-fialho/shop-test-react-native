import React, {forwardRef} from 'react';
import {View} from 'react-native';
import {Container, Label} from './styles';
import {RadioButtonGroup, OptionProps} from './RadioButtonGroup';

interface CustomRadioProps {
  label: string;
  value: 'no' | 'yes';
  options: OptionProps[];
  onChange: (value: 'no' | 'yes') => void;
}

export const CustomRadio = forwardRef<View, CustomRadioProps>(
  ({label, value, options, onChange}, ref) => {
    return (
      <Container>
        <Label>{label}</Label>
        <RadioButtonGroup
          ref={ref}
          value={value}
          options={options}
          onChange={onChange}
        />
      </Container>
    );
  },
);
