import React from 'react';
import {
  Dimensions,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { ApplicationScreenProps } from '../../../@types/navigation';
import { Button, Icon, Image, Input, Text } from '@rneui/themed';
import { Images } from '../../../assets';
import { ScrollView } from 'react-native-gesture-handler';

const Login: React.FC<ApplicationScreenProps> = ({
  navigation,
}: ApplicationScreenProps) => {
  return (
    <ScrollView
      style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <Image
        style={{
          width: Dimensions.get('window').width,
          height: (Dimensions.get('window').width * 2212) / 1560,
          // objectFit: 'contain',
          zIndex: -1,
          // position: 'relative',
          // top: 20,
          // borderWidth: 2,
          // borderColor: 'red',
        }}
        source={Images.DRONE_BG}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        // keyboardVerticalOffset={200}
        style={{ flex: 1, marginTop: -48 }}
      >
        <TouchableWithoutFeedback
          // style={{ height: '100%' }}
          onPress={Keyboard.dismiss}
        >
          <View
            style={{
              padding: 48,
              borderTopLeftRadius: 48,
              borderTopRightRadius: 48,
              backgroundColor: 'white',
              height: '100%',
              // borderWidth: 2,
              // borderColor: 'blue',
              // display: 'flex',
              flexGrow: 1,
              // position: 'absolute',
              // bottom: 0,
            }}
          >
            <Text
              style={{ fontWeight: 'bold', fontSize: 22, marginBottom: 20 }}
            >
              Welcome!
            </Text>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
              Login with Mobile Number
            </Text>
            <Input
              leftIcon={<Icon style={{borderRightWidth: 1, borderRightColor: 'gray', paddingEnd: 10}} type="font-awesome" name="phone" />}
              keyboardType="decimal-pad"
            />
            <Button>Submit</Button>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 18,
                marginBottom: 10,
                marginTop: 30,
              }}
            >
              Don't have an account?
            </Text>
            <Text style={{ fontWeight: 'bold', fontSize: 22 }}>
              Create an account
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default Login;
