import React from 'react'
import { Tabs } from 'expo-router'
import { Image, ImageBackground, Text, View } from 'react-native'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'


const TabIcon = ({focused,icon,title}:any) => {
    if(focused){
        return (
            <ImageBackground
                source={images.highlight}
                style={{
                    width: 108,
                    height: 54,
                    marginTop: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 40,
                    overflow: 'hidden',
                    flexDirection: 'row',
                    marginBottom: 10,
                    marginLeft: 20,
                    marginRight: 20,
                }}
            >
                <Image
                    source={icon}
                    style={{ width: 20, height: 20, marginRight: 5, tintColor: '#151312' }}
                />
                <Text className='text-secondary font-semibold text-base'>
                    {title}
                </Text>
            </ImageBackground>
        ) 
    }

    return(
        <View className='size-full justify-center items-center mt-4 rounded-full'>
            <Image 
               source={icon} 
               tintColor='#A8B5DB' 
               className='size-5' />
        </View>
    )
    
}

const _Layout = () => {
    return (
        <Tabs
        screenOptions={{
            tabBarShowLabel: false, //hide the blue text below the icon
            tabBarItemStyle: {
                width: '100%',
                height:'100%',
                justifyContent: 'center',
                alignItems: 'center',
            },
            tabBarStyle: {
                backgroundColor: '#0f0D23',
                borderRadius: 50,
                marginHorizontal: 20,
                marginBottom: 24,
                height: 52,
                position: 'absolute',
                overflow: 'hidden',
                borderWidth: 1,
                borderColor: '#0f0D23'
            }
        }}
          
        >
            <Tabs.Screen
                name='index'
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                        focused={focused}
                        icon={icons.home}
                        title='Home'
                        />
                    )
                }}
            />
            <Tabs.Screen
                name='search'
                options={{
                    title: 'Search',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon 
                            focused={focused}
                            icon={icons.search}
                            title='Search'
                        />
                    )
                }}
            />
            <Tabs.Screen
                name='saved'
                options={{
                    title: 'Saved',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon 
                            focused={focused}
                            icon={icons.save}
                            title='Saved'
                        />
                    )
                }}
            />
            <Tabs.Screen
                name='profile'
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon 
                            focused={focused}
                            icon={icons.person}
                            title='Profile'
                        />
                    )
                }}
            />
        </Tabs>
    )
}

export default _Layout