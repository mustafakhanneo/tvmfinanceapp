import { Tabs } from "expo-router";
import { View, Text, Image } from "react-native";
import { icons } from "../../constants";

const TabIcon = ({ icon, color, name, focused }) => {
    return (
      <View className="items-center justify-center gap-2">
        <Image
          source={icon}
          resizeMode="contain"
          tintColor={color}
          className="w-6 h-6"
        />
        <Text className={`${focused ? 'font-pilcrow' : 'font-archivo'} text-sm`} style={{ color: color}}>
          {name}
        </Text>
      </View>
    );
  };
  

const TabLayout = () => {

  return (
    <>
      <Tabs
      
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#a8d9d9',
          tabBarInactiveTintColor: '#A6ADBB',
          tabBarStyle: {
            backgroundColor: '#191E24',
            borderTopWidth: 1,
            borderTopColor: '#232533',
            height: 74,
          }
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
                <TabIcon
                  icon={icons.ihome}
                  color={color}
                  name="Home"
                  focused={focused}
                />
              ),
  
          }}
        />
        <Tabs.Screen
          name="amortization"
          options={{
            title: "Amortization",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
                <TabIcon
                  icon={icons.iamortization}
                  color={color}
                  name="Amortize"
                  focused={focused}
                />
              ),
  
          }}
        />
        <Tabs.Screen
          name="formulas"
          options={{
            title: "Formula",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
                <TabIcon
                  icon={icons.iformula}
                  color={color}
                  name="Formula"
                  focused={focused}
                />
              ),
  
          }}
        />
        <Tabs.Screen
          name="about"
          options={{
            title: "About",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
                <TabIcon
                  icon={icons.iabout}
                  color={color}
                  name="About"
                  focused={focused}
                />
              ),
  
          }}
        />
      </Tabs>
    </>
  );
};

export default TabLayout;
