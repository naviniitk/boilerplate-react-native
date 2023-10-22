import React from 'react';
import { View, DimensionValue, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import { Image } from '@rneui/themed';
import { Images } from '../../../assets';

type Props = {
  height?: DimensionValue;
  width?: DimensionValue;
};

const Brand: React.FC<Props> = () => {
  return (
    <View testID="brand-img-wrapper" style={styles.brandContainer}>
      <Image
        style={styles.logo}
        source={Images.LEHER_LOGO}
        PlaceholderContent={<ActivityIndicator size="large" />}
      />
    </View>
  );
};

Brand.defaultProps = {
  height: 400,
  width: 400,
};

export default Brand;
