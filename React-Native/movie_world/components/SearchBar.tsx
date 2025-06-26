import { icons } from '@/constants/icons';
import React from 'react';
import { Image, TextInput, View } from 'react-native';

interface props {
    placeholder: string;
    onPress?: () => void;
}

const SearchBar = ({ onPress, placeholder }:props) => {
  return (
    <View className='flex flex-row  items-center bg-dark-200 rounded-full px-5 py-4'>
        <Image source={icons.search} className='size-5' resizeMode='contain'
         tintColor='#ab8bff' />
         <TextInput
            onPress={onPress}
            placeholder={placeholder}
            value=''
            onChange={ () => {}}
            placeholderTextColor='red'
            className='flex-1 ml-2'
         />
    </View>
  )
}

export default SearchBar