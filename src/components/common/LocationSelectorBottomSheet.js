import React from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Pressable,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import TitleComponent from './TitleComponent';

const LocationBottomSheet = ({ visible, onClose, onSelect, data, title }) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <View style={styles.sheet}>
          <View style={styles.dragBar} />
          <TitleComponent style={{ fontSize: 22 }}>{title}</TitleComponent>
          <FlatList
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.item}
                onPress={() => {
                  onSelect(item.name);
                  onClose();
                }}
              >
                <Text>{item.name}</Text>
                <Icon name="arrow-right" size={24} color={'#171212'} />
              </TouchableOpacity>
            )}
          />
        </View>
      </Pressable>
    </Modal>
  );
};

export default LocationBottomSheet;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  sheet: {
    backgroundColor: '#fff',
    padding: 16,
    paddingTop: 0,
    maxHeight: '60%',
  },
  dragBar: {
    width: 40,
    height: 4,
    backgroundColor: '#aaa',
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: { fontSize: 16, fontWeight: 'bold', marginBottom: 12 },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    fontWeight: 400,
    fontFamily: 'Inter-Regular',
    color: '#171212',
  },
});
