import { Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');


export const COLORS = {
    primary: "#2E4053",
    black: "#171717",
    white: "#FFFFFF",
    background: "#FFFFFF"
}

export const TEXT_COLORS = {
    primary: '#3498DB'
}

export const BTN_COLORS = {
    primary: '#2874A6'
}
export const SIZES = {
    base: 10,
    width,
    height
}


const theme = { COLORS, SIZES, TEXT_COLORS };

export default theme;