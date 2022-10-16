import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';

import { Box, Text, Select } from '@components';

const DEVICES = [
  { label: 'Perfusor', value: 'Perfusor' },
  { label: 'Infusomat', value: 'Infusomat' },
];

type Props = {
  onDone: (value: string) => void;
};
const DeviceSelection = ({ onDone }: Props) => {
  const [selectedValue, setSelectedValue] = useState<string>('');
  useEffect(() => {
    if (selectedValue !== '') {
      onDone(selectedValue);
    }
  }, [selectedValue]);
  return (
    <Select
      choices={DEVICES}
      selected={selectedValue}
      onSelect={value => setSelectedValue(value as string)}
    />
  );
};

export default DeviceSelection;

const styles = StyleSheet.create({});
