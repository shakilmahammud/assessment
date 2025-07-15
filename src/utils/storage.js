import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeUser = async user => {
  try {
    await AsyncStorage.setItem('user', JSON.stringify(user));
  } catch (e) {
    console.log('Storing user failed:', e);
  }
};

export const getStoredUser = async () => {
  try {
    const value = await AsyncStorage.getItem('user');
    return value ? JSON.parse(value) : null;
  } catch (e) {
    console.log('Reading user failed:', e);
    return null;
  }
};

export const removeUser = async () => {
  try {
    await AsyncStorage.removeItem('user');
  } catch (e) {
    console.log('Removing user failed:', e);
  }
};
