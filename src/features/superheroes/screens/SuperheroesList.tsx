import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
// import { useHeroes } from '../hooks/useHeroes';
// import HeroCard from '../components/HeroCard';

export default function SuperheroesList() {
//   const { heroes, isLoading, error } = useHeroes();

//   if (isLoading) return <View><Text>Cargando...</Text></View>;
//   if (error) return <View><Text>Error al cargar héroes</Text></View>;

  return (
    <View style={styles.container}>
      {/* <FlatList
        data={heroes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <HeroCard hero={item} />}
      /> */}
      <Text>Hola SuperheroesList</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 10 },
});
