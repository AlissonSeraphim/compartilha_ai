import MainContainer from "@/components/containers/MainContainer";
import React, { useState } from "react";
import { View, Text } from "react-native";

const Notifications = () => {
  return (
    <MainContainer> 
      <View style={{
        backgroundColor: 'red',
        flex: 1,
        width: '95%',
      }}>

      <Text>Notifications</Text>
      </View>
    </MainContainer>
  );
};

export default Notifications;
