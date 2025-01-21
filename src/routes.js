/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import Home from './pages/Home';
import Signin from './pages/Signin';
import SignUp from './pages/Singup';
import Feed from './pages/Feed';
import Orders from './pages/Orders';
import { colors } from './styles/theme.json';
import util from './util';
import { Title } from './components';

import Marketplace from './pages/Marketplace';
import Category from './pages/Marketplace/category';
import Product from './pages/Marketplace/products';
import Cart from './pages/Cart';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const CustonDrawerComponent = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <Title bold color="light" hasPadding variant="big">LOOKAPP</Title>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
};
const DrawerComponent = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Feed"
            drawerContent={props => <CustonDrawerComponent {...props} />}
            screenOptions={{
                drawerStyle: { backgroundColor: colors.black },
                drawerInactiveTintColor: util.toAlpha(colors.light, 50),
                drawerActiveTintColor: util.toAlpha(colors.danger, 60),
            }}
        >
            <Drawer.Screen options={{
                headerShown: false,
                drawerIcon: ({ color }) => (
                    <Icon name="people" color={color} />
                ),
            }} name="Feed" component={Feed} />

            <Drawer.Screen options={{
                headerShown: false,
                drawerIcon: ({ color }) => (
                    <Icon name="basket" color={color} />
                ),
            }} name="Marketplace" component={Marketplace} />

            <Drawer.Screen options={{
                headerShown: false,
                drawerIcon: ({ color }) => (
                    <Icon name="tag" color={color} />
                ),
            }} name="Orders" component={Orders} />

        </Drawer.Navigator>
    );
};

const Routes = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName="Home" >
                <Stack.Screen options={{
                    headerShown: false,
                }} name="Home" component={Home} />

                <Stack.Screen options={{
                    headerShown: false,
                }} name="Signin" component={Signin} />

                <Stack.Screen options={{
                    headerShown: false,
                }} name="SignUp" component={SignUp} />

                <Stack.Screen options={{
                    headerShown: false,
                }} name="Feed" component={DrawerComponent} />

                <Stack.Screen options={{
                    headerShown: false,
                }} name="Category" component={Category} />

                <Stack.Screen options={{
                    headerShown: false,
                }} name="Product" component={Product} />

                <Stack.Screen options={{
                    headerShown: false,
                }} name="Cart" component={Cart} />
            </Stack.Navigator>
        </NavigationContainer>

    );
};

export default Routes;
