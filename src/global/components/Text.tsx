import React, {ReactElement, ReactText} from "react";
import {TextProps, View, Text, StyleProp, TextStyle} from "react-native";
import {colors, fonts} from "../../theme";

interface GlobalTextProps extends TextProps {
  children: ReactText;
}

function GlobalText({children, ...props}: GlobalTextProps): ReactElement {
  return (
    <Text
      style={Object.assign(props?.style ? props.style : {}, {
        fontFamily: fonts.type.base,
        color: colors.lightGray,
        fontSize: fonts.size.regular,
      } as StyleProp<TextStyle>)}
      {...props}>
      {children}
    </Text>
  );
}

export default GlobalText;
