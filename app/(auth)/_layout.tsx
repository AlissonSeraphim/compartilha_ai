// app/_layout.tsx
import React, { useEffect } from "react";
import { Slot, Stack, Tabs, useRouter, useSegments } from "expo-router";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import {
  AntDesign,
  Entypo,
  FontAwesome,
  MaterialIcons,
} from "@expo/vector-icons";
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { View } from "react-native";

const LayoutAuthRoutes = () => {
  return (
    <Tabs
      initialRouteName="home/index"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: 10,
        },
      }}
    >
      <Tabs.Screen
        name="home/index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={"home-outline"} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="search/index"
        options={{
          title: "Pesquisar",
          tabBarIcon: ({ color, focused }) => (
            <AntDesign name="search1" size={24} color="black" />
          ),
        }}
      />

      <Tabs.Screen
        name="new-group/index"
        options={{
          title: "Add Grupo",
          tabBarButton: (props) => (
            <GestureHandlerRootView style={{ position: "relative", top: -30 }}>
              <TouchableOpacity
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                  backgroundColor: "white",
                  justifyContent: "center",
                  alignItems: "center",
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 5 },
                  shadowOpacity: 0.3,
                  shadowRadius: 5,
                  elevation: 5,
                }}
              >
                <AntDesign name="pluscircleo" size={30} color={"black"} />
              </TouchableOpacity>
            </GestureHandlerRootView>
          ),
          tabBarIconStyle: {
            zIndex: 1,
          },
        }}
      />

      <Tabs.Screen
        name="notifications/index"
        options={{
          title: "Notificações",
          tabBarIcon: ({ color, focused }) => (
            <Entypo name="bell" size={24} color="black" />
          ),
        }}
      />

      <Tabs.Screen
        name="profile/index"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome name="user-circle" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
};

export default LayoutAuthRoutes;
