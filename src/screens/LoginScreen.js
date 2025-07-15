import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { useDispatch } from 'react-redux';

import ButtonComponent from '../components/common/ButtonComponent';
import { login } from '../store/auth/authSlice';
import InputFieldComponent from '../components/common/InputFieldComponent';
import { storeUser } from '../utils/storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import { demoUsers } from '../constants/demoUsers';
import TitleComponent from '../components/common/TitleComponent';

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Validation Error', 'Email and Password are required.');
      return;
    }

    setIsLoading(true);

    try {
      const user = demoUsers.find(
        u => u.email === email && u.password === password,
      );

      if (user) {
        await storeUser(user);
        dispatch(login({ name: user.name, email: user.email }));
        navigation.replace('MainTabs');
      } else {
        Alert.alert('Login Failed', 'Invalid email or password.');
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TitleComponent style={styles.title}>Welcome</TitleComponent>
        <InputFieldComponent
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <InputFieldComponent
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <ButtonComponent
          title={isLoading ? 'Logging in...' : 'Login'}
          onPress={handleLogin}
          disabled={isLoading}
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 0,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 24,
  },
});
