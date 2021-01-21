import LocalizedStrings, {
  LocalizedStringsMethods,
} from "react-native-localization";

export interface StringProps extends LocalizedStringsMethods {
  STRINGS: any;
  GLOBALS: any;
  LABELS: any;
  ACTIONS: any;
  MESSAGES: any;
  ERRORS: any;
  SCREENS: any;
}

let _string: StringProps = new LocalizedStrings({
  en_US: require("./language/en-US.json"),
});

export default _string;
