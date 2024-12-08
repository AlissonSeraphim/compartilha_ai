import MainContainer from "@/components/containers/MainContainer";
import { secondaryColor } from "@/styles";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "@/utils/screenDimensions";
import { Entypo, Feather, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, TextInput, FlatList, Pressable } from "react-native";

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
              // paddingTop: 4,
              textAlign: "left",
              fontWeight: "bold",
              // paddingTop: 10,
            }}
          >
            Os Netflixos
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

const Search = () => {
  const [value, onChangeText] = useState("");

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
                fontSize: 26,
                textAlign: "left",
                fontWeight: "bold",
              }}
            >
              Encontre sua assinatura
            </Text>

            <MaterialIcons name="manage-search" size={32} color="white" />
          </View>
        </View>

        <View
          style={{
            paddingTop: 24,
            gap: 8,
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: widthPercentageToDP("95"),
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              Busque pelo nome da assinatura ou do grupo:
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "white",
              borderRadius: 16,
              borderWidth: 2,
              width: "95%",
              height: 45,
              paddingHorizontal: 8,
              shadowOffset: { width: 0, height: 5 },
              shadowOpacity: 0.3,
              shadowRadius: 5,
              elevation: 5,
            }}
          >
            <TextInput
              onChangeText={(text) => onChangeText(text)}
              placeholder="Digite aqui"
              value={value}
              style={{
                flex: 1, // Ocupa o espaço restante
                height: "100%",
                fontSize: 16,
              }}
            />

            <Pressable
              style={{
                paddingRight: 4,
                // backgroundColor: 'blue',
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Feather name="search" size={24} color="black" />
            </Pressable>
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

export default Search;
