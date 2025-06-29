import icons from '@/constants/icons'
import { login } from '@/lib/appwrite'
import { useGlobalContext } from '@/lib/global-provider'
import { Redirect } from 'expo-router'
import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '../constants/images'

const SignIn = () => {
  const { refetch, loading, isLogged } = useGlobalContext()

  if(!loading && isLogged) return <Redirect href='/'/>
  
const handleLogin = async () => {
    const result = await login()
    
    if (result) {
      refetch()
    } else {
      alert('Login failed. Please try again.');
    }
}

  return (
    <SafeAreaView className='bg-white h-full mt-4'>
      <ScrollView contentContainerClassName='h-full'>
        <Image source={images.onboarding} className='w-full h-4/6' />
         <View className='px-10'>
          <Text className='text-base text-center font-rubik uppercase'>Welcome to the ReState</Text>
          <Text className='text-3xl font-rubik-bold text-center text-black-300 mt-2'>
            Let's Get You Closer to {'\n'}
            <Text className='text-primary-300'>Your Ideal Home</Text>
          </Text>
          <Text className='text-lg text-center text-black-200 mt-12 font-rubik mt-2'>Login to ReState with Google</Text>
           <TouchableOpacity className='bg-white shadow-md shadow-zinc-300 rounded-full py-4 mt-5' onPress={handleLogin}>
            <View className='flex flex-row items-center justify-center'>
            <Image source={icons.google} className='w-5 h-5' resizeMode='contain' />
               <Text className='text-lg font-rubik-medium text-black-300 ml-2'>Continue with Google</Text>
            </View>
           </TouchableOpacity>
         </View>


      </ScrollView> 
    </SafeAreaView>


  )
}

export default SignIn