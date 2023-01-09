import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import Sketch from "react-p5";

export default function OverAllChart() {

  const data = [
    {
      "indexId": 70991,
      "internalId": "2022/12/6",
      "CreatedOn": 1670256060158826200,
      "QmV": 20.69,
      "RepNs": 44.442254631454475,
      "SourceTime": "2022/12/6/20221206000014678888",
      "Time": 1670256014678888000
    },
    {
      "indexId": 70993,
      "internalId": "2022/12/6",
      "CreatedOn": 1670257859863168000,
      "QmV": 19.697,
      "RepNs": 42.69374876750148,
      "SourceTime": "2022/12/6/20221206003014363421",
      "Time": 1670257814363421000
    },
    {
      "indexId": 70995,
      "internalId": "2022/12/6",
      "CreatedOn": 1670259672602768000,
      "QmV": 21.185999999999996,
      "RepNs": 61.70296252697665,
      "SourceTime": "2022/12/6/20221206010015780158",
      "Time": 1670259615780158000
    },
    {
      "indexId": 70997,
      "internalId": "2022/12/6",
      "CreatedOn": 1670261452331439900,
      "QmV": 21.021,
      "RepNs": 42.50073957203431,
      "SourceTime": "2022/12/6/20221206013014581502",
      "Time": 1670261414581502000
    },
    {
      "indexId": 70999,
      "internalId": "2022/12/6",
      "CreatedOn": 1670263252708336000,
      "QmV": 20.028000000000002,
      "RepNs": 39.478878799842086,
      "SourceTime": "2022/12/6/20221206020014700448",
      "Time": 1670263214700448000
    },
    {
      "indexId": 71001,
      "internalId": "2022/12/6",
      "CreatedOn": 1670265054616934100,
      "QmV": 19.862000000000002,
      "RepNs": 39.09180651530108,
      "SourceTime": "2022/12/6/20221206023014593686",
      "Time": 1670265014593686000
    },
    {
      "indexId": 71003,
      "internalId": "2022/12/6",
      "CreatedOn": 1670266857609207000,
      "QmV": 20.524,
      "RepNs": 41.140489344909234,
      "SourceTime": "2022/12/6/20221206030014819292",
      "Time": 1670266814819292000
    },
    {
      "indexId": 71005,
      "internalId": "2022/12/6",
      "CreatedOn": 1670268651320459000,
      "QmV": 19.697,
      "RepNs": 35.06865553689618,
      "SourceTime": "2022/12/6/20221206033014785104",
      "Time": 1670268614785104000
    },
    {
      "indexId": 71007,
      "internalId": "2022/12/6",
      "CreatedOn": 1670270455113195800,
      "QmV": 19.366,
      "RepNs": 38.4995064165844,
      "SourceTime": "2022/12/6/20221206040014932322",
      "Time": 1670270414932322000
    },
    {
      "indexId": 71009,
      "internalId": "2022/12/6",
      "CreatedOn": 1670272245087422000,
      "QmV": 19.697,
      "RepNs": 36.33850103683223,
      "SourceTime": "2022/12/6/20221206043015465342",
      "Time": 1670272215465342000
    },
    {
      "indexId": 71011,
      "internalId": "2022/12/6",
      "CreatedOn": 1670274044475172000,
      "QmV": 19.697,
      "RepNs": 35.4637953175936,
      "SourceTime": "2022/12/6/20221206050014501770",
      "Time": 1670274014501770000
    },
    {
      "indexId": 71013,
      "internalId": "2022/12/6",
      "CreatedOn": 1670275848435579100,
      "QmV": 19.862000000000002,
      "RepNs": 35.56258026276796,
      "SourceTime": "2022/12/6/20221206053016100625",
      "Time": 1670275816100625000
    },
    {
      "indexId": 71015,
      "internalId": "2022/12/6",
      "CreatedOn": 1670277651977298000,
      "QmV": 20.855,
      "RepNs": 40.35122336227309,
      "SourceTime": "2022/12/6/20221206060014432466",
      "Time": 1670277614432466000
    },
    {
      "indexId": 71017,
      "internalId": "2022/12/6",
      "CreatedOn": 1670279447008778000,
      "QmV": 19.697,
      "RepNs": 29.6794618124258,
      "SourceTime": "2022/12/6/20221206063014008789",
      "Time": 1670279414008789000
    },
    {
      "indexId": 71019,
      "internalId": "2022/12/6",
      "CreatedOn": 1670281253362912000,
      "QmV": 20.192999999999998,
      "RepNs": 36.24691358024691,
      "SourceTime": "2022/12/6/20221206070015048460",
      "Time": 1670281215048460000
    },
    {
      "indexId": 71021,
      "internalId": "2022/12/6",
      "CreatedOn": 1670283133333904100,
      "QmV": 21.517,
      "RepNs": 123.24929971988796,
      "SourceTime": "2022/12/6/20221206073015870994",
      "Time": 1670283015870994000
    },
    {
      "indexId": 71023,
      "internalId": "2022/12/6",
      "CreatedOn": 1670284944784626000,
      "QmV": 21.849,
      "RepNs": 135.2261790182868,
      "SourceTime": "2022/12/6/20221206080015754564",
      "Time": 1670284815754564000
    },
    {
      "indexId": 71025,
      "internalId": "2022/12/6",
      "CreatedOn": 1670286734576813000,
      "QmV": 21.683,
      "RepNs": 137.8149644162339,
      "SourceTime": "2022/12/6/20221206083016126597",
      "Time": 1670286616126597000
    },
    {
      "indexId": 71027,
      "internalId": "2022/12/6",
      "CreatedOn": 1670288548933548000,
      "QmV": 22.014,
      "RepNs": 141.7458945548833,
      "SourceTime": "2022/12/6/20221206090015863488",
      "Time": 1670288415863488000
    },
    {
      "indexId": 71030,
      "internalId": "2022/12/6",
      "CreatedOn": 1670290348314786000,
      "QmV": 22.014,
      "RepNs": 137.9940378882585,
      "SourceTime": "2022/12/6/20221206093016669692",
      "Time": 1670290216669692000
    },
    {
      "indexId": 71032,
      "internalId": "2022/12/6",
      "CreatedOn": 1670292137287659800,
      "QmV": 22.014,
      "RepNs": 136.49051881798056,
      "SourceTime": "2022/12/6/20221206100015845864",
      "Time": 1670292015845864000
    },
    {
      "indexId": 71033,
      "internalId": "2022/12/6",
      "CreatedOn": 1670293913508649200,
      "QmV": 21.352,
      "RepNs": 111.45540815338433,
      "SourceTime": "2022/12/6/20221206103015787835",
      "Time": 1670293815787835000
    },
  ];

  function CalcPosQmV(value) {
    return (((value - 3) / Math.E) - 6) / 2 * 10
  }

  function lineLine(p5, x1, y1, x2, y2, x3, y3, x4, y4) {
    // calculate the distance to intersection point
    const uA = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1));
    const uB = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1));

    // if uA and uB are between 0-1, lines are colliding
    if (uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1) {

      // optionally, draw a circle where the lines meet
      const intersectionX = x1 + (uA * (x2 - x1));
      const intersectionY = y1 + (uA * (y2 - y1));
      p5.circle(intersectionX, intersectionY, 10);
    }
  }

  // eslint-disable-next-line no-extend-native
  Array.prototype.max = function () {
    return Math.max.apply(null, this);
  };

  // eslint-disable-next-line no-extend-native
  Array.prototype.min = function () {
    return Math.min.apply(null, this);
  };

  function getListQmV() {
    const list = []
    data.forEach((e) => {
      list.push(e.QmV);
    })
    return list;
  }
  console.log(`max QmV: ${getListQmV().max()}`);
  console.log(`min QmV: ${getListQmV().min()}`);

  const posX = 50;
  const posY = 50;

  const setupInfo = (p5, canvasParentRef) => {
    // const width = canvasParentRef.offsetWidth; // 12 unit in 22 unit
    // const range = 100;
    p5.createCanvas(200, 430).parent(canvasParentRef);
    p5.background('#092d4a');

    // Write date
    p5.fill('#aaa');
    p5.noStroke();
    // data.forEach((item, index) => {
    //   p5.text(item.internalId, posX + 100 + index * range, posY + 350);
    // });

    // write values RepNs and values Qmv
    p5.textSize(17);
    for (let i = 0; i < 6; i++) {
      p5.text(i * 30, posX * 1, posY + 300 - i * 50 + 4);
      const textValue = (6 + i * 2 / 10) + 'e+3';
      p5.text(textValue, posX * 2, posY + 300 + 4 - i * 50);
      p5.text(i * 100, posX * 0, posY + 300 + 4 - i * 50);
    }

    p5.text('Scala', posX * 0, posY + 300 - 6 * 50 + 4);
    p5.text('mV', posX * 1, posY + 300 - 6 * 50 + 4);
    p5.text('N/s', posX * 2, posY + 300 - 6 * 50 + 4);
  }

  const setup = (p5, canvasParentRef) => {
    // const width = canvasParentRef.offsetWidth; // 12 unit in 22 unit
    const range = 100;
    const widthCanvas = range * data.length;
    p5.createCanvas(widthCanvas, 430).parent(canvasParentRef);
    p5.background('#092d4a');

    // draw lines
    p5.stroke('white')
    for (let i = 0; i < 7; i++) {
      p5.line(0, posY + i * 50, widthCanvas, posY + i * 50);
    }

    // Write date
    p5.fill('White');
    p5.noStroke();

    // draw line chart
    p5.strokeWeight(3.5)
    p5.stroke('#a999e5');
    p5.fill('#a999e5');
    for (let i = 0; i < data.length - 1; i++) {
      const x1 = i * range;
      const y1 = posY + 300 - data[i].RepNs / 30 * 50;
      const x2 = (i + 1) * range;
      const y2 = posY + 300 - data[i + 1].RepNs / 30 * 50;
      p5.line(x1, y1, x2, y2);
      for (let j = 0; j < data.length; j++) {
        lineLine(p5, 25 + j * range, 0, 25 + j * range, 430, x1, y1, x2, y2);
      }
    }

    // draw line chart
    p5.stroke('#00dec2');
    p5.fill('#00dec2')
    for (let i = 0; i < data.length - 1; i++) {
      const x1 = i * range;
      const y1 = posY + 300 - CalcPosQmV(data[i].QmV) * 50;
      const x2 = (i + 1) * range;
      const y2 = posY + 300 - CalcPosQmV(data[i + 1].QmV) * 50;
      p5.line(x1, y1, x2, y2);
      for (let j = 0; j < data.length; j++) {
        lineLine(p5, 25 + j * range, 0, 25 + j * range, 430, x1, y1, x2, y2);
      }
    }

    // draw node bottom line chart
    p5.noStroke()
    p5.fill('#fff')
    for (let i = 0; i < data.length; i++) {
      p5.circle(25 + i * range, posY + 300, 13);
    }

    // write time bottom
    p5.fill('#ccc')
    p5.textSize(18)
    data.forEach((item, index) => {
      p5.text(item.internalId, index * range, posY + 340)
    })
  };

  return (<Flex>
    <Sketch setup={setupInfo} />
    <Box overflowX='auto'>
      <Sketch setup={setup} />
    </Box>
  </Flex>)
}