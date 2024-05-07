import React, {forwardRef} from 'react';
import {TextInput, TextInputProps} from 'react-native';
import {FieldError} from 'react-hook-form';
import {useTheme} from 'styled-components';

import {Container, ErrorText, Input, Label, LabelContainer} from './styles';

type CustomInputProps = TextInputProps & {
  label: string;
  errors?: FieldError;
};

export const CustomInput = forwardRef<TextInput, CustomInputProps>(
  ({label, errors, ...rest}, ref) => {
    const {COLORS} = useTheme();

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
          placeholderTextColor={COLORS.GRAY_600}
          isError={!!errors}
          {...rest}
        />
      </Container>
    );
  },
);
