import fonts from "./fonts";
import metrics from "./metrics";
import colors from "./colors";

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const appStyles = {
  mainContainer: {
    flex: 1,
    backgroundColor: colors.transparent,
  },
  flexRow: {
    flexDirection: "row",
  },
  alignCenter: {
    alignItems: "center",
  },
  justifyCenter: {
    justifyContent: "center",
  },
  justifyBetween: {
    justifyContent: "space-between",
  },
  justifyStart: {
    justifyContent: "flex-start",
  },
  justifyEnd: {
    justifyContent: "flex-end",
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  container: {
    flex: 1,
    paddingTop: metrics.baseMargin,
    backgroundColor: colors.transparent,
  },
  flexColumn: {
    flex: 1,
    flexDirection: "column",
  },
  posAbsTopLeft: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  defaultInputText: {
    backgroundColor: colors.transparent,
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 1,
  },
  areaOutline: {
    backgroundColor: colors.transparent,
    borderWidth: 1,
    borderColor: colors.darkGrey,
  },
  bottomBorderLightGray: {
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  bcgTransparent: {
    backgroundColor: colors.transparent,
  },
  bcgGreen: {
    backgroundColor: colors.green,
  },
  bcgRed: {
    backgroundColor: colors.red,
  },
  bcgGray: {
    backgroundColor: colors.lightGray,
  },
  bcgDarkGray: {
    backgroundColor: colors.darkGrey,
  },
  bcgLightGray: {
    backgroundColor: colors.lighterGray,
  },
  bcgWhite: {
    backgroundColor: colors.white,
  },
  bcgBlue: {
    backgroundColor: colors.blue,
  },

  textCenter: {
    textAlign: "center",
  },
  textWhite: {
    color: colors.white,
  },
  textRed: {
    color: colors.red,
  },
  textGreen: {
    color: colors.green,
  },
  textLightGray: {
    color: colors.lightGray,
  },
  textGray: {
    color: colors.gray,
  },
  textDarkGray: {
    color: colors.darkGrey,
  },
  mainText: {
    fontFamily: fonts.type.base,
    fontSize: fonts.size.h4,
    color: colors.darkGrey,
  },

  borderRadius: {
    borderRadius: metrics.buttonRadius,
  },

  //padding
  pSm: {
    padding: metrics.smallMargin,
  },
  pBase: {
    padding: metrics.baseMargin,
  },
  pLg: {
    padding: metrics.doubleBaseMargin,
  },
  //margin
  mSm: {
    margin: metrics.smallMargin,
  },
  mBase: {
    margin: metrics.baseMargin,
  },
  mLg: {
    margin: metrics.doubleBaseMargin,
  },
  //padding on X axis
  pxSm: {
    paddingLeft: metrics.smallMargin,
    paddingRight: metrics.smallMargin,
  },
  pxBase: {
    paddingLeft: metrics.baseMargin,
    paddingRight: metrics.baseMargin,
  },
  pxLg: {
    paddingLeft: metrics.doubleBaseMargin,
    paddingRight: metrics.doubleBaseMargin,
  },
  //margin on X axis
  mxSm: {
    marginLeft: metrics.smallMargin,
    marginRight: metrics.smallMargin,
  },
  mxBase: {
    marginLeft: metrics.baseMargin,
    marginRight: metrics.baseMargin,
  },
  mxLg: {
    marginLeft: metrics.doubleBaseMargin,
    marginRight: metrics.doubleBaseMargin,
  },
  //padding on Y axis
  pySm: {
    paddingTop: metrics.smallMargin,
    paddingBottom: metrics.smallMargin,
  },
  pyBase: {
    paddingTop: metrics.baseMargin,
    paddingBottom: metrics.baseMargin,
  },
  pyLg: {
    paddingTop: metrics.doubleBaseMargin,
    paddingBottom: metrics.doubleBaseMargin,
  },
  //margin on Y axis
  mySm: {
    marginTop: metrics.smallMargin,
    marginBottom: metrics.smallMargin,
  },
  myBase: {
    marginTop: metrics.baseMargin,
    marginBottom: metrics.baseMargin,
  },
  myLg: {
    marginTop: metrics.doubleBaseMargin,
    marginBottom: metrics.doubleBaseMargin,
  },
  //padding Top
  ptSm: {
    paddingTop: metrics.smallMargin,
  },
  ptBase: {
    paddingTop: metrics.baseMargin,
  },
  ptLg: {
    paddingTop: metrics.doubleBaseMargin,
  },
  //margin Top
  mtSm: {
    marginTop: metrics.smallMargin,
  },
  mtBase: {
    marginTop: metrics.baseMargin,
  },
  mtLg: {
    marginTop: metrics.doubleBaseMargin,
  },
  //padding Bottom
  pbSm: {
    paddingBottom: metrics.smallMargin,
  },
  pbBase: {
    paddingBottom: metrics.baseMargin,
  },
  pbLg: {
    paddingBottom: metrics.doubleBaseMargin,
  },
  //margin on Y axis
  mbSm: {
    marginBottom: metrics.smallMargin,
  },
  mbBase: {
    marginBottom: metrics.baseMargin,
  },
  mbLg: {
    marginBottom: metrics.doubleBaseMargin,
  },

  //Margin left
  mlSm: {
    marginLeft: metrics.smallMargin,
  },
  mlBase: {
    marginLeft: metrics.baseMargin,
  },
  mlLg: {
    marginLeft: metrics.doubleBaseMargin,
  },

  //Margin Right
  mrSm: {
    marginRight: metrics.smallMargin,
  },
  mrBase: {
    marginRight: metrics.baseMargin,
  },
  mrLg: {
    marginRight: metrics.doubleBaseMargin,
  },

  //Padding left
  plSm: {
    paddingLeft: metrics.smallMargin,
  },
  plBase: {
    paddingLeft: metrics.baseMargin,
  },
  plLg: {
    paddingLeft: metrics.doubleBaseMargin,
  },

  //Padding Right
  prSm: {
    paddingLeft: metrics.smallMargin,
  },
  prBase: {
    paddingLeft: metrics.baseMargin,
  },
  prLg: {
    paddingLeft: metrics.doubleBaseMargin,
  },
};

export default appStyles;
