import React, {forwardRef, useEffect, useState} from 'react';
import {FieldError} from 'react-hook-form';
import {PickerProps} from '@react-native-picker/picker';

import {
  Container,
  ErrorText,
  Label,
  LabelContainer,
  Select,
  SelectItem,
  SelectWrapper,
} from './styles';
import {ItemValue} from '@react-native-picker/picker/typings/Picker';
import {capitalize} from '@utils/capitalize';

type CustomSelectProps = PickerProps<ItemValue> & {
  label: string;
  options: CategoryProps[] | undefined;
  placeholder: string;
  value: string | undefined;
  onValueChange: (value: string) => void;
  isLoading?: boolean;
  errors?: FieldError;
};

export const CustomSelect = forwardRef<
  PickerProps<ItemValue>,
  CustomSelectProps
>(
  (
    {label, options, value, onValueChange, errors, placeholder, ...rest},
    ref,
  ) => {
    const [selectedValue, setSelectedValue] = useState<string | undefined>(
      value,
    );

    useEffect(() => {
      setSelectedValue(value);
    }, [value]);

    useEffect(() => {
      onValueChange(selectedValue?.toString() || '');
    }, [onValueChange, selectedValue]);

    return (
      <Container>
        <LabelContainer>
          <Label>{label}</Label>

          {errors && (
            <ErrorText>
              {' * '}
              {errors.message}
            </ErrorText>
          )}
        </LabelContainer>

        <SelectWrapper isError={!!errors}>
          <Select
            ref={ref as any}
            placeholder={placeholder}
            selectedValue={selectedValue}
            onValueChange={(itemValue: unknown, _: number) =>
              setSelectedValue(itemValue as string)
            }
            {...rest}>
            {options
              ?.filter(c => c.name !== '')
              .map(option => (
                <SelectItem
                  key={option.id}
                  label={capitalize(option.name)}
                  value={option.name}
                />
              ))}
          </Select>
        </SelectWrapper>
      </Container>
    );
  },
);
