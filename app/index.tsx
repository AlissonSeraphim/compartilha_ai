import React, { useState } from "react";
import { View, TextInput, Button, Text, Image, Pressable } from "react-native";
import { useAuthStore } from "@/stores/useAuthStore"; // Ajuste o caminho conforme necessário
import MainContainer from "@/components/containers/MainContainer";
import ButtonPrimaryColor from "@/components/buttons/ButtonPrimaryColor";
import ButtonsSecondaryColor from "@/components/buttons/ButtonsSecondaryColor";
import { router } from "expo-router";

// Carregando a imagem com require
const capaImg = require("@/assets/imgs/capa.png");

const App = () => {
  return (
    <MainContainer>
      <View
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "80%",
            gap: 15,
            // backgroundColor: 'red'
          }}
        >
          <Image source={capaImg} />

          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 32,
            }}
          >
            Compartilha Ai
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 16,
              width: 300,
              lineHeight: 24,
            }}
          >
            Gerencie e compartilhe suas assinaturas com seus amigos
          </Text>
        </View>

        <View
          style={{
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 15,
            flex: 1,
            width: '90%',
            paddingBottom: 30
          }}
        >
          <ButtonPrimaryColor title="Junte-se" onPress={() => router.navigate('/login')} />
        </View>
      </View>
    </MainContainer>
  );
};

export default App;
