import {FlatList} from 'react-native';
import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  min-width: 100%;

  flex-direction: column;
  gap: ${({theme}) => theme.SPACINGS[6]}px;
`;

export const MainList = styled.FlatList`
  flex: 1;
` as typeof FlatList;

export const MainListItem = styled.View`
  width: 100%;
  height: 200px;

  flex-direction: column;
  justify-content: space-between;
`;

export const MainListTitle = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.ROBOTO};
    font-weight: ${theme.FONT_WEIGHT[400]};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_950};
  `};
`;
