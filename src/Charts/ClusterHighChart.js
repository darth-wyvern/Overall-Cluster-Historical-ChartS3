import React from 'react';
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

// eslint-disable-next-line no-extend-native
Array.prototype.max = function () {
  return Math.max.apply(null, this);
};

// eslint-disable-next-line no-extend-native
Array.prototype.min = function () {
  return Math.min.apply(null, this);
};

function getList(data) {
  const list = []
  data.forEach((e) => {
    list.push(e.y);
  })
  return list;
}

export default function ClusterHighChart({ data, color }) {

  const options = {
    chart: {
      zoomType: 'xy',
      backgroundColor: '#092d4a',
      style: {
        paddingRight: '2rem',
      }
    },
    title: {
      text: 'Historical',
      align: 'center',
      style: {
        color: '#0000',
      }
    },
    legend: {
      itemStyle: {
        color: '#ccc',
        fontSize: 'large'
      },
      itemHoverStyle: {
        color: 'white'
      }
    },
    xAxis: [{
      tickWidth: 0,
      min: -10,
      max: 370,
    }],
    yAxis: [{
      title: {
        text: 'cluster',
        align: 'high',
        offset: 0,
        rotation: 0,
        y: -20,
        style: {
          color: 'white'
        }
      }
    }],
    tooltip: {
      crosshairs: true,
      shared: true
    },
    series:
      [{
        type: 'scatter',
        data: data,
        color: color
      },
      {
        type: 'spline',
        data: [[0, 0], [90, getList(data).max()], [270, getList(data).min()], [360, 0]],
        marker: {
          radius: 0,
          symbol: 'none',
        },
        color: '#f2af13'
      }]
  };

  return (
    <HighchartsReact highcharts={Highcharts} options={options} />
  )
}