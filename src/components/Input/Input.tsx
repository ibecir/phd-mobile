import {
  View,
  TextInput as RnTextInput,
  TextInputProps,
  Platform,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';
import {
  ColorProps,
  TypographyProps,
  createBox,
  useTheme,
} from '@shopify/restyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import type { Theme } from '../../theme';
import Text from '../Text';

const BaseTextInput = createBox<Theme, TextInputProps>(RnTextInput);
type Props = React.ComponentProps<typeof BaseTextInput> &
  TypographyProps<Theme> &
  ColorProps<Theme> & {
    label?: string;
    error?: string;
    touched?: boolean;
  };
const TextInput = React.forwardRef(
  (
    {
      label,
      error = '',
      style,
      secureTextEntry = false,
      placeholderTextColor,
      touched,
      onBlur,
      ...props
    }: Props,
    ref: React.ForwardedRef<RnTextInput>,
  ) => {
    const theme = useTheme<Theme>();
    const [focused, setFocued] = useState(false);
    const [isSecureTextEntry, setIsSecureTextEntry] = useState(secureTextEntry);
    const borderColor = focused
      ? 'primary'
      : error
      ? touched
        ? 'danger'
        : 'border'
      : 'border';
    return (
      <View style={{ marginBottom: 5 }}>
        {label && (
          <Text color="inputLabelText" variant="inputLabel">
            {label}
          </Text>
        )}
        <View style={{ paddingBottom: 15 }}>
          <View>
            <BaseTextInput
              ref={ref}
              onFocus={() => setFocued(true)}
              onBlur={e => {
                setFocued(false);
                if (onBlur) {
                  onBlur(e);
                }
              }}
              selectionColor={theme.colors.primary}
              alignItems="center"
              borderRadius="m"
              borderColor={borderColor}
              borderWidth={1}
              placeholderTextColor={
                placeholderTextColor
                  ? placeholderTextColor
                  : theme.colors.inputPlaceholder
              }
              padding={Platform.OS === 'ios' ? 'm' : 's'}
              paddingHorizontal="m"
              style={[{ fontSize: 14 }, style]}
              secureTextEntry={isSecureTextEntry}
              {...props}
            />
            {secureTextEntry && (
              <Pressable
                onPress={() => setIsSecureTextEntry(!isSecureTextEntry)}
                style={{
                  position: 'absolute',
                  right: theme.spacing.m,
                  top: 0,
                  bottom: 0,
                  justifyContent: 'center',
                }}
              >
                <Icon
                  name={isSecureTextEntry ? 'eye-outline' : 'eye-off-outline'}
                  size={24}
                  color={theme.colors[borderColor]}
                />
              </Pressable>
            )}
          </View>

          {error !== '' && touched && (
            <View style={{ position: 'absolute', bottom: 0, left: 10 }}>
              <Text variant="caption" color="danger">
                {error}
              </Text>
            </View>
          )}
        </View>
      </View>
    );
  },
);

TextInput.displayName = 'MyTextInput';

export default TextInput;
