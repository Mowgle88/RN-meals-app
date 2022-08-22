import { FlatList, StyleSheet } from 'react-native';
import React from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { CATEGORIES } from '../data/dummy-data';
import Category from '../models/category';
import CategoryGridTile from '../components/CategoryGridTile';
import { RootStackParamList } from '../App';

interface renderCategoryItemProps {
  item: Category
}

type Props = NativeStackScreenProps<RootStackParamList, 'MealsCategories'>;

export default function CategoriesScreen({ navigation }: Props) {

  function renderCategoryItem(itemData: renderCategoryItemProps) {
    function pressHandler() {
      navigation.navigate('MealsOverview', {
        categoryId: itemData.item.id,
      });
    }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderCategoryItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  )
}

const styles = StyleSheet.create({})