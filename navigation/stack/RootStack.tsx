import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Pressable } from "react-native";
import { useDispatch } from "react-redux";
import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import { logout } from "../../redux/action/auth.actions";
import DailyRecord from "../../screens/DailyRecord";
import StoreLedger from "../../screens/StoreLedger";
import SuppliedForm from "../../screens/SuppliedFormScreen";
import TabOneScreen from "../../screens/TabOneScreen";
import { RootTabParamList, RootTabScreenProps } from "../../types";

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  const dispatch = useDispatch();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<"TabOne">) => ({
          title: "Products",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="shopping-cart" color={color} />
          ),
          headerRight: () => (
            <Pressable
              onPress={() => dispatch(logout())}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name="power-off"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={StoreLedger}
        options={{
          title: "Store Ledger",
          tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />,
        }}
      />

      <BottomTab.Screen
        name="TabThree"
        component={SuppliedForm}
        options={{
          title: "Goods Received",
          tabBarIcon: ({ color }) => <TabBarIcon name="check" color={color} />,
        }}
      />

      <BottomTab.Screen
        name="TabFour"
        component={DailyRecord}
        options={{
          title: "Daily Report",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="bookmark" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

export default BottomTabNavigator;
