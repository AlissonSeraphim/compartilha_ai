import MainContainer from "@/components/containers/MainContainer";
import React, { useState } from "react";
import { View, Text } from "react-native";

const NewGroup = () => {
  return (
    <MainContainer> 
      <View style={{
        backgroundColor: 'red',
        flex: 1,
        width: '95%',
      }}>

      <Text>NewGroup</Text>
      </View>
    </MainContainer>
  );
};

export default NewGroup;
