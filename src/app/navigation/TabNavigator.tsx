
//Module imports

import * as React from 'react';
import { useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import type { SceneRendererProps, NavigationState } from 'react-native-tab-view';

import { SuperheroesNavigation } from './stacks/SuperheroesStack';
import { TeamsNavigation } from './stacks/TeamsStack';
import { FavoritesNavigation } from './stacks/FavoritesStack';


//Routing configuration

const renderScene = SceneMap({
    superheroes: SuperheroesNavigation,
    teams: TeamsNavigation,
    favorites: FavoritesNavigation,
});

const routes = [
    { key: 'superheroes', title: 'Superheroes' },
    { key: 'teams', title: 'Teams' },
    { key: 'favorites', title: 'Favorites' },
];


// Tabs Configuration

type Route = {
    key: string;
    title: string;
};

const renderTabBar = (
    props: SceneRendererProps & { navigationState: NavigationState<Route> }
) => (
    <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: '#7c5ff5' }}
        style={{ backgroundColor: '#10052d',  }}
    />
);

export default function TabNavigator() {
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width, height: layout.height }}
            renderTabBar={renderTabBar}
            tabBarPosition="bottom"
        />
    );
}
