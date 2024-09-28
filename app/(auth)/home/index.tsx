import MainContainer from "@/components/containers/MainContainer";
import React, { useState } from "react";
import { View, Text } from "react-native";

const Home = () => {
  return (
    <MainContainer> 
      <View style={{
        backgroundColor: 'red',
        flex: 1,
        width: '95%',
      }}>

      <Text>Home</Text>
      </View>
    </MainContainer>
  );
};

export default Home;
