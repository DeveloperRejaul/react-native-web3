import React from 'react';
import { IIconProps } from './type';
import { Path, Svg } from 'react-native-svg';

export default function ClockIcon(props: IIconProps) {
  return (
    <Svg {...props} width={props.size || 25} height={props.size || 25} viewBox='0 0 24 24' fill='none' >
      <Path d='M19 10C19 13.866 15.866 17 12 17C8.13401 17 5 13.866 5 10M19 10C19 6.13401 15.866 3 12 3C8.13401 3 5 6.13401 5 10M19 10V14.7998V16.1998C19 17.88 19 18.72 18.673 19.3618C18.3854 19.9263 17.9265 20.3852 17.362 20.6728C16.7202 20.9998 15.8802 20.9998 14.2 20.9998H9.8C8.11984 20.9998 7.27976 20.9998 6.63803 20.6728C6.07354 20.3852 5.6146 19.9263 5.32698 19.3618C5 18.72 5 17.88 5 16.1998V14.7998V10M12 7V10L14 11.5' stroke={props.color || '#000000' } />
    </Svg>
  );
}