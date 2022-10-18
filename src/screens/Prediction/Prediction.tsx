import React, { useState, useRef } from 'react';
import { Alert, ScrollView } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import PagerView from 'react-native-pager-view';

import { Button, Box, MyTextInput, Text } from '@components';
import { PredictionFormType } from 'services/types';
import { PredictionService } from '@services';

import {
  DeviceSelection,
  FlowMeasurements,
  Question,
  VisualInpsection,
} from './components';
const ValidationSchema = Yup.object().shape({
  year: Yup.string().required('Field required'),
});

const Prediction = ({ navigation }) => {
  const viewPager = useRef<PagerView>(null);
  const [device, setDevice] = useState<string | null>(null);
  const [manufacturer, setManufacturer] = useState<string | undefined>();
  const [type, setType] = useState<string | undefined>();
  const [visual, setVisual] = useState({
    first_visual_inspection: 'YES',
    second_visual_inspection: 'YES',
    third_visual_inspection: 'NO',
    fourth_visual_inspection: 'YES',
  });
  const [measurementsOne, setMeasurementsOne] = useState({
    first_set_value: 20,
    first_measured_value: 0,
    first_error: 0,
    first_allowed_deviation: 5,
    first_decision: 'YES',
  });
  const [measurementsTwo, setMeasurementsTwo] = useState({
    second_set_value: 20,
    second_measured_value: 0,
    second_error: 0,
    second_allowed_deviation: 5,
    second_decision: 'YES',
  });
  const [measurementsThree, setMeasurementsThree] = useState({
    third_set_value: 20,
    third_measured_value: 0,
    third_error: 0,
    third_allowed_deviation: 5,
    third_decision: 'YES',
  });
  const [measurementsFour, setMeasurementsFour] = useState({
    fourth_set_value: 20,
    fourth_measured_value: 0,
    fourth_error: 0,
    fourth_allowed_deviation: 5,
    fourth_decision: 'YES',
  });
  const [measurementsFive, setMeasurementsFive] = useState({
    fifth_set_value: 20,
    fifth_measured_value: 0,
    fifth_error: 0,
    fifth_allowed_deviation: 5,
    fifth_decision: 'YES',
  });
  const handlePrediction = (values: any) => {
    console.log(values);
    PredictionService.sendPrediction(values)
      .then(data => {
        const result =
          data?.prediction == 1
            ? 'Device passes inspection'
            : 'Device failed inspection';
        Alert.alert('Prediction result', result, [
          {
            text: 'OK',
            onPress: () => navigation?.goBack(),
          },
        ]);
      })
      .catch(error => {
        console.log('response: ', error.response);
      });
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
          <Question title="Select type and manufacturer">
            <DeviceSelection
              onDone={value => {
                setDevice(value);
                viewPager?.current?.setPage(1);
              }}
            />
          </Question>
        </Box>
        <Box key="2">
          <Question title="Select manufacturer and type">
            <MyTextInput
              label="Manufacturer"
              value={manufacturer}
              onChangeText={setManufacturer}
              placeholder="Eg. B. Braun, SINO MEDICAL ..."
            />
            <MyTextInput
              label="Type"
              value={type}
              onChangeText={setType}
              placeholder="Eg. COMPACT S, SN50C6 ..."
            />
            <Button
              label="Next"
              disabled={manufacturer == null || type == null}
              onPress={() => {
                viewPager.current?.setPage(2);
              }}
            />
          </Question>
        </Box>
        <Box key="3">
          <Question title="Visual Inspection">
            <VisualInpsection
              onDone={result => {
                setVisual({
                  first_visual_inspection: result.clean,
                  second_visual_inspection: result.funcitional,
                  third_visual_inspection: result.markings,
                  fourth_visual_inspection: result.accessories,
                });
                viewPager.current?.setPage(3);
              }}
            />
          </Question>
        </Box>
        <Box key="4">
          <Question title="First flow measurment">
            <FlowMeasurements
              defValue={measurementsOne.first_set_value + ''}
              defDeviation={measurementsOne.first_allowed_deviation + ''}
              onDone={results => {
                setMeasurementsOne({
                  first_set_value: parseFloat(results.value),
                  first_allowed_deviation: parseFloat(results.deviation),
                  first_error: parseFloat(results.error),
                  first_decision: results.satisfies,
                  first_measured_value: parseFloat(results.measured),
                });
                viewPager.current?.setPage(4);
              }}
            />
          </Question>
        </Box>
        <Box key="5">
          <Question title="Second flow measurment">
            <FlowMeasurements
              defValue={measurementsTwo.second_set_value + ''}
              defDeviation={measurementsTwo.second_allowed_deviation + ''}
              onDone={results => {
                setMeasurementsTwo({
                  second_set_value: parseFloat(results.value),
                  second_allowed_deviation: parseFloat(results.deviation),
                  second_error: parseFloat(results.error),
                  second_decision: results.satisfies,
                  second_measured_value: parseFloat(results.measured),
                });
                viewPager.current?.setPage(5);
              }}
            />
          </Question>
        </Box>
        <Box key="6">
          <Question title="Third flow measurment">
            <FlowMeasurements
              defValue={measurementsThree.third_set_value + ''}
              defDeviation={measurementsThree.third_allowed_deviation + ''}
              onDone={results => {
                setMeasurementsThree({
                  third_set_value: parseFloat(results.value),
                  third_allowed_deviation: parseFloat(results.deviation),
                  third_error: parseFloat(results.error),
                  third_decision: results.satisfies,
                  third_measured_value: parseFloat(results.measured),
                });
                viewPager.current?.setPage(6);
              }}
            />
          </Question>
        </Box>
        <Box key="7">
          <Question title="Fourth flow measurment">
            <FlowMeasurements
              defValue={measurementsFour.fourth_set_value + ''}
              defDeviation={measurementsFour.fourth_allowed_deviation + ''}
              onDone={results => {
                setMeasurementsFour({
                  fourth_set_value: parseFloat(results.value),
                  fourth_allowed_deviation: parseFloat(results.deviation),
                  fourth_error: parseFloat(results.error),
                  fourth_decision: results.satisfies,
                  fourth_measured_value: parseFloat(results.measured),
                });
                viewPager.current?.setPage(7);
              }}
            />
          </Question>
        </Box>
        <Box key="8">
          <Question title="Fifth flow measurment">
            <FlowMeasurements
              defValue={measurementsFive.fifth_set_value + ''}
              defDeviation={measurementsFive.fifth_allowed_deviation + ''}
              onDone={results => {
                setMeasurementsFive({
                  fifth_set_value: parseFloat(results.value),
                  fifth_allowed_deviation: parseFloat(results.deviation),
                  fifth_error: parseFloat(results.error),
                  fifth_decision: results.satisfies,
                  fifth_measured_value: parseFloat(results.measured),
                });
                handlePrediction({
                  device,
                  manufacturer,
                  type,
                  ...visual,
                  ...measurementsOne,
                  ...measurementsTwo,
                  ...measurementsThree,
                  ...measurementsFour,
                  ...measurementsFive,
                });
                //viewPager.current?.setPage(7);
              }}
            />
          </Question>
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
