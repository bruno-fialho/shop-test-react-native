import {FlatList} from 'react-native';
import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  flex-direction: column;
  gap: ${({theme}) => theme.SPACINGS[6]}px;
`;

export const InnerFlatList = styled.FlatList`
  flex: 1;
  padding: ${({theme}) =>
    theme.SPACINGS[1] + 'px' + ' 0px ' + theme.SPACINGS[4] + 'px'};
` as typeof FlatList;

export const InnerListItem = styled.View`
  width: 106px;
  height: auto;
  flex-direction: column;
  justify-content: space-between;
  padding-right: ${({theme}) => theme.SPACINGS[4]}px;
`;

export const InnerListItemTitle = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.ROBOTO};
    font-weight: ${theme.FONT_WEIGHT[400]};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_950};
  `};
`;

export const InnerListItemImageContainer = styled.View`
  width: 90px;
  height: 90px;
  border-radius: ${({theme}) => theme.BORDER_RADIUS.LG}px;
  overflow: hidden;
`;

export const InnerListItemImage = styled.Image`
  flex: 1;
`;

export const InnerListItemPrice = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.ROBOTO};
    font-weight: ${theme.FONT_WEIGHT[400]};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_950};
  `};
`;
