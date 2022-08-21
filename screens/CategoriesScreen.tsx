import { FlatList, StyleSheet } from 'react-native';
import React from 'react';

import { CATEGORIES } from '../data/dummy-data';
import Category from '../models/category';
import CategoryGridTile from '../components/CategoryGridTile';

interface renderCategoryItemProps {
  item: Category
}

function renderCategoryItem(itemData: renderCategoryItemProps) {
  return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />;
}

export default function CategoriesScreen() {
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderCategoryItem}
      keyExtractor={(item) => item.id}
    />
  )
}

const styles = StyleSheet.create({})