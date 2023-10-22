import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  brandContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: 400,
    height: 400,
  },
  logo: {
    aspectRatio: 1,
    width: '100%',
    flex: 1,
    objectFit: 'contain',
  },
});
