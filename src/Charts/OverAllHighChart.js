import React from 'react';
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

export default function OverAllHighChart({ data }) {

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
        data: data[0],
        color: '#466fd8' // purple
      },
      {
        type: 'scatter',
        data: data[1],
        color: '#ff577d' // red
      }, {
        type: 'spline',
        data: [[0, 0], [90, 45], [270, -45], [360, 0]],
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