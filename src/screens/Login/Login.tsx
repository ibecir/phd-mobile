import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthParamList } from '@navigation';
import { Box, MyTextInput, Button } from '@components';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useAppDispatch, useAppSelector } from '@hooks';
import { signin } from '@actions/auth';
import { useToast } from 'react-native-toast-notifications';

type NavigationProps = NativeStackScreenProps<AuthParamList, 'Login'>;
type LoginFormType = { email: string; password: string };

const ValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email required'),
  password: Yup.string()
    .required('Password required')
    .min(5, 'Password is too weak it has to have 5 characters'),
});

const Login = ({ navigation, route }: NavigationProps) => {
  const dispatch = useAppDispatch();
  const toast = useToast();
  const isLoading = useAppSelector(state => state.auth.isLoading);
  const handleLogin = (values: LoginFormType) => {
    dispatch(signin(values))
      .unwrap()
      .catch(error => {
        toast.show(error, { type: 'danger' });
      });
  };

  return (
    <Box flex={1} bg="primary">
      <Box padding="m" marginTop="l">
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={ValidationSchema}
          onSubmit={handleLogin}
        >
          {({
            handleChange,
            handleSubmit,
            handleBlur,
            values,
            errors,
            touched,
            isValid,
          }) => {
            return (
              <>
                <MyTextInput
                  borderColor="mainForeground"
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  touched={touched.email}
                  error={errors.email}
                  label="Username"
                />
                <MyTextInput
                  borderColor="mainForeground"
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  touched={touched.password}
                  error={errors.password}
                  label="Password"
                  secureTextEntry
                />
                <Button
                  label={'Login'}
                  onPress={handleSubmit}
                  disabled={!isValid}
                  isLoading={isLoading}
                />
              </>
            );
          }}
        </Formik>
      </Box>
    </Box>
  );
};

export default Login;
