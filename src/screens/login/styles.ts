import { makeStyles } from '@rneui/themed';
import { Dimensions } from 'react-native';

export const useStyles = makeStyles(() => ({
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  backgroundImage: {
    width: Dimensions.get('window').width,
    height: (Dimensions.get('window').width * 2212) / 1560,
    zIndex: -1,
  },
  keyboardAvoidingView: { flex: 1, marginTop: -48 },
}));
