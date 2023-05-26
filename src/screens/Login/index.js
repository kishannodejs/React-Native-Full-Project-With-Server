import React, {useState, useEffect, useContext} from 'react';
import {Text, TextInput} from 'react-native';
import Container from '../../components/common/Container';
import Input from '../../components/common/Input';
import CustomButton from '../../components/common/CustomButton';
import LoginComponent from '../../components/Login';
import {useNavigation} from '@react-navigation/native';
import {useFocusEffect} from '@react-navigation/native';
import {GlobalContext} from '../../context/Provider';
import loginUser from '../../context/actions/auth/loginUser';
const Login = () => {
  const [form, setForm] = useState({});
  const {navigate} = useNavigation();
  const [errors, setErrors] = useState({});

  const {
    authDispatch,
    authState: {error, loading},
  } = useContext(GlobalContext);

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
    console.log('Login on change');
  };

  const onSubmit = () => {
    console.log('LOGIN-FORM');
    console.log(form);
    console.log('LOGIN-FORM');
    loginUser(form)(authDispatch);

    if (form.username && form.password) {
      console.log('USername and password');
    }
  };
  return (
    <LoginComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={errors}
      error={error}
      loading={loading}
    />
  );
};
export default Login;
