import {Picker} from '@react-native-picker/picker';
import {ItemValue} from '@react-native-picker/picker/typings/Picker';
import styled, {css} from 'styled-components/native';

interface SelectWrapperProps {
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

export const SelectWrapper = styled.View<SelectWrapperProps>`
  width: 100%;
  min-height: 48px;
  max-height: 48px;
  border-width: 1px;
  border-style: solid;

  justify-content: center;

  ${({isError, theme}) => css`
    padding: 0 ${theme.SPACINGS[4]}px;
    background-color: ${theme.COLORS.GRAY_200};
    border-radius: ${theme.BORDER_RADIUS.MD}px;
    border-color: ${isError ? theme.COLORS.RED_600 : theme.COLORS.GRAY_950};
  `};
`;

export const Select = styled(Picker<ItemValue>)`
  flex: 1;

  ${({theme}) => css`
    color: ${theme.COLORS.GRAY_950};
    font-family: ${theme.FONT_FAMILY.ROBOTO};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};
`;

export const SelectItem = styled(Picker.Item)``;

export const ErrorText = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.RED_600};
    font-family: ${theme.FONT_FAMILY.ROBOTO};
    font-size: ${theme.FONT_SIZE.SM}px;
  `};
`;
