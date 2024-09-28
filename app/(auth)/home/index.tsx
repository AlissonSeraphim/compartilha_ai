import AvatarWithInitials from "@/components/avatar/avatar";
import MainContainer from "@/components/containers/MainContainer";
import { primaryColor, secondaryColor } from "@/styles";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "@/utils/screenDimensions";
import { Entypo } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text } from "react-native";

const Home = () => {
  const HomeHeader = () => {
    return (
      <View
        style={{
          backgroundColor: secondaryColor,
          height: heightPercentageToDP("20"),
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          width: widthPercentageToDP("99"),
        }}
      >
        <View
          style={{
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            paddingTop: 20,
            paddingRight: 20,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 24,
              textAlign: "left",
              paddingLeft: 20,
              fontWeight: "bold",
            }}
          >
            Compartilha Ai
          </Text>

          <Entypo name="bell" size={24} color="white" />
        </View>

        <View
          style={{
            alignItems: "center",
            flex: 1,
            width: "100%",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            flexDirection: "row",
            gap: 20,
            justifyContent: "center",
            paddingLeft: 30,
          }}
        >
          <AvatarWithInitials initials="AT" />

          <View
            style={{
              flexDirection: "column",
              gap: 5,
              width: "80%",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Olá, Alisson
            </Text>
            <Text>
              Gerencie, Divida e acesse assinaturas de multiplos acessos com
              seus amigos &#x1F60A;{" "}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const HeaderCard = () => {
    return (
      <View
        style={{
          height: heightPercentageToDP("10"),
          width: widthPercentageToDP("80"),
          borderRadius: 20,
          top: -heightPercentageToDP("2"),
          alignSelf: "center",
          backgroundColor: 'white',
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 0.3,
          shadowRadius: 5,
          elevation: 5,
          paddingTop: 5
        }}
      >
        <Text
          style={{
            fontSize: 16,
            textAlign: "center",
          }}
        >
          Grupos
        </Text>

        <View
          style={{
            width: "100%",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        >
          <View
            style={{
              width: "30%",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 22,
                fontWeight: "bold",
              }}
            >
              10
            </Text>

            <Text
              style={{
                fontSize: 14,
              }}
            >
              Pertencentes
            </Text>
          </View>

          <View
            style={{
              width: "30%",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 22,
                fontWeight: "bold",
              }}
            >
              4
            </Text>

            <Text
              style={{
                fontSize: 14,
              }}
            >
              Criados
            </Text>
          </View>

          <View
            style={{
              width: "30%",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 22,
                fontWeight: "bold",
              }}
            >
              12
            </Text>

            <Text
              style={{
                fontSize: 14,
              }}
            >
              Pendentes
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <MainContainer>
      <View
        style={{
          // backgroundColor: "red",
          flex: 1,
        }}
      >
        <HomeHeader />
        <HeaderCard />
        <Text>Home</Text>
      </View>
    </MainContainer>
  );
};

export default Home;
