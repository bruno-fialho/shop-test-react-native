import styled, {css} from 'styled-components/native';

export const Title = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.ROBOTO};
    font-weight: ${theme.FONT_WEIGHT[400]};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_950};
  `};
`;
