import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import TitleComponent from '../components/common/TitleComponent';
import TripCardComponent from '../components/trip/TripCardComponent';

const TripsScreen = () => {
  const trips = useSelector(state => state.trips.trips);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TitleComponent style={styles.title}>Your Trips</TitleComponent>
        <FlatList
          data={trips}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <TripCardComponent trip={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default TripsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  title: { fontSize: 18, marginBottom: 16, textAlign: 'center' },
});
