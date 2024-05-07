import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: 'Roboto, sans-serif';
  font-size: ${({theme}) => theme.FONT_SIZE.XXL}px;
  line-height: ${({theme}) => theme.FONT_SIZE.XXL}px;
  font-weight: ${({theme}) => theme.FONT_WEIGHT[700]};
  color: ${({theme}) => theme.COLORS.GRAY_950};
  text-align: center;
`;
