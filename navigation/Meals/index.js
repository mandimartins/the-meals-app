import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Categories from '../../screens/Categories';
import Meals from '../../screens/Meals';
import Detail from '../../screens/Details';

const Navigator = createStackNavigator({
  Categories: Categories,
  Meals: Meals,
  Detail: Detail,
});

export default createAppContainer(Navigator);
