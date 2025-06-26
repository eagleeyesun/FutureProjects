import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex flex-col align-center justify-center items-center">      
      <Text className="text-yellow-500 text-xl">welcome karan kise</Text>
      <Link href="/sign-in">Sign-In</Link>
       <Link href='/explore'>Explore</Link>
        <Link href='/profile'>Profile</Link>
         <Link href='/properties/1'>Properties</Link>
    </View>
  );
}
