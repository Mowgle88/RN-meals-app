import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
// import FavoritesContextProvider from './store/context/favorites-context';
import { store } from './store/redux/store'

export type RootStackParamList = {
  Drawer: undefined,
  Categories: undefined,
  Favorites: undefined
  MealsOverview: { categoryId: string, title: string, color: string },
  MealDetail: { mealId: string },
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<RootStackParamList>();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#382e24' },
        headerTintColor: '#f0f0f0',
        sceneContainerStyle: { backgroundColor: '#cbb1a1' },
        drawerContentStyle: { backgroundColor: '#382e24' },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#382e24',
        drawerActiveBackgroundColor: '#cbb1a1'
      }}
    >
      <Drawer.Screen
        name='Categories'
        component={CategoriesScreen}
        options={{
          // title: 'All Categories',
          drawerIcon: ({ color, size }) => <Ionicons name='list' color={color} size={size} />
        }}
      />
      <Drawer.Screen
        name='Favorites'
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => <Ionicons name='star' color={color} size={size} />
        }}
      />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: '#382e24' },
              headerTintColor: '#f0f0f0',
              contentStyle: { backgroundColor: '#cbb1a1' }
            }}
          >
            <Stack.Screen
              name='Drawer'
              component={DrawerNavigator}
              options={{
                // title: 'All Categories',
                headerShown: false
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
            <Stack.Screen
              name='MealDetail'
              component={MealDetailScreen}
              options={{
                title: 'About the Meal',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavoritesContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
