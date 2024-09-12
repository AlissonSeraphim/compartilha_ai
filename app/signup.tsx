import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Adicione sua lógica de criação de conta aqui
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Email:</Text>
      <TextInput 
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <Text>Password:</Text>
      <TextInput 
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <Button title="Sign Up" onPress={handleSignup} />
    </View>
  );
};

export default Signup;
