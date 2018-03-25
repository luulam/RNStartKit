import { Platform } from 'react-native';

export const isIos = () => {
    return Platform.OS === 'ios'
}
export const isAndroid = () => {
    return Platform.OS === 'android'
}

export default {
    isIos,
    isAndroid
}