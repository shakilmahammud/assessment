import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ButtonComponent from '../components/common/ButtonComponent';
import { logout } from '../store/auth/authSlice';
import { SafeAreaView } from 'react-native-safe-area-context';
import TitleComponent from '../components/common/TitleComponent';
import { removeUser } from '../utils/storage';

const SettingsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    removeUser();
    navigation.replace('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View>
          <Image
            source={require('../asset/images/user.png')}
            style={styles.avatar}
          />
          <TitleComponent style={styles.name}>{user?.name}</TitleComponent>
          <Text style={styles.email}>{user?.email}</Text>
        </View>
        <View style={styles.buttonWrapper}>
          <ButtonComponent
            title="Logout"
            style={styles.btn}
            onPress={handleLogout}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: { width: 128, height: 128, borderRadius: 50, marginBottom: 16 },
  name: { fontSize: 22, marginBottom: 0, lineHeight: 28 },
  email: { fontSize: 16, color: '#876363', lineHeight: 24 },
  buttonWrapper: {
    width: '100%',
  },
  btn: {
    paddingVertical: 9.5,
  },
});
