import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TitleComponent = ({ children, style }) => {
  return <Text style={[styles.header, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'Inter-Bold',
    marginBottom: 16,
    color: '#171212',
  },
});

export default TitleComponent;
