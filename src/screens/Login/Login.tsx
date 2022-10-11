import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthParamList} from '@navigation';
import {Box, MyTextInput, Button} from '@components';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {useAppDispatch, useAppSelector} from '@hooks';
import {signin} from '@actions/auth';
import {Text} from 'react-native';

type NavigationProps = NativeStackScreenProps<AuthParamList, 'Login'>;
type LoginFormType = {email: string; password: string};

const ValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email required'),
  password: Yup.string()
    .required('Password required')
    .min(5, 'Password is too weak it has to have 5 characters'),
});

const Login = ({navigation, route}: NavigationProps) => {
  console.log(navigation, route);
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(state => state.auth.isLoading);
  const handleLogin = (values: LoginFormType) => {
    dispatch(signin(values))
      .unwrap()
      .catch(error => console.error(error));
  };

  return (
    <Box flex={1} bg="mainBackground" padding="m">
      {isLoading === true ? (
        <Text>LOADING</Text>
      ) : (
        <Formik
          initialValues={{email: '', password: ''}}
          validationSchema={ValidationSchema}
          onSubmit={handleLogin}>
          {({handleChange, handleSubmit, values, errors, touched, isValid}) => {
            return (
              <>
                <MyTextInput
                  borderColor="mainForeground"
                  borderWidth={1}
                  flexDirection={'row'}
                  value={values.email}
                  onChangeText={handleChange('email')}
                  touched={touched.email}
                  error={errors.email}
                />
                <MyTextInput
                  borderColor="mainForeground"
                  borderWidth={1}
                  flexDirection={'row'}
                  value={values.password}
                  onChangeText={handleChange('password')}
                  touched={touched.password}
                  error={errors.password}
                />
                <Button
                  borderColor="mainForeground"
                  borderWidth={2}
                  label={'Login'}
                  onPress={handleSubmit}
                  disabled={!isValid}
                />
              </>
            );
          }}
        </Formik>
      )}
    </Box>
  );
};

export default Login;
