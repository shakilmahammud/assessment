import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { LOCATIONS } from '../constants/locations';
import { useDispatch } from 'react-redux';
import { addTrip } from '../store/trip/tripSlice';
import ButtonComponent from '../components/common/ButtonComponent';
import LocationBottomSheet from '../components/common/LocationSelectorBottomSheet';
import { SafeAreaView } from 'react-native-safe-area-context';
import TitleComponent from '../components/common/TitleComponent';
import Feather from 'react-native-vector-icons/Feather';

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [load, setLoad] = useState('');
  const [unload, setUnload] = useState('');
  const [date, setDate] = useState(new Date());

  const [openDate, setOpenDate] = useState(false);
  const [showLoadSheet, setShowLoadSheet] = useState(false);
  const [showUnloadSheet, setShowUnloadSheet] = useState(false);

  const handleCreateTrip = () => {
    if (!load || !unload || !date) {
      Alert.alert('Validation', 'Please fill all fields');
      return;
    }

    dispatch(
      addTrip({ id: Date.now(), load, unload, date: date.toISOString() }),
    );
    console.log('dsad');

    Alert.alert(
      'Trip Created',
      `${load} → ${unload} at ${date.toLocaleString()}`,
    );
    setLoad('');
    setUnload('');
    setDate(new Date());
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <TitleComponent style={styles.topBarTitle}>Trip Planner</TitleComponent>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Feather name="settings" size={24} color={'#171212'} />
        </TouchableOpacity>
      </View>
      <View>
        <TitleComponent style={styles.header}>Design Your Trip</TitleComponent>
        <ButtonComponent
          style={styles.btnStyle}
          textStyle={[styles.textStyle, styles.commonTextColor]}
          title={load || 'Load Location'}
          onPress={() => setShowLoadSheet(true)}
          activeOpacity={0.5}
        />

        <ButtonComponent
          style={styles.btnStyle}
          textStyle={[styles.textStyle, styles.commonTextColor]}
          title={unload || 'Unload Location'}
          onPress={() => setShowUnloadSheet(true)}
          activeOpacity={0.5}
        />

        <ButtonComponent
          style={styles.btnStyle}
          textStyle={[styles.textStyle, styles.dateTextColor]}
          title={date ? date?.toLocaleString() : 'Date & Time'}
          onPress={() => setOpenDate(true)}
          activeOpacity={0.5}
        />

        {openDate && (
          <DatePicker
            modal
            open={openDate}
            date={date}
            mode="datetime"
            onConfirm={selectedDate => {
              setOpenDate(false);
              setDate(selectedDate);
            }}
            onCancel={() => setOpenDate(false)}
          />
        )}

        <ButtonComponent title="Create Trip" onPress={handleCreateTrip} />

        <LocationBottomSheet
          visible={showLoadSheet}
          onClose={() => setShowLoadSheet(false)}
          onSelect={setLoad}
          data={LOCATIONS}
          title="Select Load Location"
        />

        <LocationBottomSheet
          visible={showUnloadSheet}
          onClose={() => setShowUnloadSheet(false)}
          onSelect={setUnload}
          data={LOCATIONS}
          title="Select Unload Location"
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    fontFamily: 'Inter-Bold',
    fontWeight: 700,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  topBarTitle: {
    fontSize: 23,
    flex: 1,
    textAlign: 'center',
  },
  header: {
    fontSize: 28,
    marginBottom: 24,
    lineHeight: 35,
    marginTop: 20,
  },

  btnStyle: {
    backgroundColor: '#F5F0F0',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    marginBottom: 24,
  },

  textStyle: {
    textAlign: 'left',
    fontSize: 16,
    fontWeight: 400,
    fontFamily: 'Inter-Regular',
  },

  dateTextColor: {
    color: '#876363',
  },

  commonTextColor: {
    color: '#171212',
  },
});
