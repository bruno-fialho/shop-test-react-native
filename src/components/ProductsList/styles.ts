import {FlatList} from 'react-native';
import styled, {css} from 'styled-components/native';

interface ListItemProps {
  index: number;
}

export const Container = styled.View`
  flex: 1;

  flex-direction: column;
  gap: ${({theme}) => theme.SPACINGS[6]}px;

  padding-bottom: ${({theme}) => theme.SPACINGS[1]}px;
`;

export const ListContainer = styled.View`
  flex: 1;

  flex-direction: column;
  border-radius: ${({theme}) => theme.BORDER_RADIUS.MD}px;
  overflow: hidden;
`;

export const ListHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;

  ${({theme}) => css`
    padding: ${`${theme.SPACINGS[2]}` + 'px ' + `${theme.SPACINGS[2]}` + 'px'};
    background-color: ${theme.COLORS.BLUE_300};
  `};
`;

export const ListHeaderText = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.ROBOTO};
    font-weight: ${theme.FONT_WEIGHT[700]};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_50};
  `};
`;

export const List = styled.FlatList`
  flex: 1;
` as typeof FlatList;

export const ListItem = styled.View<ListItemProps>`
  width: 100%;
  height: 40px;
  flex-direction: row;
  justify-content: space-between;

  padding: ${({theme}) =>
    `${theme.SPACINGS[2]}` + 'px ' + `${theme.SPACINGS[2]}` + 'px'};
  background-color: ${({index, theme}) =>
    index % 2 === 0 ? theme.COLORS.GRAY_300 : theme.COLORS.GRAY_400};
`;

export const ListItemName = styled.View`
  flex: 1;
  justify-content: center;
  padding: ${({theme}) => '0' + 'px ' + `${theme.SPACINGS[2]}` + 'px'};
`;

export const ListItemCategory = styled.View`
  flex: 1;
  justify-content: center;
  padding: ${({theme}) => '0' + 'px ' + `${theme.SPACINGS[2]}` + 'px'};
`;

export const ListItemPrice = styled.View`
  width: 60px;
  align-items: center;
  justify-content: center;
  padding: ${({theme}) => '0' + 'px ' + `${theme.SPACINGS[2]}` + 'px'};
`;

export const ListItemText = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.ROBOTO};
    font-weight: ${theme.FONT_WEIGHT[400]};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_950};
  `};
`;
