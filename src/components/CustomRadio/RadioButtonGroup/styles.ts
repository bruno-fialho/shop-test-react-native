import styled from 'styled-components/native';

interface RadioLabelProps {
  isSelected: boolean;
}

export const RadioContainer = styled.View`
  flex-direction: row;
  gap: ${({theme}) => theme.SPACINGS[6]}px;
`;

export const RadioButtonWrapper = styled.View`
  flex-direction: row;
`;

export const RadioButtonInput = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border-width: 2px;
  border-color: ${({theme}) => theme.COLORS.GRAY_950};
  justify-content: center;
  align-items: center;
`;

export const RadioLabel = styled.Text<RadioLabelProps>`
  margin-left: 10px;
  color: ${({isSelected, theme}) =>
    isSelected ? theme.COLORS.GRAY_950 : theme.COLORS.GRAY_400};
`;

export const RadioButtonIndicator = styled.View`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: ${({theme}) => theme.COLORS.BLUE_600};
`;
