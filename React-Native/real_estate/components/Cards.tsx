import icons from '@/constants/icons';
import images from '@/constants/images';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';


interface Props {
  onPress?: () => void;
}

export const FeaturedCards = ({onPress}:Props) => {
  return (
    <TouchableOpacity onPress={onPress}
    className="flex mt-4 flex-col items-start w-48 h-60 relative">
     <Image source={images.japan} className='size-full rounded-2xl'/>
      <Image source={images.cardGradient}
       className='size-full rounded-2xl absolute bottom-0'
      />
      <View className='flex flex-row items-center bg-white/90
       px-3 py-1.5 rounded-full absolute top-5 right-5'>
        <Image source={icons.star} className='size-3.5' />
        <Text className='text-xs font-rubik-bold text-primary-300 ml-1'>
            4.4
        </Text>
      </View>
      <View className='flex flex-col items-start absolute bottom-5 inset-x-5'>
        <Text className='text-xl font-rubik-extrabold text-white'
         numberOfLines={1}>
        Modern Apartment</Text>
        <Text className='text-base text-white font-rubik'>At post Changatpuri, Tq.Paithan</Text>
        <View className='flex flex-row items-center justify-between w-full'> 
            <Text className='text-xl font-rubik-extrabold text-white'>
                $2,578
            </Text>
            <Image className='size-5' source={icons.heart} />
        </View>
      </View>
    </TouchableOpacity>
  )
}
export const Card = ({ onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} className='flex-1 w-full py-4 rounded-lg bg-white
    shadow-lg px-3 shadow-black relative'>
      <View className='flex flex-row items-center absolute px-2 top-5 right-5 bg-white/90 p-1 rounded-full z-50'>
              <Image source={icons.star} className='size-3.5' />
                <Text className='text-xs font-rubik-bold text-primary-300 ml-0.5'>
                    4.4
                </Text>
        </View>

        <Image source={images.newYork} className='w-full h-40 rounded-lg' />
          
          <View className='flex flex-col mt-2'>
            <Text 
                numberOfLines={1}
                className='text-xs font-rubik text-black-100'>
                Cozy Studio
            </Text>
            <Text className='font-xs font-rubik text-black-200'>Balaji Vihar</Text>
          </View>
        <View className='flex flex-row items-center justify-between mt-2'> 
            <Text className='text-base font-rubik-bold text-primary-300'>
                $2,578
            </Text>
            <Image className='w-5 h-5' tintColor="#191d31" source={icons.heart} />
        </View>
    </TouchableOpacity>
  )
}


