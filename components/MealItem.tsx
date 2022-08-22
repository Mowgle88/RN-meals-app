import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

interface MealItemProps {
  title: string
}

export default function MealItem({ title }: MealItemProps) {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})