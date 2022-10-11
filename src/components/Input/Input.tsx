import {ColorProps, createBox, TypographyProps} from '@shopify/restyle';
import React, {forwardRef} from 'react';
import {TextInputProps, TextInput} from 'react-native';
import {Theme} from './../../theme';

const Input = createBox<Theme, TextInputProps>(TextInput);

type Props = React.ComponentProps<typeof Input> &
  TypographyProps<Theme> &
  ColorProps<Theme> & {
    label?: string;
    touched?: boolean;
    error?: string;
  };

const MyTextInput = forwardRef(
  (props: Props, ref: React.ForwardedRef<TextInput>) => {
    return <Input {...props} ref={ref} />;
  },
);

// Error handled because of esline
MyTextInput.displayName = 'MyTextInput';

export default MyTextInput;
