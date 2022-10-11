import React from 'react';
import {ColorProps, createBox} from '@shopify/restyle';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {Theme} from '../../theme';

const BaseButton = createBox<Theme, TouchableOpacityProps>(TouchableOpacity);

type Props = React.ComponentProps<typeof BaseButton> &
  ColorProps<Theme> & {label?: string};

const Button = ({label, ...rest}: Props) => {
  return (
    <BaseButton {...rest}>
      <Text>{label}</Text>
    </BaseButton>
  );
};

export default Button;
