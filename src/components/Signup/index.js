import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';
import {LOGIN} from '../../constants/routeNames';
import Message from '../common/Message';
import styles from './styles';

const RegisterComponent = () => {
  const [value, onChangeText] = React.useState('');
  const {navigate} = useNavigation();
  return (
    <Container>
      <Image
        height={70}
        width={70}
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />
      <View>
        <Text style={styles.title}>Welcome to RNContacts</Text>
        <Text style={styles.subTitle}>Create an Account</Text>
        <View style={styles.form}>
          <Input
            label="Username"
            iconPosition="right"
            placeholder="Enter Username"
            // error={'This field is required'}
          />

          <Input
            label="First name"
            iconPosition="right"
            placeholder="Enter First name"
            // error={'This field is required'}
          />

          <Input
            label="Last Name"
            iconPosition="right"
            placeholder="Enter Last Name"
            // error={'This field is required'}
          />
          <Input
            label="Email"
            iconPosition="right"
            placeholder="Enter Email"
            // error={'This field is required'}
          />
          <Input
            label="Password"
            icon={<Text>Show</Text>}
            secureTextEntry={true}
            iconPosition="right"
            placeholder="Enter Password"
          />
          <CustomButton primary title="Submit" />
          <View style={styles.createSection}>
            <Text style={styles.infoText}>Already have account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(LOGIN);
              }}>
              <Text style={styles.linkBtn}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default RegisterComponent;
