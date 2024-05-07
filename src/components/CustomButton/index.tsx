import React from 'react';

import {ButtonText, Container} from './styles';
import {TouchableOpacityProps} from 'react-native';

type CustomButtonProps = TouchableOpacityProps & {
  title: string;
};

export function CustomButton({title, ...rest}: CustomButtonProps) {
  return (
    <Container {...rest}>
      <ButtonText>{title}</ButtonText>
    </Container>
  );
}
