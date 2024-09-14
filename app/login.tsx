import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { useAuthStore } from '@/stores/useAuthStore'; // Ajuste o caminho conforme necessário
import MainContainer from '@/components/containers/MainContainer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuthStore();

  const handleLogin = () => {
    login();
  };

  return (
    <MainContainer>      
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
      <Button title="Login" onPress={handleLogin} />
    </MainContainer>
  );
};

export default Login;
