
//Module imports

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation, useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { Button } from '@react-navigation/elements';
import type { StaticParamList } from '@react-navigation/native';

import SuperheroesList from '../../../features/superheroes/screens/SuperheroesList';

//Typing configuration

type RootStackParamList = StaticParamList<typeof SuperheroesStack>;
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

const SuperheroesStack = createNativeStackNavigator({
    initialRouteName: 'SuperheroesList',
    screenOptions: {
        headerStyle: { backgroundColor: '#10052d' },
        headerTintColor: 'white'
    },
    screens: {
        SuperheroesList: {
            screen: SuperheroesList,
            options: {
                title: 'Superheroes',
            },
        },
        Details: DetailsScreen,
    },
});
export const SuperheroesNavigation = createStaticNavigation(SuperheroesStack);