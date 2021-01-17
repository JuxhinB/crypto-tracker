import {Dimensions, Platform} from "react-native";

const {width, height} = Dimensions.get("window");

interface MetricsProps {
  marginHorizontal: number;
  marginVertical: number;
  section: number;
  baseMargin: number;
  doubleBaseMargin: number;
  smallMargin: number;
  doubleSection: number;
  horizontalLineHeight: number;
  screenWidth: number;
  screenHeight: number;
  navBarHeight: number;
  buttonRadius: number;
  icons: IconsProps;
  images: ImageProps;
}

interface IconsProps {
  tiny: number;
  small: number;
  medium: number;
  large: number;
  xl: number;
}

interface ImageProps {
  small: number;
  medium: number;
  large: number;
  logo: number;
}

// Used via Metrics.baseMargin
const metrics: MetricsProps = {
  marginHorizontal: 10,
  marginVertical: 10,
  section: 25,
  baseMargin: 16,
  doubleBaseMargin: 32,
  smallMargin: 8,
  doubleSection: 50,
  horizontalLineHeight: 1,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: Platform.OS === "ios" ? 64 : 54,
  buttonRadius: 4,
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50,
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200,
  },
};

export default metrics;
