import React, {useState, useEffect, useContext} from 'react';
import RegisterComponent from '../../components/Signup';
import {useNavigation} from '@react-navigation/native';
import {useFocusEffect} from '@react-navigation/native';
import envs from '../../config/env';
import axiosInstance from '../../helpers/axiosInstance';
import {GlobalContext} from '../../context/Provider';
import register, {clearAuthState} from '../../context/actions/auth/register';
import {LOGIN} from '../../constants/routeNames';
const Register = () => {
  const [form, setForm] = useState({});
  const {navigate} = useNavigation();
  const [errors, setErrors] = useState({});
  const {
    authDispatch,
    authState: {error, loading, data},
  } = useContext(GlobalContext);
  const {BACKEND_URL} = envs;

  // React.useEffect(() => {
  //   axiosInstance.get('http://10.0.2.2:4000/api/products').catch(err => {
  //     console.log('err===>', err);
  //   });
  // }, []);

  // React.useEffect(() => {
  //   if (data) {
  //     navigate(LOGIN);
  //   }
  // }, [data]);

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        if (data || error) {
          clearAuthState()(authDispatch);
        }
      };
    }, [data, error]),
  );

  console.log('Backend_URL :>>', envs);
  console.log('__DEV__', __DEV__);
  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});

    if (value !== '') {
      if (name === 'password') {
        if (value.length < 6) {
          setErrors(prev => {
            return {...prev, [name]: 'This field needs min 6 characters'};
          });
        } else {
          setErrors(prev => {
            return {...prev, [name]: null};
          });
        }
      } else {
        setErrors(prev => {
          return {...prev, [name]: null};
        });
      }
    } else {
      setErrors(prev => {
        return {...prev, [name]: 'This field is required'};
      });
    }
  };

  const onSubmit = () => {
    console.log('BBBBBBBBBBBB');
    console.log(form);
    console.log('BBBBBBBBBBBB');
    if (!form.userName) {
      setErrors(prev => {
        return {...prev, userName: 'Please add a username'};
      });
    }
    if (!form.firstName) {
      setErrors(prev => {
        return {...prev, firstName: 'Please add a  first name'};
      });
    }
    if (!form.lastName) {
      setErrors(prev => {
        return {...prev, lastName: 'Please add a last name'};
      });
    }
    if (!form.email) {
      setErrors(prev => {
        return {...prev, email: 'Please add a email'};
      });
    }
    if (!form.password) {
      setErrors(prev => {
        return {...prev, password: 'Please add a password'};
      });
    }
    if (
      Object.values(form).length === 5 &&
      Object.values(form).every(item => item.trim().length > 0) &&
      Object.values(errors).every(item => !item)
    ) {
      register(form)(authDispatch)(response => {
        navigate(LOGIN, {data: response});
      });

      console.log('MMMMMMMMMMMMM');
      console.log(form);
      console.log('MMMMMMMMMMMMM');
    }
  };
  return (
    <RegisterComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={errors}
      error={error}
      loading={loading}
    />
  );
};
export default Register;
