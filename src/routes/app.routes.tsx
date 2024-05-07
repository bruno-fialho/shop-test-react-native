import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {Home} from '../screens/Home';
import {Category} from '../screens/Category';
import {Products} from '../screens/Products';
import {ProductsByCategories} from '../screens/ProductsByCategories';
import {TabBar} from './TabBar';

const {Navigator, Screen} = createBottomTabNavigator();

const tabBarComponent = (props: BottomTabBarProps) => <TabBar {...props} />;

function TabNavigator() {
  return (
    <Navigator tabBar={tabBarComponent} screenOptions={{headerShown: false}}>
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Screen
        name="categories"
        component={Category}
        options={{
          tabBarLabel: 'Categorias',
        }}
      />
      <Screen
        name="products"
        component={Products}
        options={{
          tabBarLabel: 'Produtos',
        }}
      />
      <Screen
        name="productsByCategories"
        component={ProductsByCategories}
        options={{
          tabBarLabel: 'Produtos\npor\nCategorias',
        }}
      />
    </Navigator>
  );
}

export function AppRoutes() {
  return <TabNavigator />;
}
