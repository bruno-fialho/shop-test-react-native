import React, {Ref} from 'react';

import {
  RadioButtonIndicator,
  RadioButtonInput,
  RadioButtonWrapper,
  RadioContainer,
  RadioLabel,
} from './styles';
import {View} from 'react-native';

export interface OptionProps {
  label: string;
  value: 'no' | 'yes';
}

interface RadioButtonGroupProps {
  ref?: Ref<View>;
  value: 'no' | 'yes';
  options: OptionProps[];
  onChange: (event: any) => void;
}

export function RadioButtonGroup({
  value,
  options,
  onChange,
}: RadioButtonGroupProps) {
  const handleOptionChange = (selectedValue: 'no' | 'yes') => {
    onChange(selectedValue);
  };

  return (
    <RadioContainer>
      {options.map(option => (
        <RadioButtonWrapper key={option.label}>
          <RadioButtonInput onPress={() => handleOptionChange(option.value)}>
            {value === option.value && <RadioButtonIndicator />}
          </RadioButtonInput>
          <RadioLabel isSelected={value === option.value}>
            {option.label}
          </RadioLabel>
        </RadioButtonWrapper>
      ))}
    </RadioContainer>
  );
}
