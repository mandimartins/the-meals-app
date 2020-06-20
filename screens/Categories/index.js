import React from 'react';
import { TouchableOpacity, Text, FlatList, StyleSheet } from 'react-native';

import { CATEGORIES } from '../../data/dummy-data';
import Colors from '../../constants/colors';

const renderGridItem = (itemData) => {
  return (
    <TouchableOpacity style={styles.gridItem}>
      <Text>{itemData.item.title}</Text>
    </TouchableOpacity>
  );
};

const Categories = (props) => {
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGridItem}
    />
  );
};

Categories.navigationOptions = {
  headerTitle: 'Meal Categories',
  headerStyle: {
    backgroundColor: Colors.primaryColor,
  },
  headerTintColor: 'white',
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});
export default Categories;
