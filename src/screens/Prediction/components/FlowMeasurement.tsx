import React from 'react';
import { ScrollView } from 'react-native';
import * as Yup from 'yup';

import { Button, Text, MyTextInput, Select } from '@components';
import { Formik } from 'formik';

const CHOICES = [
  { label: 'Yes', value: 'YES' },
  { label: 'No', value: 'NO' },
];

const Schema = Yup.object().shape({
  value: Yup.string().required(),
  measured: Yup.string().required(),
  error: Yup.string().required(),
  deviation: Yup.string().required(),
  satisfies: Yup.string().required(),
});

type Props = {
  defValue?: string;
  defError?: string;
  defDeviation?: string;
  onDone: (result: {
    value: string;
    measured: string;
    error: string;
    deviation: string;
    satisfies: string;
  }) => void;
};
const FlowMeasurement = ({
  defValue = '',
  defError = '',
  defDeviation = '',
  onDone,
}: Props) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Formik
        onSubmit={onDone}
        validationSchema={Schema}
        initialValues={{
          value: defValue,
          measured: '',
          error: defError,
          deviation: defDeviation,
          satisfies: '',
        }}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          isValid,
        }) => (
          <>
            <MyTextInput
              label="Set value [ml]"
              value={values.value}
              onChangeText={handleChange('value')}
              onBlur={handleBlur('value')}
              touched={touched.value}
              error={errors.value}
            />
            <MyTextInput
              label="Measured value [ml]"
              value={values.measured}
              onChangeText={handleChange('measured')}
              onBlur={handleBlur('measured')}
              touched={touched.measured}
              error={errors.measured}
            />
            <MyTextInput
              label="Error [%]"
              value={values.error}
              onChangeText={handleChange('error')}
              onBlur={handleBlur('error')}
              touched={touched.error}
              error={errors.error}
            />
            <MyTextInput
              label="Allowed deviation [%]"
              value={values.deviation}
              onChangeText={handleChange('deviation')}
              onBlur={handleBlur('deviation')}
              touched={touched.deviation}
              error={errors.deviation}
            />
            <Text variant="sectionHeading" color="mainForeground">
              {'Satisfies?'}
            </Text>
            <Select
              horizontal
              choices={CHOICES}
              selected={values.satisfies}
              onSelect={handleChange('satisfies')}
            />
            <Button
              disabled={!isValid}
              marginTop="l"
              label="Next"
              onPress={() => handleSubmit()}
            />
          </>
        )}
      </Formik>
    </ScrollView>
  );
};

export default FlowMeasurement;
