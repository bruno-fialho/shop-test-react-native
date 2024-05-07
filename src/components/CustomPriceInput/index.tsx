import React, {forwardRef} from 'react';
import {TextInput} from 'react-native';
import {MaskedTextInputProps} from 'react-native-mask-text';
import {FieldError} from 'react-hook-form';
import {useTheme} from 'styled-components';

import {Container, ErrorText, Input, Label, LabelContainer} from './styles';

type CustomCurrencyInputProps = MaskedTextInputProps & {
  label: string;
  value?: string;
  errors?: FieldError;
  onChangeText: (text: string) => void;
};

export const CustomCurrencyInput = forwardRef<
  TextInput,
  CustomCurrencyInputProps
>(({label, value, onChangeText, errors, ...rest}, ref) => {
  const {COLORS} = useTheme();

  function handleChangeText(rawText: string) {
    onChangeText(rawText);
  }

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

      <Input
        ref={ref}
        type="currency"
        options={{
          prefix: 'R$ ',
          decimalSeparator: ',',
          groupSeparator: '.',
          precision: 2,
        }}
        onChangeText={(text, rawText) => handleChangeText(rawText)}
        value={value}
        placeholderTextColor={COLORS.GRAY_600}
        isError={!!errors}
        {...rest}
      />
    </Container>
  );
});
