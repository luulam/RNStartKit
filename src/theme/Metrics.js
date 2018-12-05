import {Dimensions, Platform} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
const { width, height } = Dimensions.get('window');

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
  appWidth: width < height ? width : height,
  appHeight: width < height ? height : width,
  navBarHeight: (Platform.OS === 'ios') ? 56 : 48,
  statusBarHeight: width < height ? 0 : 0,
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
};

export default metrics;
