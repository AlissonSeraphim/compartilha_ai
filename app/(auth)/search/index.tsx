import MainContainer from "@/components/containers/MainContainer";
import React, { useState } from "react";
import { View, Text } from "react-native";

const Search = () => {
  return (
    <MainContainer> 
      <View style={{
        backgroundColor: 'red',
        flex: 1,
        width: '95%',
      }}>

      <Text>Search</Text>
      </View>
    </MainContainer>
  );
};

export default Search;
