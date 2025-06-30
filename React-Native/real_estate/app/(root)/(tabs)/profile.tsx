import { settings } from '@/constants/data'
import icons from '@/constants/icons'
import { logout } from '@/lib/appwrite'
import { useGlobalContext } from '@/lib/global-provider'
import React from 'react'
import { Alert, Image, ImageSourcePropType, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

interface SettingItemProps {
  icon: ImageSourcePropType;
  title: string;
  onPress?: () => void
  textStyle?: string
  showArrow?: boolean;
}

const SettingsItem = ({ icon,title,onPress,textStyle,showArrow = true}:SettingItemProps) => (
  <TouchableOpacity onPress={onPress} className='flex flex-row items-center justify-between
  py-3'>
    <View className='flex flex-row items-center gap-3'>
      <Image source={icon} className='size-6' />
      <Text className={`font-rubik-medium text-lg text-black-300 ${textStyle}`}>{title}</Text>
    </View>
    {
      showArrow && <Image source={icons.rightArrow} className='size-5' />
    }
  </TouchableOpacity>
)


const Profile = () => {
  const { user, refetch } = useGlobalContext()
  const handleLogout = async () => {
    const result = await logout()
    
 
    if(result) {
      Alert.alert('Success', 'You have been logged out successfully.')
      refetch()
    } else {
      Alert.alert('Error', 'Failed to log out. Please try again.')
    }
  }

  return (
    <SafeAreaView className='bg-white h-full'>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerClassName='pb-32 px-7'>
        <View className='flex flex-row items-center justify-between mt-5'>
          <Text className='text-xl font-rubik-bold'>
            Profile
          </Text>
          <Image source={icons.bell} className='size-5' />
        </View>
        <View className='flex flex-row justify-center mt-5'>
          <View className='flex flex-col items-center relative mt-5'>
            <Image source={{ uri: user?.avatar }} className='size-44 relative rounded-full' />
            <TouchableOpacity className='absolute bottom-10 right-2'>
              <Image source={icons.edit} className='size-7' />
            </TouchableOpacity>
            <Text className='text-2xl mt-2 font-rubik-bold'>{user?.name}</Text>
          </View>
        </View>
          <View className='flex flex-col mt-10'>
            <SettingsItem 
              icon={icons.calendar}
              title="My Bookings"
              onPress={() => {}}
              textStyle='text-lg font-rubik-medium'
            />
            <SettingsItem 
              icon={icons.wallet}
              title="Payments"
              onPress={() => {}}
              textStyle='text-lg font-rubik-medium'
            />
            
          </View>  

          <View className='flex flex-col mt-5 border-t pt-5 border-primary-200'>
             {settings.slice(2).map((item,index) => (
              <SettingsItem key={index} {...item} />
             ))}
            </View>   
                      <View className='flex flex-col border-t pt-2 border-primary-200'>
                        <SettingsItem textStyle='text-danger' icon={icons.logout} title="Logout" onPress={handleLogout} />
                        </View>


        </ScrollView>
    </SafeAreaView>

  )
}

export default Profile