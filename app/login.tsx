import React, { useState } from "react";
import { View, TextInput, Button, Text, Image, Dimensions } from "react-native";
import { useAuthStore } from "@/stores/useAuthStore"; // Ajuste o caminho conforme necessário
import MainContainer from "@/components/containers/MainContainer";
import InputTextPrimary from "@/components/inputs/InputTextPrimary";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { heightPercentageToDP, widthPercentageToDP } from "@/utils/screenDimensions";
import ButtonPrimaryColor from "@/components/buttons/ButtonPrimaryColor";

// Carregando a imagem com require
const loginImg = require("@/assets/imgs/login.jpg");

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuthStore();

  const handleLogin = () => {
    login();
  };

  return (
    <MainContainer>
      <View
        style={{
          width: "100%",
          height: "100%",
          alignItems: "center",
          gap: 25,
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            gap: 15,
          }}
        >
          <Image
            source={loginImg}
            style={{
              width: 400,
              height: 300,
              objectFit: "contain",
            }}
          />

          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 24,
            }}
          >
            Compartilha Ai
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,
              width: 300,
              lineHeight: 24,
            }}
          >
            Otimize sua busca por grupos de compartilhamento de acessos e telas
          </Text>
        </View>

        <View
          style={{
            gap: 15,
            width: "90%",
            alignItems: "center",
            paddingRight: 30,
          }}
        >
          <View
            style={{
              width: "80%",
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
            }}
          >
            <AntDesign name="sharealt" size={24} color="black" />

            <InputTextPrimary
              initialValue={email}
              onChangeText={setEmail}
              placeholder="Email"
            />
          </View>

          <View
            style={{
              width: "80%",
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
            }}
          >
            <MaterialCommunityIcons
              name="account-group-outline"
              size={24}
              color="black"
            />

            <InputTextPrimary
              initialValue={password}
              onChangeText={setPassword}
              placeholder={"Senha"}
              secureTextEntry={true}
            />
          </View>

          <View
            style={{
              width: widthPercentageToDP("90"),
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <Text style={{ fontWeight: "bold", color: "gray" }}>
              Esqueci minha senha
            </Text>
          </View>
        </View>

        <View
          style={{
            alignItems: "center",
            width: "80%",
            flex: 1,
            justifyContent: "space-around",
            height: "50%",
          }}
        >
          <ButtonPrimaryColor title="Login" onPress={handleLogin} height={heightPercentageToDP("5")} />

          <View
            style={{
              borderBottomColor: "gray",
              borderBottomWidth: 1,
              width: "100%",
            }}
          />

          <View
            style={{
              width: "100%",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <View
              style={{
                width: "50%",
                alignItems: "center",
              }}
            >
              <ButtonPrimaryColor title="Facebook" onPress={handleLogin} height={heightPercentageToDP("5")} />
            </View>

            <View
              style={{
                width: "50%",
                alignItems: "center",
              }}
            >
              <ButtonPrimaryColor title="Google" onPress={handleLogin} height={heightPercentageToDP("5")}  />
            </View>
          </View>


          <View
              style={{
                width: widthPercentageToDP('100'),
                alignItems: "center",
                justifyContent: 'center',
                flexDirection: 'row',
                gap: 30
              }}
            >
              <Text>Novo no <Text style={{fontWeight: 'bold'}}> Compartilha ai ?</Text> </Text>

              <Text style={{
                fontWeight: 'bold',
                // color: 'gray',
                textDecorationLine: 'underline',
              }}>Cadastre-se</Text>
            </View>

        </View>
      </View>
    </MainContainer>
  );
};

export default Login;
