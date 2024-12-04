import AvatarWithInitials from "@/components/avatar/avatar";
import MainContainer from "@/components/containers/MainContainer";
import { primaryColor, secondaryColor } from "@/styles";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "@/utils/screenDimensions";
import { Entypo } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, Image, FlatList } from "react-native";

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
                color: "white",
              }}
            >
              Olá, Alisson
            </Text>
            <Text
              style={{
                color: "white",
              }}
            >
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
          backgroundColor: "white",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 0.3,
          shadowRadius: 5,
          elevation: 5,
          paddingTop: 5,
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

  const EachSubscriptionCard = () => {
    return (
      <View
        style={{
          height: heightPercentageToDP("20"),
          width: widthPercentageToDP("40"),
          borderRadius: 20,
          alignSelf: "center",
          backgroundColor: "white",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 0.3,
          shadowRadius: 5,
          elevation: 5,
          paddingTop: 5,
        }}
      >
        <View style={{
          flex: 1,
        }}>

        <Image
          // src='https://www.behance.net/gallery/29632909/Random-Logo-1'
          source={
          {
            uri: 'https://plus.unsplash.com/premium_photo-1666901328734-3c6eb9b6b979?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }
          }
          // source={require('../../../assets/images/react-logo.png')}
          style={{
            // width: 400,
            // height: 400,
            // minHeight: 400,
            // minWidth: 400,
            resizeMode: 'contain',
            alignSelf: "center",
          }}
        />
        </View>

        <Text
          style={{
            fontSize: 16,
            textAlign: "center",
          }}
        >
          Logo
        </Text>

        <View>
          <Text>Texto 1</Text>
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
        <View style={{
          backgroundColor: 'red',
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>

        <FlatList
          data={['1', '2', '3', '4', '1', '2', '3', '4']}
          keyExtractor={item => item}
          numColumns={2}
          style={{
            backgroundColor: 'blue',
            display: 'flex',
            flex: 1,
            width: '100%',
          }}
          contentContainerStyle={{
            backgroundColor: 'yellow',
            alignItems: 'center',
            paddingVertical: 12,
            paddingHorizontal: 2,
          }}
          ListFooterComponent={<View style={{ height: 30 }} />}
          renderItem={({ item, index }) => {
            return (
              <View // espaçamento manual
              style={{
                marginBottom: 8, // Espaçamento vertical
                marginRight: index % 2 === 0 ? 24 : 0, // Espaçamento horizontal para itens à esquerda
              }}
            >
              <EachSubscriptionCard />
              </View>
            );
          }}
        />
        </View>
      </View>
    </MainContainer>
  );
};

export default Home;
