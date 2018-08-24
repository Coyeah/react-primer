import React from "react";
import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util
} from "bizcharts";
import DataSet from "@antv/data-set";

class Travel extends React.Component {
  render() {
    const { Text } = Guide;
    const text = [
      "MIDNIGHT",
      "3 AM",
      "6 AM",
      "9 AM",
      "NOON",
      "3 PM",
      "6 PM",
      "9 PM"
    ];
    const data = [];

    for (let i = 0; i < 24; i++) {
      const item = {};
      item.type = i + "";
      item.value = 10;
      data.push(item);
    }

    const { DataView } = DataSet;
    const dv = new DataView();
    dv.source(data).transform({
      type: "percent",
      field: "value",
      dimension: "type",
      as: "percent"
    });
    const userData = [
      {
        type: "睡眠",
        value: 70
      },
      {
        type: "淡茶 & 烟斗 & 冥想",
        value: 10
      },
      {
        type: "写作",
        value: 10
      },
      {
        type: "教课",
        value: 40
      },
      {
        type: "酒吧吃肉配红酒",
        value: 40
      },
      {
        type: "散步",
        value: 10
      },
      {
        type: "拜访约瑟夫",
        value: 30
      },
      {
        type: "阅读",
        value: 30
      }
    ];
    const userDv = new DataView();
    userDv.source(userData).transform({
      type: "percent",
      field: "value",
      dimension: "type",
      as: "percent"
    });
    const cols = {
      percent: {
        formatter: val => {
          return (val * 100).toFixed(2) + "%";
        }
      }
    };
    return (
      <div>
        <Chart width={400} height={400} data={data} padding={40} forceFit>
          <Coord type="theta" radius={0.8} />
          <Tooltip showTitle={false} />
          <View data={dv}>
            <Coord type="theta" innerRadius={0.9} />
            <Geom
              type="intervalStack"
              position="percent"
              color={["type", ["rgba(255, 255, 255, 0)"]]}
              style={{
                stroke: "#444",
                lineWidth: 1
              }}
            />
            <Guide>
              <Text
                position={["50%", "50%"]}
                content="24 hours"
                style={{
                  lineHeight: "240px",
                  fontSize: "48",
                  fill: "#262626",
                  textAlign: "center"
                }}
              />
            </Guide>
          </View>
          <View data={data}>
            <Coord type="polar" innerRadius={0.9} />
            <Geom
              type="interval"
              position="type*value"
              color="#444"
              size={[
                "type",
                function(val) {
                  if (val % 3 === 0) {
                    return 4;
                  } else {
                    return 0;
                  }
                }
              ]}
              style={{
                stroke: "#444",
                lineWidth: 1
              }}
            >
              <Label
                content={[
                  "type",
                  function(val) {
                    if (val % 3 === 0) {
                      return text[val / 3];
                    }

                    return "";
                  }
                ]}
                offset={15}
                textStyle={{
                  fontSize: 12,
                  fontWeight: "bold",
                  fill: "#bfbfbf"
                }}
              />
            </Geom>
            <Guide>
              <Text
                position={["50%", "50%"]}
                content="24 hours"
                style={{
                  lineHeight: "240px",
                  fontSize: "48",
                  fill: "#609064",
                  textAlign: "center"
                }}
              />
            </Guide>
          </View>
          <View data={userDv} scale={cols}>
            <Coord type="theta" innerRadius={0.75} />
            <Geom type="intervalStack" position="percent" color={"type"}>
              <Label content="type" offset={40} />
            </Geom>
          </View>
        </Chart>
      </div>
    );
  }
}

export default Travel;
