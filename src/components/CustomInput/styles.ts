import {TextInput} from 'react-native';
import styled, {css} from 'styled-components/native';

interface InputProps {
  isError?: boolean;
}

export const Container = styled.View`
  width: 100%;
  flex-direction: column;
  gap: ${({theme}) => theme.SPACINGS[1]}px;
`;

export const LabelContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  gap: ${({theme}) => theme.SPACINGS[2]}px;
`;

export const Label = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.ROBOTO};
    font-weight: ${theme.FONT_WEIGHT[400]};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_950};
  `};
`;

export const Input = styled(TextInput)<InputProps>`
  width: 100%;
  min-height: 48px;
  max-height: 48px;
  padding: 0 ${({theme}) => theme.SPACINGS[4]}px;

  ${({theme}) => css`
    color: ${theme.COLORS.GRAY_950};
    background-color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.ROBOTO};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};

  border-radius: ${({theme}) => theme.BORDER_RADIUS.MD}px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({isError, theme}) =>
    isError ? theme.COLORS.RED_600 : theme.COLORS.GRAY_950};
`;

export const ErrorText = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.RED_600};
    font-family: ${theme.FONT_FAMILY.ROBOTO};
    font-size: ${theme.FONT_SIZE.SM}px;
  `};
`;
