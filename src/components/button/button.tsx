import { useToken } from '@hooks/useToken';
import React from 'react';
import { TextStyle, ViewStyle,Pressable, Text,ActivityIndicator, GestureResponderEvent} from 'react-native';

interface IPropsType {
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  text?: string;
  isLoading?: boolean;
  textStyle?: TextStyle;
  containerStyle?: ViewStyle;
  className?: string;
  leftIcon?: React.ReactNode
}

const textColor = useToken('colors', 'gray');
const ICON_SIZE = useToken('size','6');

export default function button({ onPress ,text,isLoading,textStyle,containerStyle,className, leftIcon}: IPropsType) {
  return (
    <Pressable
      disabled={isLoading}
      style={containerStyle}
      className={`bg-blue400 justify-center items-center rounded-md py-1 hover:bg-blue300 flex-row ${className}`}
      onPress={onPress}
    >
      {leftIcon && leftIcon}
      {isLoading ? (
        <ActivityIndicator size={ICON_SIZE} color={'#fff'} />
      ) : (
        <Text
          style={textStyle}
          className={`text-[${textColor}] android:font-semibold ios:font-semibold text-lg web:font-bold`}
        >
          {text || 'Click Me'}
        </Text>
      )}
    </Pressable>
  );
}
