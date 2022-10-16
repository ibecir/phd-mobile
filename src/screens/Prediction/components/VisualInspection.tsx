import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { Box, Select, Text, Button } from '@components';

const CHOICES = [
  { label: 'Yes', value: 'YES' },
  { label: 'No', value: 'NO' },
];

type inpection = {
  clean: string;
  funcitional: string;
  markings: string;
  accessories: string;
};
type Props = {
  onDone: (results: inpection) => void;
};
const VisualInspection = ({ onDone }: Props) => {
  const [state, setState] = useState({
    clean: 'YES',
    funcitional: 'YES',
    markings: 'NO',
    accessories: 'YES',
  });
  return (
    <ScrollView style={{ flex: 1 }}>
      <Box>
        <Text variant="sectionHeading" color="mainForeground">
          {'Clean device?'}
        </Text>
        <Select
          choices={CHOICES}
          horizontal
          selected={state.clean}
          onSelect={value =>
            setState(oldState => ({ ...oldState, clean: value as string }))
          }
        />
      </Box>
      <Box marginTop="m">
        <Text variant="sectionHeading" color="mainForeground">
          {'Device is complete, functional, with prescribed casing?'}
        </Text>
        <Select
          choices={CHOICES}
          horizontal
          selected={state.funcitional}
          onSelect={value =>
            setState(oldState => ({
              ...oldState,
              funcitional: value as string,
            }))
          }
        />
      </Box>
      <Box marginTop="m">
        <Text variant="sectionHeading" color="mainForeground">
          {'Inscriptions and markings?'}
        </Text>
        <Select
          choices={CHOICES}
          horizontal
          selected={state.markings}
          onSelect={value =>
            setState(oldState => ({ ...oldState, markings: value as string }))
          }
        />
      </Box>
      <Box marginTop="m">
        <Text variant="sectionHeading" color="mainForeground">
          {'Power cords and other accessories necessary for normal operation?'}
        </Text>
        <Select
          choices={CHOICES}
          horizontal
          selected={state.accessories}
          onSelect={value =>
            setState(oldState => ({
              ...oldState,
              accessories: value as string,
            }))
          }
        />
      </Box>
      <Button marginTop="l" label="Next" onPress={() => onDone(state)} />
    </ScrollView>
  );
};

export default VisualInspection;
