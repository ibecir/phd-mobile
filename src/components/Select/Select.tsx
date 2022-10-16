import React from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';

import { useAppTheme } from '@hooks';
import { Box, Text, Button } from '@components';

type Choice = {
  value: number | string;
  label: string;
};
type Props = {
  choices: Choice[];
  selected?: number | string;
  onSelect?: (value: number | string) => void;
  horizontal?: boolean;
};
const Select = ({ choices, selected, onSelect, horizontal = false }: Props) => {
  const { spacing, colors, borderRadii } = useAppTheme();
  return (
    <Box flexDirection={horizontal ? 'row' : 'column'}>
      {choices.map(({ label, value }, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => onSelect && onSelect(value)}
            style={{
              flex: horizontal ? 1 : 0,
              borderRadius: borderRadii.m,
              borderWidth: 1,
              marginHorizontal: horizontal ? spacing.xs : 0,
              borderColor: colors.primary,
              marginTop: spacing.s,
              alignItems: 'center',
              paddingVertical: spacing.s,
              backgroundColor:
                value === selected ? colors.primary : 'transparent',
            }}
          >
            <Text
              color={value === selected ? 'textOnPrimary' : 'mainForeground'}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </Box>
  );
};

export default Select;

const styles = StyleSheet.create({});
