import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CategoriesScreen from '../../screens/Categories';
import CategoryMealsScreen from '../../screens/Meals';
import MealDetailsScreen from '../../screens/Details';

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: CategoryMealsScreen,
  MealsDetails: MealDetailsScreen,
});

export default createAppContainer(MealsNavigator);
