import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { ApplicationScreenProps } from '../../../@types/navigation';
import { Button, Icon, Image, Input, Text } from '@rneui/themed';
import { Images } from '../../../assets';
import { ScrollView } from 'react-native-gesture-handler';
import { useStyles } from './styles';

const Login: React.FC<ApplicationScreenProps> = () => {
  const styles = useStyles();

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.backgroundImage} source={Images.DRONE_BG} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <Text>Welcome!</Text>
            <Text>Login with Mobile Number</Text>
            <Input
              leftIcon={<Icon type="font-awesome" name="phone" />}
              keyboardType="decimal-pad"
            />
            <Button>Submit</Button>
            <Text>Don't have an account?</Text>
            <Text>Create an account</Text>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default Login;
