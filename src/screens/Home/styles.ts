import {SafeAreaView} from 'react-native-safe-area-context';
import styled, {css} from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  flex-direction: column;
  align-items: center;

  ${({theme}) => css`
    padding: ${theme.SPACINGS[6]}px ${theme.SPACINGS[6]}px
      ${theme.SPACINGS[20]}px;
    background-color: ${theme.COLORS.GRAY_50};
  `};
`;

export const Body = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ImageContainer = styled.View`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 16px;
  overflow: hidden;
  justify-content: center;
`;

export const MarketImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 16px;
`;
