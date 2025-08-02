
//Module imports

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation, useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { Button } from '@react-navigation/elements';
import type { StaticParamList } from '@react-navigation/native';

import FavoritesList from '../../../features/favorites/screens/FavoritesList';


//Typing configuration

type RootStackParamList = StaticParamList<typeof FavoritesStack>;
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

function HomeScreen() {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button onPress={() => navigation.navigate('Details')}>
                Go to Details
            </Button>
        </View>
    );
}

function DetailsScreen() {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Button onPress={() => navigation.goBack()}>Go back</Button>
        </View>
    );
}


//Stack configuration

const FavoritesStack = createNativeStackNavigator({
    initialRouteName: 'FavoritesList',
    screenOptions: {
        headerStyle: { backgroundColor: '#10052d' },
        headerTintColor: 'white'
    },
    screens: {
        FavoritesList: {
            screen: FavoritesList,
            options: {
                title: 'Favorites',
            },
        },
        Details: DetailsScreen,
    },
});
export const FavoritesNavigation = createStaticNavigation(FavoritesStack);