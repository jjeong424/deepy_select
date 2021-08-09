import React, {useEffect, useState, useLayoutEffect} from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import {createSwitchNavigator} from '@react-navigation/compat';
import {createAppContainer} from 'react-navigation';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {TextInput} from 'react-native-gesture-handler';

import HomeScreen from './src/navigation/Home/HomeScreen';
import FollowCuratorScreen from './src/navigation/Follow/FollowCuratorScreen';
import LoginScreen from './src/navigation/LoginScreen';
import RegisterScreen from './src/navigation/RegisterScreen';
import WishListScreen from './src/navigation/WishList/WishListScreen';
import UserProfileScreen from './src/navigation/UserProfileScreen';
import CategoryScreen from './src/navigation/Category/CategoryScreen';
import ProductDetailScreen from './src/navigation/ProductDetailScreen';
import SelectScreen from './src/navigation/Select/SelectScreen';
/*
function getHeaderTitle (route) {

  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
  
  const Spacer = ({children}) => {
    return <View style={styles.spacer}>{children}</View>;
  };
  
  const styles = StyleSheet.create({
    spacer: {
      margin: 15,
    },
  });
  
  //export default Spacer;
  
  switch (routeName) {
    case 'Home':
      return 'Home!';
    case 'FollowCurator':
      return 'FollowCurator!';
    case 'Category':
      return 'Category!';
    case 'WishList':
      return 'WishList!';
    case 'UserProfile':
      return 'UserProfile!';
  }
}
*/
const HomeStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="ProductDetail" component={ProductDetailScreen} />
    </HomeStack.Navigator>
  );
}
const FollowCuratorStack = createStackNavigator();
function FollowCuratorStackScreen() {
  return (
    <FollowCuratorStack.Navigator>
      <FollowCuratorStack.Screen
        name="FollowCurator"
        component={FollowCuratorScreen}
      />
    </FollowCuratorStack.Navigator>
  );
}

const CategoryStack = createStackNavigator();
function CategoryStackScreen() {
  return (
    <CategoryStack.Navigator>
      <CategoryStack.Screen name="Category" component={CategoryScreen} />
    </CategoryStack.Navigator>
  );
}
const WishListStack = createStackNavigator();
function WishListStackScreen() {
  return (
    <WishListStack.Navigator>
      <WishListStack.Screen name="WishList" component={WishListScreen} />
    </WishListStack.Navigator>
  );
}
const UserProfileStack = createStackNavigator();
function UserProfileStackScreen() {
  return (
    <UserProfileStack.Navigator>
      <UserProfileStack.Screen
        name="UserProfile"
        component={UserProfileScreen}
      />
      <UserProfileStack.Screen name="Login" component={LoginScreen} />
      <UserProfileStack.Screen name="Register" component={RegisterScreen} />
    </UserProfileStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator initialRouteName="Home" options= {{HeaderBackButton: 'none'}}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{tabBarLabel: 'Home!'}}
      />
      <Tab.Screen name="FollowCurator" component={FollowCuratorStackScreen} />
      <Tab.Screen name="Category" component={CategoryStackScreen} />
      <Tab.Screen name="WishList" component={WishListStackScreen} />
      <Tab.Screen name="UserProfile" component={UserProfileStackScreen} />
    </Tab.Navigator>
  );
}
const RootStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Selector">

        <RootStack.Screen
        name="Selector"
        component={SelectScreen}
      />
        <RootStack.Screen
          name="HomeTabs"
          component={HomeTabs}
          options={{headerMode: 'none', headerShown : false}}
          //options={({route}) => ({headerTitle: getHeaderTitle(route)})}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}