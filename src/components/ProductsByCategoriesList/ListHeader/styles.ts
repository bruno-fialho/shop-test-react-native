import styled, {css} from 'styled-components/native';

export const MainListHeader = styled.View`
  width: 100%;
  height: auto;

  margin-bottom: ${({theme}) => theme.SPACINGS[4]}px;
`;

export const MainListHeaderText = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.ROBOTO};
    font-weight: ${theme.FONT_WEIGHT[400]};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_950};
  `};
`;
