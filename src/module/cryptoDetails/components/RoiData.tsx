import React, {ReactElement, useContext} from "react";
import {Dimensions, View} from "react-native";
import global from "../../../global";
import _string from "../../../localization/_string";
import {colors, fonts, metrics} from "../../../theme";
import {CryptoDetailsContext} from "../CryptoDetailsProvider";
import {LineChart} from "react-native-chart-kit";

function RoiData(): ReactElement {
  const {details} = useContext(CryptoDetailsContext);
  return details ? (
    <View
      style={{
        paddingBottom: metrics.baseMargin,
        paddingHorizontal: metrics.baseMargin,
      }}>
      <global.Text
        style={{
          fontSize: fonts.size.h5,
          color: `${colors.white}90`,
        }}>
        {_string.LABELS.roi_data}
      </global.Text>

      <View
        style={{
          width: "100%",
          marginVertical: metrics.smallMargin,
        }}>
        <global.Text
          style={{
            fontSize: fonts.size.h5,
            color: `${colors.white}50`,
            zIndex: 1,
            marginBottom: metrics.smallMargin,
          }}>
          {_string.LABELS.last_weekly}
        </global.Text>
        <View style={{width: "100%", flexDirection: "row"}}>
          <Item
            value={details?.roi_data.percent_change_last_1_week?.toFixed(2)}
            label={"%"}
          />
          <Item
            value={details?.roi_data.percent_change_btc_last_1_week?.toFixed(2)}
            label={"BTC"}
          />
          <Item
            value={details?.roi_data.percent_change_eth_last_1_week?.toFixed(2)}
            label={"ETH"}
          />
        </View>
      </View>

      <View
        style={{
          width: "100%",
          marginVertical: metrics.smallMargin,
        }}>
        <global.Text
          style={{
            fontSize: fonts.size.h5,
            color: `${colors.white}50`,
            zIndex: 1,
            marginBottom: metrics.smallMargin,
          }}>
          {_string.LABELS.last_monthly}
        </global.Text>
        <View style={{width: "100%", flexDirection: "row"}}>
          <Item
            value={details?.roi_data.percent_change_last_1_month?.toFixed(2)}
            label={"%"}
          />
          <Item
            value={details?.roi_data.percent_change_btc_last_1_month?.toFixed(
              2,
            )}
            label={"BTC"}
          />
          <Item
            value={details?.roi_data.percent_change_eth_last_1_month?.toFixed(
              2,
            )}
            label={"ETH"}
          />
        </View>
      </View>

      <View
        style={{
          width: "100%",
          marginVertical: metrics.smallMargin,
        }}>
        <global.Text
          style={{
            fontSize: fonts.size.h5,
            color: `${colors.white}50`,
            zIndex: 1,
            marginBottom: metrics.smallMargin,
          }}>
          {_string.LABELS.last_yearly}
        </global.Text>
        <View style={{width: "100%", flexDirection: "row"}}>
          <Item
            value={details?.roi_data.percent_change_last_1_year?.toFixed(2)}
            label={"%"}
          />
          <Item
            value={details?.roi_data.percent_change_btc_last_1_year?.toFixed(2)}
            label={"BTC"}
          />
          <Item
            value={details?.roi_data.percent_change_eth_last_1_year?.toFixed(2)}
            label={"ETH"}
          />
        </View>
      </View>

      <View
        style={{
          width: "100%",
          marginVertical: metrics.baseMargin,
        }}>
        <LineChart
          data={{
            labels: [
              ...Object.keys(details.roi_by_year).map(
                (item: string) => item.slice(0, 4) ?? "",
              ),
            ],
            datasets: [
              {
                // @ts-ignore
                data: [
                  ...Object.values(details.roi_by_year).map(
                    (item: number) => item.toFixed(1) ?? 0,
                  ),
                ],
              },
            ],
          }}
          width={Dimensions.get("window").width - metrics.doubleBaseMargin}
          height={250}
          verticalLabelRotation={30}
          chartConfig={{
            backgroundColor: colors.black,
            backgroundGradientFrom: colors.black,
            backgroundGradientTo: colors.darkerGrey,
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: colors.darkGrey,
            },
          }}
          bezier
        />
      </View>
    </View>
  ) : (
    <></>
  );
}

export default RoiData;

interface ItemProps {
  label: string;
  value: string;
}

function Item({label, value}: ItemProps) {
  return (
    <View
      style={{
        width: "33%",
        paddingHorizontal: metrics.smallMargin - 4,
      }}>
      <View
        style={{
          borderRadius: 5,
          backgroundColor: colors.darkerGrey,
          paddingVertical: metrics.baseMargin,
          justifyContent: "center",
          alignItems: "center",
        }}>
        <global.Text
          style={{
            marginBottom: metrics.smallMargin,
            color: colors.white,
            fontSize: fonts.size.h5,
          }}>
          {value}
        </global.Text>
        <global.Text>{label}</global.Text>
      </View>
    </View>
  );
}
