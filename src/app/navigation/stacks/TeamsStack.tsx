
//Module imports

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation, useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { Button } from '@react-navigation/elements';
import type { StaticParamList } from '@react-navigation/native';

import TeamsList from '../../../features/teams/screens/TeamsList';


//Typing configuration

type RootStackParamList = StaticParamList<typeof TeamsStack>;
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

const TeamsStack = createNativeStackNavigator({
    initialRouteName: 'TeamsList',
    screenOptions: {
        headerStyle: { backgroundColor: '#10052d' },
        headerTintColor: 'white'
    },
    screens: {
        TeamsList: {
            screen: TeamsList,
            options: {
                title: 'Teams',
            },
        },
        Details: DetailsScreen,
    },
});
export const TeamsNavigation = createStaticNavigation(TeamsStack);