import {Dimensions, Platform} from 'react-native';

const { width, height } = Dimensions.get('window');

// Used via Metrics.baseMargin
const metrics = {
  margHor: 10,
  margVer: 10,
  padHor: 8,
  padVer: 4,
  opacity: 0.6,
  border: 0.7,
  section: 25,
  borderRadius: 6,
  horizontalLineHeight: 1,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: (Platform.OS === 'ios') ? 64 : 54,
  statusBarHeight: Platform.OS === 'ios' ? 20 : 20,
  btnRadius: 4,
  btnHeight: 38,
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200
  }
}

export default metrics;
