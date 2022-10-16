import React from 'react';

import { Box, Text } from '@components';

type Props = {
  title: string;
  children: React.ReactNode;
};
const Question = ({ title, children }: Props) => {
  return (
    <Box padding="m" flex={1}>
      <Box marginVertical="l" alignItems="center">
        <Text variant="header" color="mainForeground">
          {title}
        </Text>
      </Box>
      <Box flex={1}>{children}</Box>
    </Box>
  );
};

export default Question;
