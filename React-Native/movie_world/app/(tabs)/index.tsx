import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import { useRouter } from "expo-router";
import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";

export default function Index() {
  const router = useRouter()

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchMovies({ query: "" }));
  console.log(movies)
 

  return (
    <View className="flex-1">
      <Image source={images.bg} className="absolute w-full z-0" />
      <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10, minHeight: "100%" }}>
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />

        {moviesLoading ? (
          <ActivityIndicator 
           size='large'
           color='#0000ff'
           className="mt-10 self-center"
          />
        ): moviesError ? (
          <Text>Error: {moviesError?.message}</Text>
        ): (
          <View className="flex-1 mt-5 z-10">
          <SearchBar
            onPress={() => router.push('/search')}
            placeholder="Search for a movies"
          />
        </View>
        )}

        {/* <>
        <Text className="text-lg text-white font-bold mt-5 mb-3">Latest Movies</Text>

        <FlatList 
            data={movies}
            renderItem={ ({item}) => (
              <Text className="text-white text-sm">{item.title}</Text>
            )}
        />
        </> */}

        

      </ScrollView>
    </View>
  );
}
