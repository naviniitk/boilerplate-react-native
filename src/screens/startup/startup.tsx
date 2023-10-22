import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Brand } from '../../components';
import { ApplicationScreenProps } from '../../../@types/navigation';

const Startup: React.FC<ApplicationScreenProps> = ({
  navigation,
}: ApplicationScreenProps) => {
  const init = async () => {
    await new Promise(resolve =>
      setTimeout(() => {
        resolve(true);
      }, 2000),
    );

    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <View>
      <Brand />
    </View>
  );
};

export default Startup;
