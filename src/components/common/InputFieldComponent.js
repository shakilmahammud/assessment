import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const InputFieldComponent = ({
  placeholder,
  secureTextEntry,
  value,
  onChangeText,
  style,
  ...rest
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor="#876363"
      style={[styles.input, style]}
      secureTextEntry={secureTextEntry}
      value={value}
      onChangeText={onChangeText}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#F5F0F0',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 24,
    color: '#333',
  },
});

export default InputFieldComponent;
