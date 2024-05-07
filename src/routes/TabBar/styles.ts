import styled from 'styled-components/native';

interface TabProps {
  isFocused: boolean;
}

interface TabTextProps {
  isFocused: boolean;
}

export const Container = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 80px;
  padding: 0 ${props => props.theme.SPACINGS[6]}px;

  flex-direction: row;
  align-items: center;

  background-color: ${props => props.theme.COLORS.GRAY_50};
  opacity: 90;
  border-top-width: 2px;
  border-top-style: solid;
  border-top-color: ${props => props.theme.COLORS.BLUE_600};

  z-index: 10;
`;

export const Tab = styled.TouchableOpacity<TabProps>`
  width: 25%;
  height: 78px;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${props =>
    props.isFocused ? props.theme.COLORS.BLUE_300 : props.theme.COLORS.GRAY_50};
`;

export const TabText = styled.Text<TabTextProps>`
  font-family: ${props => props.theme.FONT_FAMILY.ROBOTO};
  font-size: ${props => props.theme.FONT_SIZE.SM}px;
  font-weight: ${props => props.theme.FONT_WEIGHT[400]};
  text-align: center;
  color: ${props =>
    props.isFocused ? props.theme.COLORS.GRAY_50 : props.theme.COLORS.GRAY_950};
`;
