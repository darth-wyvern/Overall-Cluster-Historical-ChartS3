import React from 'react';
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

export default function OverAllHighChart({ data }) {

  const RepNs = [];
  const QmV = [];
  const Scala = Array.from({ length: data.length }, () => Math.floor(Math.random() * 100));
  const internalId = [];

  const getList = () => {
    data.forEach((e) => {
      RepNs.push(e.RepNs)
      QmV.push(e.QmV)
      internalId.push(e.internalId)
    })
  }

  getList();

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
        color: '#092d4a',
      }
    },
    rangeSelector: {
      selected: 1
    },
    navigator: {
      enabled: false
    },
    scrollbar: {
      enabled: true,
      barBorderRadius: 7,
      trackBorderRadius: 10,
      rifleColor: '#083a61',
      barBorderColor: '#0b4573',
      trackBorderColor: '#fff0',
      barBackgroundColor: '#083a61',
      trackBackgroundColor: '#071e30',
      buttonBorderRadius: 10,
      buttonBackgroundColor: '#0000',
      buttonArrowColor: "#fffa",
      buttonBorderColor: '#ccc',
    },
    legend: {
      itemStyle: {
        color: '#ccc',
        fontSize: 'large'
      },
      itemHoverStyle: {
        color: '#fff'
      }
    },
    xAxis: [{
      crosshair: true,
      max: 16,
      tickWidth: 0,
      categories: internalId,
    }],
    tooltip: {
      crosshairs: true,
      shared: true
    },
    yAxis: [{
      margin: 16,
      title: {
        text: 'RepNs',
        align: 'high',
        offset: 0,
        rotation: 0,
        margin: 0,
        textAlign: 'right',
        y: -20,
        style: {
          color: 'white',
          margin: '2rem',
          alignItem: 'center',
        }
      },
    }, {
      margin: 16,
      title: {
        text: 'QmV',
        align: 'high',
        offset: 0,
        rotation: 0,
        margin: 0,
        textAlign: 'right',
        y: -20,
        style: {
          color: 'white',
          margin: '2rem',
          alignItem: 'center',
        }
      },
    }, {
      margin: 16,
      title: {
        text: 'Scala',
        align: 'high',
        offset: 0,
        rotation: 0,
        margin: 0,
        textAlign: 'right',
        y: -20,
        style: {
          color: 'white',
          margin: '2rem',
          alignItem: 'center',
        }
      },
    }],
    series: [{
      name: 'RepNs',
      yAxis: 0,
      data: RepNs,
      lineWidth: 4,
      marker: {
        symbol: 'circle',
        radius: 6,
      },
      color: '#a999e5'
    },
    {
      name: 'QmV',
      yAxis: 1,
      data: QmV,
      lineWidth: 4,
      marker: {
        symbol: 'circle',
        radius: 6,
      },
      color: '#00dec2'
    },
    {
      name: 'Scala',
      yAxis: 2,
      data: Scala,
      lineWidth: 4,
      marker: {
        symbol: 'circle',
        radius: 6,
      },
      color: '#d14b50'
    }]
  };


  return (
    <HighchartsReact highcharts={Highcharts} options={options} />
  )
}