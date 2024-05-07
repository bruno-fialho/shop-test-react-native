import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

import {Container, Tab, TabText} from './styles';

export function TabBar({state, descriptors, navigation}: BottomTabBarProps) {
  return (
    <Container>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label = options.tabBarLabel?.toString();

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <Tab
            key={route.key}
            onPress={onPress}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={`${label}`}
            isFocused={isFocused}>
            <TabText isFocused={isFocused}>{label}</TabText>
          </Tab>
        );
      })}
    </Container>
  );
}
