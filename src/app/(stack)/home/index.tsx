import { Image, Text, View } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { Button, HStack } from '@components';
import MetamaskIcon from 'src/assets/icon/MetamaskIcon';
import { useToken } from '@hooks/useToken';
import CreditIcon from 'src/assets/icon/CreditIcon';
import MonyIcon from 'src/assets/icon/MonyIcon';
import ClockIcon from 'src/assets/icon/ClockIcon';
import CheckIcon from 'src/assets/icon/CheckIcon';
import { Input } from '@platform-components';

const BLUE_COLOR = useToken('colors', 'blue700');
const data = [
  'https://i.ibb.co/FJKrV0m/motorcycle-png-20320.png',
  'https://i.ibb.co/RSrb8tm/motorcycles-icon-png-2710.png',
  'https://i.ibb.co/ZzGLxRN/motorcycle-png-20325.png'
];

interface ICardProps {
  title: string,
  price: number,
  icon: React.ReactNode
}


function HeaderLeftTitle () {
  return (
    <View className='flex-row' style={{paddingLeft:20}}>
      <Text className='text-blue600 font-bold text-2xl '>Bike</Text>
      <Text className='text-blue400 font-bold text-2xl '>Chain</Text>
    </View>
  );
}

function HeaderRightButton () {
  return (
    <View style={{paddingRight:20}}>
      <Button text='Metamask ID' className='px-2 bg-blue300 hover:bg-blue200' textStyle={{color:useToken('colors','blue900')}} leftIcon={<MetamaskIcon className='mr-2' />} />
    </View>
  );
}

function Card ({title, price, icon}: ICardProps) {
  return (
    <View className='h-28 w-40 bg-white rounded-lg shadow-sm p-2 px-4 mx-4 my-4'>
      <HStack className='justify-between items-center flex-1'>
        <View>
          <Text className='text-black text-sm font-medium'>{title}</Text>
          <Text className='text-black text-lg font-bold'>{price}</Text>
        </View>
        {icon}
      </HStack>
    </View>
  );
}

export default function main() {
  return (
    <View >
      <Stack.Screen 
        options={{
          title:'',
          headerLeft:()=> <HeaderLeftTitle />,
          headerRight:()=><HeaderRightButton />,
        }}
      />
      
      <View className='h-screen overflow-y-scroll px-6'>
        <HStack className='self-end py-5'>
          <Text className='text-blueGray800 text-xl font-semibold'>Welcome </Text>
          <Text className='text-blue700 text-xl font-semibold'>Rezaul!</Text>
        </HStack>

        {/* card part  */}
        <HStack className='justify-center flex-wrap'>
          <Card title='BNB Credit' price={20} icon={<CreditIcon size={40} />} />
          <Card title='BNB Due' price={20} icon={<MonyIcon size={40} color={BLUE_COLOR} />} />
          <Card title='Ride Minutes' price={20} icon={<ClockIcon size={40} color={BLUE_COLOR} />} />
          <Card title='Bike Status' price={20} icon={<CheckIcon size={40} color={BLUE_COLOR} />} />
        </HStack>

        {/* input part   */}
        <HStack className='justify-center flex-wrap py-9 '>
          <View className='p-4 rounded-md gap-y-5 border border-coolGray200 mr-2 my-2'>
            <Text className='text-center bg-blue300 py-2 rounded-md font-bold'> Pay Deo  amount </Text>
            <Input />
            <Button text='Submit' className='bg-blue400 hover:bg-blue300' />
          </View>
          <View className='p-4 rounded-md gap-y-5 border border-coolGray200 ml-2 my-2'>
            <Text className='text-center bg-blue300 py-2 rounded-md font-bold'> Pay Deo  amount </Text>
            <Input />
            <Button text='Submit' className='bg-blue400 hover:bg-blue300' />
          </View>
        </HStack>

        {/* Shop part */}
        <HStack className='mb-40 justify-center flex-wrap'>
          {data.map(uri=> (
            <View key={uri} className='w-[20rem] border border-coolGray200 px-3 py-4 mx-2 my-3 rounded-xl'>
              <View className='w-[18rem] h-[10rem] overflow-hidden pb-4'>
                <Image source={{uri}} style={{height:'100%', width:'100%', resizeMode:'contain'}} />
              </View>
              <Text className='text-warmGray500 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, saepe. Voluptatum quam nisi porro cumque voluptatem fuga provident recusandae ullam!</Text>
            </View>
          ))}
        </HStack>
      </View>
    </View>
  );
}