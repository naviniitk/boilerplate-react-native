import { createTheme } from '@rneui/themed';

const appTheme = createTheme({
  // create styling for all the reusable components here
  lightColors: {
    primary: '#506E65',
    secondary: 'rgb(102, 90, 111)',
    tertiary: 'rgb(128, 81, 88)',
    error: 'rgb(186, 26, 26)',
    background: 'rgb(255, 251, 255)',
  },
  darkColors: {
    primary: '#506E65',
    secondary: 'rgb(208, 193, 218)',
    tertiary: 'rgb(243, 183, 190)',
    error: 'rgb(255, 180, 171)',
    background: 'rgb(29, 27, 30)',
  },
  mode: 'light',
  components: {
    Button: {
      raised: true,
      containerStyle: {
        marginTop: 10,
        borderRadius: 32,
        backgroundColor: 'blue',
      },
      buttonStyle: {
        borderRadius: 32,
        height: 56,
      },
    },
    Input: {
      inputContainerStyle: {
        borderBottomWidth: 1,
        paddingHorizontal: 10,
      },
    },
  },
});

export default appTheme;
