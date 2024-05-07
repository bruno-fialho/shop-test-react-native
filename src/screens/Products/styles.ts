import {SafeAreaView} from 'react-native-safe-area-context';
import styled, {css} from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  flex-direction: column;

  ${({theme}) => css`
    padding: ${theme.SPACINGS[6]}px ${theme.SPACINGS[6]}px
      ${theme.SPACINGS[20]}px;
    background-color: ${theme.COLORS.GRAY_50};
  `};
`;

export const Body = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: ${({theme}) => theme.SPACINGS[4]}px;
  gap: ${({theme}) => theme.SPACINGS[4]}px;
`;

export const FormWrapper = styled.View`
  width: 100%;
  height: fit-content;
  flex-direction: column;
  gap: ${({theme}) => theme.SPACINGS[2]}px;
`;

export const FormTitle = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.ROBOTO};
    font-weight: ${theme.FONT_WEIGHT[400]};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_950};
  `};
`;
