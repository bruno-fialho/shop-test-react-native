import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex-direction: column;
  gap: ${({theme}) => theme.SPACINGS[1]}px;
`;

export const Label = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.ROBOTO};
    font-weight: ${theme.FONT_WEIGHT[400]};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_950};
  `};
`;
