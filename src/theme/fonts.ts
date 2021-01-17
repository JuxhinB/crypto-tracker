interface FontTypeProps {
  base: string;
  bold: string;
  boldItalic: string;
  emphasis: string;
  emphasisItalic: string;
  light: string;
  italic: string;
  lightItalic: string;
}

const type: FontTypeProps = {
  base: "blogger_sans",

  bold: "blogger_sans_medium",
  boldItalic: "blogger_sans_medium_italic",

  emphasis: "blogger_sans_bold",
  emphasisItalic: "blogger_sans_bold_italic",

  light: "blogger_sans_light",
  italic: "blogger_sans_italic",
  lightItalic: "blogger_sans_light_italic",
};

interface FontSizeProps {
  h1: number;
  h2: number;
  h3: number;
  h4: number;
  h5: number;
  h6: number;
  input: number;
  regular: number;
  medium: number;
  small: number;
  tiny: number;
}

const size: FontSizeProps = {
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 26,
  h5: 20,
  h6: 19,
  input: 18,
  regular: 17,
  medium: 14,
  small: 12,
  tiny: 8.5,
};

interface FontStyleProps {
  h1: FontProp;
  h2: FontProp;
  h3: FontProp;
  h4: FontProp;
  h5: FontProp;
  h6: FontProp;
  normal: FontProp;
  small: FontProp;
  description: FontProp;
}

interface FontProp {
  fontSize: number;
}

const style: FontStyleProps = {
  h1: {
    fontSize: size.h1,
  },
  h2: {
    fontSize: size.h2,
  },
  h3: {
    fontSize: size.h3,
  },
  h4: {
    fontSize: size.h4,
  },
  h5: {
    fontSize: size.h5,
  },
  h6: {
    fontSize: size.h6,
  },
  normal: {
    fontSize: size.regular,
  },
  small: {
    fontSize: size.small,
  },
  description: {
    fontSize: size.medium,
  },
};

export default {
  type,
  size,
  style,
};
