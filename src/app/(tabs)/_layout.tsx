import { colors, fontSize } from "@/constants/tokens";
import {
  FontAwesome,
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
// import { BlurView } from "expo-blur";
import { Tabs } from "expo-router";

const TabNavigation = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarLabelStyle: { fontSize: fontSize.xs, fontWeight: "500" },
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderTopWidth: 0,
          padding: 8,
        },
        // tabBarBackground: () => (
        //   <BlurView
        //     intensity={95}
        //     style={{
        //       ...StyleSheet.absoluteFillObject,
        //       overflow: "hidden",
        //       borderTopLeftRadius: 20,
        //       borderTopRightRadius: 20,
        //     }}
        //   />
        // ),
      }}
    >
      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favorites",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="playlists"
        options={{
          title: "Playlists",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="playlist-play"
              color={color}
              size={28}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(songs)"
        options={{
          title: "Songs",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="musical-notes-sharp" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="artists"
        options={{
          title: "Artists",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="users-line" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabNavigation;
