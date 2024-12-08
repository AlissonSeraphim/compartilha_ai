import MainContainer from "@/components/containers/MainContainer";
import { secondaryColor } from "@/styles";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "@/utils/screenDimensions";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text } from "react-native";

const Profile = () => {
  return (
    <MainContainer>
      <View
        style={{
          backgroundColor: "red",
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
              Meu Perfil
            </Text>

            <Ionicons name="person-outline" size={32} color="white" />
          </View>
        </View>

        {/* <Text>Profile</Text> */}
      </View>
    </MainContainer>
  );
};

export default Profile;
