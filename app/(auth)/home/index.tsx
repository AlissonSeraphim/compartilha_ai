import AvatarWithInitials from "@/components/avatar/avatar";
import ButtonPrimaryColor from "@/components/buttons/ButtonPrimaryColor";
import MainContainer from "@/components/containers/MainContainer";
import { primaryColor, secondaryColor } from "@/styles";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "@/utils/screenDimensions";
import { Entypo } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  Switch,
  Button,
  Alert,
  Pressable,
} from "react-native";

const Home = () => {
  const HomeHeader = () => {
    return (
      <View
        style={{
          backgroundColor: secondaryColor,
          height: heightPercentageToDP("20"),
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          width: widthPercentageToDP("100"),
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
          shadowOffset: { width: 5, height: 5 },
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
          // paddingTop: 5,
          paddingVertical: 5,
          justifyContent: "space-around",
          flexDirection: "column",
        }}
      >
        {/* <View
          style={{
            // backgroundColor: "red",
            height: "40%",
            // borderRadius: 100,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Os Netflixos
          </Text>
        </View> */}

        <Text
          style={{
            fontSize: 20,
            textAlign: "center",
            fontWeight: "bold",
            paddingTop: 10,
          }}
        >
          Os Netflixos
        </Text>

        <View
          style={{
            display: "flex",
            // backgroundColor: 'blue',
            height: "60%",
            gap: 4,
            justifyContent: "center",
            paddingHorizontal: 4,
          }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
              paddingHorizontal: 8
            }}
          >
            <Text>Valor:</Text>
            <Text>R$ 9,90</Text>
          </View>

          <View
            style={{
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
              paddingHorizontal: 8
            }}
          >
            <Text>Pagar até:</Text>
            <Text>26/08/2024</Text>
          </View>

          <View
            style={{
              alignItems: "center",
              gap: 4,
              paddingTop: 8,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                gap: 4,
                justifyContent: "center",
              }}
            >
              <Text>Participantes</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: 'space-around'
              }}
            >
              <AvatarWithInitials
                initials="AT"
                width={24}
                height={24}
                fontSize={12}
                backgroundColor="#a0a0a0"
              />
              <AvatarWithInitials
                initials="AT"
                width={24}
                height={24}
                fontSize={12}
                backgroundColor="#a0a0a0"
              />
              <AvatarWithInitials
                initials="AT"
                width={24}
                height={24}
                fontSize={12}
                backgroundColor="#a0a0a0"
              />
              <AvatarWithInitials
                initials="AT"
                width={24}
                height={24}
                fontSize={12}
                backgroundColor="#a0a0a0"
              />
              <AvatarWithInitials
                initials="AT"
                width={24}
                height={24}
                fontSize={12}
                backgroundColor="#a0a0a0"
              />
              <AvatarWithInitials
                initials="AT"
                width={24}
                height={24}
                fontSize={12}
                backgroundColor="#a0a0a0"
              />
            </View>
          </View>
        </View>
      </View>
    );
  };

  const [selectedButton, setSelectedButton] = useState("pertencente");

  const disabledButton1 = selectedButton != "pertencente";
  const disabledButton2 = selectedButton != "criados";
  const disabledButton3 = selectedButton != "pendentes";

  const SwitchButton = ({
    isDisabled = false,
    title = "N/A",
    onPress = () => {},
  }) => {
    console.log("isDisabled =>", isDisabled);
    return (
      <Pressable
        style={{
          borderRadius: 24,
          elevation: isDisabled ? undefined : 8,
          shadowOffset: isDisabled ? undefined : { width: 0, height: 4 },
          backgroundColor: isDisabled ? "#a0a0a0" : "#d42e27",
          width: "100%",
          height: 50,
          alignItems: "center",
          justifyContent: "center",
        }}
        // disabled={isDisabled}
        onPress={onPress}
      >
        <Text
          style={{
            fontSize: isDisabled ? 14 : 16,
            fontWeight: "bold",
            lineHeight: isDisabled ? 14 : 18,
            color: "white",
          }}
        >
          {title}
        </Text>
      </Pressable>
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
        {/* <Text>Switch Grupos</Text> */}
        <View
          style={{
            display: "flex",
            width: widthPercentageToDP('100'),
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            // gap: 16,
          }}
        >
          <View
            style={{
              width: '30%',
              left: 20,
              zIndex: disabledButton1 ? 0 : 1,
            }}
          >
            <SwitchButton
              isDisabled={disabledButton1}
              title="Pertencente"
              onPress={() => setSelectedButton("pertencente")}
            />
          </View>

          <View
            style={{
              width: '40%',
              zIndex: disabledButton2 ? 0 : 1,
            }}
          >
            <SwitchButton
              isDisabled={disabledButton2}
              title="Criados"
              onPress={() => setSelectedButton("criados")}
            />
          </View>

          <View
            style={{
              width: '30%',
              right: 20,
              zIndex: disabledButton3 ? 0 : 1,
            }}
          >
            <SwitchButton
              isDisabled={disabledButton3}
              title="Pendentes"
              onPress={() => setSelectedButton("pendentes")}
            />
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
            numColumns={2}
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
