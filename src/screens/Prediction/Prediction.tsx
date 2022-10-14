import React, { useState, useRef } from 'react';
import { ScrollView } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import PagerView from 'react-native-pager-view';

import { Button, Box, MyTextInput, Text } from '@components';
import { PredictionFormType } from 'services/types';
import { PredictionService } from '@services';

import { DeviceSelection } from './components';
const ValidationSchema = Yup.object().shape({
  year: Yup.string().required('Field required'),
});

const Prediction = () => {
  const viewPager = useRef<PagerView>(null);
  const [device, setDevice] = useState<string | null>(null);
  const handlePrediction = (values: PredictionFormType) => {
    PredictionService.sendPrediction(values).then(data =>
      console.log('BELE 123 ', data),
    );
  };

  return (
    <Box flex={1} bg="mainBackground">
      <PagerView
        ref={viewPager}
        scrollEnabled={false}
        style={{ flex: 1 }}
        initialPage={0}
      >
        <Box key="1">
          <DeviceSelection
            onDone={value => {
              setDevice(value);
              viewPager?.current?.setPage(1);
            }}
          />
        </Box>
        <Box key="2">
          <Text>Setep 2</Text>
        </Box>
      </PagerView>
    </Box>
  );
  return (
    <Box flex={1} bg="mainBackground" padding="m">
      <Formik
        initialValues={{
          year: 0,
          device: '',
          manufacturer: '',
          type: '',
          output_class: '',
          first_visual_inspection: '',
          second_visual_inspection: '',
          third_visual_inspection: '',
          fourth_visual_inspection: '',
          parameter_of_inspection: '',
          first_set_value: 0,
          first_measured_value: 0,
          first_error: 0,
          first_allowed_deviation: 0,
          first_decision: '',
          second_set_value: 0,
          second_measured_value: 0,
          second_error: 0,
          second_allowed_deviation: 0,
          second_decision: '',
          third_set_value: 0,
          third_measured_value: 0,
          third_error: 0,
          third_allowed_deviation: 0,
          third_decision: '',
          fourth_set_value: 0,
          fourth_measured_value: 0,
          fourth_error: 0,
          fourth_allowed_deviation: 0,
          fourth_decision: '',
          fifth_set_value: 0,
          fifth_measured_value: 0,
          fifth_error: 0,
          fifth_allowed_deviation: 0,
          fifth_decision: '',
          sixth_set_value: 0,
          sixth_measured_value: 0,
          sixth_error: 0,
          sixth_allowed_deviation: 0,
          sixth_decision: '',
        }}
        validationSchema={ValidationSchema}
        onSubmit={handlePrediction}
      >
        {({ handleChange, handleSubmit, values, errors, touched, isValid }) => {
          return (
            <ScrollView>
              <MyTextInput
                borderColor="mainForeground"
                borderWidth={1}
                flexDirection={'row'}
                value={values.year + ''}
                onChangeText={handleChange('year')}
              />
              <MyTextInput
                borderColor="mainForeground"
                borderWidth={1}
                flexDirection={'row'}
                value={values.device + ''}
                onChangeText={handleChange('device')}
              />
              <MyTextInput
                borderColor="mainForeground"
                borderWidth={1}
                flexDirection={'row'}
                value={values.manufacturer + ''}
                onChangeText={handleChange('manufacturer')}
              />
              <MyTextInput
                borderColor="mainForeground"
                borderWidth={1}
                flexDirection={'row'}
                value={values.type + ''}
                onChangeText={handleChange('type')}
              />
              <MyTextInput
                borderColor="mainForeground"
                borderWidth={1}
                flexDirection={'row'}
                value={values.first_visual_inspection + ''}
                onChangeText={handleChange('first_visual_inspection')}
              />
              <MyTextInput
                borderColor="mainForeground"
                borderWidth={1}
                flexDirection={'row'}
                value={values.second_visual_inspection + ''}
                onChangeText={handleChange('second_visual_inspection')}
              />
              <MyTextInput
                borderColor="mainForeground"
                borderWidth={1}
                flexDirection={'row'}
                value={values.third_visual_inspection + ''}
                onChangeText={handleChange('third_visual_inspection')}
              />
              <MyTextInput
                borderColor="mainForeground"
                borderWidth={1}
                flexDirection={'row'}
                value={values.fourth_visual_inspection + ''}
                onChangeText={handleChange('fourth_visual_inspection')}
              />
              <MyTextInput
                borderColor="mainForeground"
                borderWidth={1}
                flexDirection={'row'}
                value={values.parameter_of_inspection + ''}
                onChangeText={handleChange('parameter_of_inspection')}
              />
              <MyTextInput
                borderColor="mainForeground"
                borderWidth={1}
                flexDirection={'row'}
                value={values.first_set_value + ''}
                onChangeText={handleChange('first_set_value')}
              />
              <MyTextInput
                borderColor="mainForeground"
                borderWidth={1}
                flexDirection={'row'}
                value={values.first_measured_value + ''}
                onChangeText={handleChange('first_measured_value')}
              />
              <MyTextInput
                borderColor="mainForeground"
                borderWidth={1}
                flexDirection={'row'}
                value={values.first_error + ''}
                onChangeText={handleChange('first_error')}
              />
              <MyTextInput
                borderColor="mainForeground"
                borderWidth={1}
                flexDirection={'row'}
                value={values.first_allowed_deviation + ''}
                onChangeText={handleChange('first_allowed_deviation')}
              />
              <MyTextInput
                borderColor="mainForeground"
                borderWidth={1}
                flexDirection={'row'}
                value={values.first_decision + ''}
                onChangeText={handleChange('first_decision')}
              />
              <MyTextInput
                borderColor="mainForeground"
                borderWidth={1}
                flexDirection={'row'}
                value={values.second_set_value + ''}
                onChangeText={handleChange('second_set_value')}
              />
              <MyTextInput
                borderColor="mainForeground"
                borderWidth={1}
                flexDirection={'row'}
                value={values.second_measured_value + ''}
                onChangeText={handleChange('second_measured_value')}
              />
              <MyTextInput
                borderColor="mainForeground"
                borderWidth={1}
                flexDirection={'row'}
                value={values.second_error + ''}
                onChangeText={handleChange('second_error')}
              />
              <MyTextInput
                borderColor="mainForeground"
                borderWidth={1}
                flexDirection={'row'}
                value={values.second_allowed_deviation + ''}
                onChangeText={handleChange('second_allowed_deviation')}
              />
              <MyTextInput
                borderColor="mainForeground"
                borderWidth={1}
                flexDirection={'row'}
                value={values.second_decision + ''}
                onChangeText={handleChange('second_decision')}
              />
              <MyTextInput
                borderColor="mainForeground"
                borderWidth={1}
                flexDirection={'row'}
                value={values.third_set_value + ''}
                onChangeText={handleChange('third_set_value')}
              />
              <MyTextInput
                borderColor="mainForeground"
                borderWidth={1}
                flexDirection={'row'}
                value={values.third_measured_value + ''}
                onChangeText={handleChange('third_measured_value')}
              />
              <MyTextInput
                borderColor="mainForeground"
                borderWidth={1}
                flexDirection={'row'}
                value={values.third_error + ''}
                onChangeText={handleChange('third_error')}
              />
              <MyTextInput
                borderColor="mainForeground"
                borderWidth={1}
                flexDirection={'row'}
                value={values.third_allowed_deviation + ''}
                onChangeText={handleChange('third_allowed_deviation')}
              />
              <MyTextInput
                borderColor="mainForeground"
                borderWidth={1}
                flexDirection={'row'}
                value={values.third_decision + ''}
                onChangeText={handleChange('third_decision')}
              />
              <MyTextInput
                borderColor="mainForeground"
                borderWidth={1}
                flexDirection={'row'}
                value={values.fourth_set_value + ''}
                onChangeText={handleChange('fourth_set_value')}
              />
              <MyTextInput
                borderColor="mainForeground"
                borderWidth={1}
                flexDirection={'row'}
                value={values.fourth_measured_value + ''}
                onChangeText={handleChange('fourth_measured_value')}
              />
              <MyTextInput
                borderColor="mainForeground"
                borderWidth={1}
                flexDirection={'row'}
                value={values.fourth_error + ''}
                onChangeText={handleChange('fourth_error')}
              />
              <MyTextInput
                borderColor="mainForeground"
                borderWidth={1}
                flexDirection={'row'}
                value={values.fourth_allowed_deviation + ''}
                onChangeText={handleChange('fourth_allowed_deviation')}
              />
              <MyTextInput
                borderColor="mainForeground"
                borderWidth={1}
                flexDirection={'row'}
                value={values.fourth_decision + ''}
                onChangeText={handleChange('fourth_decision')}
              />
              <MyTextInput
                borderColor="mainForeground"
                borderWidth={1}
                flexDirection={'row'}
                value={values.fifth_set_value + ''}
                onChangeText={handleChange('fifth_set_value')}
              />
              <MyTextInput
                borderColor="mainForeground"
                borderWidth={1}
                flexDirection={'row'}
                value={values.fifth_measured_value + ''}
                onChangeText={handleChange('fifth_measured_value')}
              />
              <MyTextInput
                borderColor="mainForeground"
                borderWidth={1}
                flexDirection={'row'}
                value={values.fifth_error + ''}
                onChangeText={handleChange('fifth_error')}
              />
              <MyTextInput
                borderColor="mainForeground"
                borderWidth={1}
                flexDirection={'row'}
                value={values.fifth_allowed_deviation + ''}
                onChangeText={handleChange('fifth_allowed_deviation')}
              />
              <MyTextInput
                borderColor="mainForeground"
                borderWidth={1}
                flexDirection={'row'}
                value={values.fifth_decision + ''}
                onChangeText={handleChange('fifth_decision')}
              />
              <MyTextInput
                borderColor="mainForeground"
                borderWidth={1}
                flexDirection={'row'}
                value={values.sixth_set_value + ''}
                onChangeText={handleChange('sixth_set_value')}
              />
              <MyTextInput
                borderColor="mainForeground"
                borderWidth={1}
                flexDirection={'row'}
                value={values.sixth_measured_value + ''}
                onChangeText={handleChange('sixth_measured_value')}
              />
              <MyTextInput
                borderColor="mainForeground"
                borderWidth={1}
                flexDirection={'row'}
                value={values.sixth_error + ''}
                onChangeText={handleChange('sixth_error')}
              />
              <MyTextInput
                borderColor="mainForeground"
                borderWidth={1}
                flexDirection={'row'}
                value={values.sixth_allowed_deviation + ''}
                onChangeText={handleChange('sixth_allowed_deviation')}
              />
              <MyTextInput
                borderColor="mainForeground"
                borderWidth={1}
                flexDirection={'row'}
                value={values.sixth_decision + ''}
                onChangeText={handleChange('sixth_decision')}
              />
              <Button
                borderColor="mainForeground"
                borderWidth={2}
                label={'Send'}
                onPress={handleSubmit}
                disabled={!isValid}
              />
            </ScrollView>
          );
        }}
      </Formik>
    </Box>
  );
};

export default Prediction;
