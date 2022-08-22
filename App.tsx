import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import Category from './models/category';

export type RootStackParamList = {
  MealsCategories: { CATEGORIES: Category[] };
  MealsOverview: { categoryId: string, title: string, color: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#382e24' },
            headerTintColor: '#f0f0f0',
            contentStyle: { backgroundColor: '#cbb1a1' }
          }}
        >
          <Stack.Screen
            name='MealsCategories'
            component={CategoriesScreen}
            options={{
              title: 'All Categories',
            }}
          />
          <Stack.Screen
            name='MealsOverview'
            component={MealsOverviewScreen}
          // options={({ route, navigation }) => {
          //   const title = route.params.title;
          //   const color = route.params.color;
          //   return {
          //     title: title,
          //     headerStyle: { backgroundColor: color },
          //     headerTintColor: '#382e24',
          //   }
          // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
