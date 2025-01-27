import { View, Pressable, Text } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons'


export function Header(){
    return (
        <View className='bg-slate-200 w-full flex flex-row items-center justify-between'>
            <Pressable className="w-10 h-10 bg-slate-200 rounded-full flexjustify-center">
                <Ionicons name="menu" size={20} color="#121212"/>
            </Pressable>

            <View className='flex flex-col items-center justify-center'>
                <Text className='text-center text-sm text-slate-800'>localização</Text>

                <View className='flex-row items-center justify-center gap-1'>
                    <Feather name='map-pin' size={14} color='#FF0000'/>
                    <Text className='text-lg font-bold'>Picos-Piaui</Text>
                </View>
            </View>

            <Pressable className="w-10 h-10 bg-slate-200 rounded-full flex justify-center">
                <Feather name="bell" size={20} color="#121212"/>
            </Pressable>
            
        </View>
    );
}