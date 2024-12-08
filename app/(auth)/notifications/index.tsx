import MainContainer from "@/components/containers/MainContainer";
import { secondaryColor } from "@/styles";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "@/utils/screenDimensions";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";

const EachSubscriptionCard = () => {
  return (
    <View
      style={{
        height: heightPercentageToDP("7"),
        width: widthPercentageToDP("90"),
        borderRadius: 20,
        alignSelf: "center",
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
        // paddingTop: 5,
        paddingVertical: 5,
        justifyContent: "space-around",
        flexDirection: "column",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          paddingHorizontal: 4,
          // backgroundColor: "red",
          height: "100%",
        }}
      >
        <View
          style={{
            // backgroundColor: "blue",
            width: "40%",
            height: "100%",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              paddingLeft: 8,
              textAlign: "left",
              fontWeight: "bold",
            }}
          >
            Solicitação de Grupo
          </Text>
        </View>

        <View
          style={{
            // backgroundColor: "blue",
            width: "60%",
            height: "100%",
            justifyContent: "center",
            paddingRight: 8,
          }}
        >
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                fontSize: 14,
                textAlign: "center",
              }}
            >
              Assinatura:
            </Text>

            <Text
              style={{
                fontSize: 14,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Netflix
            </Text>
          </View>

          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                fontSize: 14,
                textAlign: "center",
              }}
            >
              N° Participantes:
            </Text>

            <Text
              style={{
                fontSize: 14,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              3
            </Text>
          </View>

          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                fontSize: 14,
                textAlign: "center",
              }}
            >
              Valor (participante):
            </Text>

            <Text
              style={{
                fontSize: 14,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              R$ 10,00
            </Text>
          </View>

          
        </View>
      </View>
    </View>
  );
};


const Notifications = () => {
  return (
    <MainContainer>
      <View
        style={{
          flex: 1,
        }}
      >
                <View
          style={{
            backgroundColor: secondaryColor,
            height: heightPercentageToDP("10"),
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            width: widthPercentageToDP("100"),
          }}
        >
          <View
            style={{
              width: "100%",
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "flex-end",
              display: "flex",
              height: "100%",
              paddingVertical: 12,
              paddingHorizontal: 24,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 24,
                textAlign: "left",
                fontWeight: "bold",
              }}
            >
              Notificações
            </Text>

            <Ionicons name="notifications-outline" size={32} color="white" />

          </View>
        </View>

        <View
          style={{
            // backgroundColor: "red",
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FlatList
            data={["1", "2", "3", "4", "1", "2", "3", "4"]}
            keyExtractor={(item) => item}
            // numColumns={2}
            style={{
              // backgroundColor: "blue",
              display: "flex",
              flex: 1,
              width: "100%",
            }}
            contentContainerStyle={{
              // backgroundColor: "yellow",
              alignItems: "center",
              paddingVertical: 12,
              paddingHorizontal: 2,
            }}
            ListFooterComponent={<View style={{ height: 30 }} />}
            renderItem={({ item, index }) => {
              return (
                <View // espaçamento manual
                  style={{
                    marginBottom: 24, // Espaçamento vertical
                    // marginRight: index % 2 === 0 ? 24 : 0, // Espaçamento horizontal para itens à esquerda
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

export default Notifications;
