import styled, {css} from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 48px;
  align-items: center;
  justify-content: center;

  ${({theme}) => css`
    background-color: ${theme.COLORS.BLUE_600};
    border-radius: ${theme.BORDER_RADIUS.LG}px;
  `};
`;
export const ButtonText = styled.Text`
  font-family: 'Roboto, sans-serif';

  ${({theme}) => css`
    color: ${theme.COLORS.GRAY_50};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-weight: ${theme.FONT_WEIGHT[400]};
  `};
`;
