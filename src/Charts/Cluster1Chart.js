import React from 'react';
import Sketch from "react-p5";

export default function Cluster1() {

  const cluster1 = [
    {
      "y": 30,
      "x": 198.42
    },
    {
      "y": 30,
      "x": 244.3
    },
    {
      "y": 40,
      "x": 103.91
    },
    {
      "y": -30,
      "x": 273.78
    },
    {
      "y": 40,
      "x": 310.26
    },
    {
      "y": 40,
      "x": 110.73
    },
    {
      "y": 30,
      "x": 177.7
    },
    {
      "y": 40,
      "x": 105.75
    },
    {
      "y": 30,
      "x": 247.43
    },
    {
      "y": 30,
      "x": 31.32
    },
    {
      "y": 40,
      "x": 168.21
    },
    {
      "y": 40,
      "x": 280.96
    },
    {
      "y": 30,
      "x": 358.16
    },
    {
      "y": 40,
      "x": 252.77
    },
    {
      "y": -30,
      "x": 310.62
    },
    {
      "y": -40,
      "x": 93.73
    },
    {
      "y": 40,
      "x": 200.82
    },
    {
      "y": 40,
      "x": 275.07
    },
    {
      "y": 40,
      "x": 93.22
    },
    {
      "y": -40,
      "x": 103.54
    },
    {
      "y": -40,
      "x": 275.62
    },
    {
      "y": -30,
      "x": 102.75
    },
    {
      "y": 40,
      "x": 0.37
    },
    {
      "y": 30,
      "x": 254.43
    },
    {
      "y": 30,
      "x": 92.67
    },
    {
      "y": 30,
      "x": 69.61
    },
    {
      "y": 30,
      "x": 262.72
    },
    {
      "y": 40,
      "x": 49.38
    },
    {
      "y": 30,
      "x": 21.92
    },
    {
      "y": 40,
      "x": 58.96
    },
    {
      "y": 40,
      "x": 102.25
    },
    {
      "y": 40,
      "x": 335.68
    },
    {
      "y": 30,
      "x": 322.42
    },
    {
      "y": 30,
      "x": 57.67
    },
    {
      "y": 40,
      "x": 326.65
    },
    {
      "y": 30,
      "x": 351.34
    },
    {
      "y": 40,
      "x": 77.2
    },
    {
      "y": 40,
      "x": 60.06
    },
    {
      "y": 40,
      "x": 109.99
    },
    {
      "y": 30,
      "x": 196.95
    },
    {
      "y": 30,
      "x": 57.11
    },
    {
      "y": 30,
      "x": 231.22
    },
    {
      "y": 30,
      "x": 71.85
    },
    {
      "y": -30,
      "x": 329.97
    },
    {
      "y": -30,
      "x": 197.4
    },
    {
      "y": 40,
      "x": 64.48
    },
    {
      "y": 30,
      "x": 208
    },
    {
      "y": 40,
      "x": 236.56
    },
    {
      "y": 40,
      "x": 312.28
    },
    {
      "y": 30,
      "x": 266.96
    },
    {
      "y": 30,
      "x": 312.84
    },
    {
      "y": 40,
      "x": 112.14
    },
    {
      "y": 40,
      "x": 283.17
    },
    {
      "y": 40,
      "x": 291.83
    },
    {
      "y": 40,
      "x": 41.82
    },
    {
      "y": 30,
      "x": 111.46
    },
    {
      "y": 30,
      "x": 122.7
    },
    {
      "y": 40,
      "x": 87.88
    },
    {
      "y": 40,
      "x": 110.12
    },
    {
      "y": 40,
      "x": 256.64
    },
    {
      "y": 40,
      "x": 306.39
    },
    {
      "y": 40,
      "x": 277.83
    },
    {
      "y": 40,
      "x": 339.19
    },
    {
      "y": 40,
      "x": 238.59
    },
    {
      "y": 30,
      "x": 307.49
    },
    {
      "y": 40,
      "x": 334.76
    },
    {
      "y": -30,
      "x": 8.47
    },
    {
      "y": -30,
      "x": 136.89
    },
    {
      "y": 40,
      "x": 229.93
    },
    {
      "y": 30,
      "x": 237.48
    },
    {
      "y": -40,
      "x": 316.15
    },
    {
      "y": 30,
      "x": 114.91
    },
    {
      "y": -30,
      "x": 298.83
    },
    {
      "y": 40,
      "x": 315.41
    },
    {
      "y": 30,
      "x": 241.54
    },
    {
      "y": 40,
      "x": 307.86
    },
    {
      "y": 30,
      "x": 105.57
    },
    {
      "y": 30,
      "x": 314.49
    },
    {
      "y": 40,
      "x": 211.58
    },
    {
      "y": 30,
      "x": 55.27
    },
    {
      "y": 30,
      "x": 309.91
    },
    {
      "y": 30,
      "x": 8.1
    },
    {
      "y": 30,
      "x": 101.46
    },
    {
      "y": 30,
      "x": 220.16
    },
    {
      "y": 40,
      "x": 226.24
    },
    {
      "y": 40,
      "x": 302.52
    },
    {
      "y": -40,
      "x": 306.02
    },
    {
      "y": 40,
      "x": 3.68
    },
    {
      "y": 30,
      "x": 71.85
    },
    {
      "y": 30,
      "x": 311.18
    },
    {
      "y": 30,
      "x": 111.41
    },
    {
      "y": 30,
      "x": 307.12
    },
    {
      "y": 30,
      "x": 102.44
    },
    {
      "y": 30,
      "x": 334.02
    },
    {
      "y": -30,
      "x": 109.75
    },
    {
      "y": -40,
      "x": 306.2
    },
    {
      "y": 40,
      "x": 283.76
    },
    {
      "y": 40,
      "x": 189.21
    },
    {
      "y": -30,
      "x": 100.54
    },
    {
      "y": 40,
      "x": 77.75
    },
    {
      "y": 30,
      "x": 112.57
    },
    {
      "y": -30,
      "x": 105.75
    },
    {
      "y": 30,
      "x": 62.82
    },
    {
      "y": 30,
      "x": 57.11
    },
    {
      "y": 30,
      "x": 207.82
    },
    {
      "y": 30,
      "x": 222.01
    },
    {
      "y": 30,
      "x": 201.37
    },
    {
      "y": 30,
      "x": 320.02
    },
    {
      "y": 30,
      "x": 321.7
    },
    {
      "y": 40,
      "x": 347.84
    },
    {
      "y": 30,
      "x": 184.61
    },
    {
      "y": 40,
      "x": 311.55
    },
    {
      "y": 40,
      "x": 23.77
    },
    {
      "y": 40,
      "x": 317.07
    },
    {
      "y": 30,
      "x": 345.81
    },
    {
      "y": 40,
      "x": 83.64
    },
    {
      "y": 40,
      "x": 159
    },
    {
      "y": 30,
      "x": 142.23
    },
    {
      "y": -30,
      "x": 197.32
    },
    {
      "y": 40,
      "x": 64.48
    },
    {
      "y": 30,
      "x": 335.86
    },
    {
      "y": -30,
      "x": 88.99
    },
    {
      "y": 30,
      "x": 193.63
    },
    {
      "y": -30,
      "x": 335.68
    },
    {
      "y": 30,
      "x": 356.13
    },
    {
      "y": 40,
      "x": 57.3
    },
    {
      "y": 30,
      "x": 187.27
    },
    {
      "y": 40,
      "x": 247.12
    },
    {
      "y": 30,
      "x": 336.97
    },
    {
      "y": 40,
      "x": 196.95
    },
    {
      "y": 40,
      "x": 94.28
    },
    {
      "y": 40,
      "x": 52.88
    },
    {
      "y": 40,
      "x": 98.2
    },
    {
      "y": 30,
      "x": 319.3
    },
    {
      "y": 30,
      "x": 61.35
    },
    {
      "y": 40,
      "x": 73.14
    },
    {
      "y": 40,
      "x": 225.14
    },
    {
      "y": 30,
      "x": 98.94
    },
    {
      "y": -40,
      "x": 195.84
    },
    {
      "y": 30,
      "x": 125.95
    },
    {
      "y": 30,
      "x": 112.57
    },
    {
      "y": 30,
      "x": 86.96
    },
    {
      "y": 40,
      "x": 198.87
    },
    {
      "y": 30,
      "x": 133.57
    },
    {
      "y": 30,
      "x": 231.95
    },
    {
      "y": 40,
      "x": 224.59
    },
    {
      "y": 30,
      "x": 226.98
    },
    {
      "y": 40,
      "x": 17.31
    },
    {
      "y": 40,
      "x": 287.63
    },
    {
      "y": 30,
      "x": 51.01
    },
    {
      "y": 40,
      "x": 90.05
    },
    {
      "y": 40,
      "x": 62.64
    },
    {
      "y": 40,
      "x": 88.57
    },
    {
      "y": -30,
      "x": 193.53
    },
    {
      "y": 40,
      "x": 109.01
    },
    {
      "y": 30,
      "x": 244.73
    },
    {
      "y": -40,
      "x": 190.32
    },
    {
      "y": 40,
      "x": 102.44
    },
    {
      "y": 40,
      "x": 229.01
    },
    {
      "y": 40,
      "x": 66.84
    },
    {
      "y": 30,
      "x": 121.78
    },
    {
      "y": 50,
      "x": 137.26
    },
    {
      "y": 40,
      "x": 77.16
    },
    {
      "y": 40,
      "x": 92.26
    },
    {
      "y": 40,
      "x": 44.59
    },
    {
      "y": 40,
      "x": 112.57
    },
    {
      "y": 40,
      "x": 106.62
    },
    {
      "y": 30,
      "x": 313.2
    },
    {
      "y": 30,
      "x": 175.58
    },
    {
      "y": 40,
      "x": 113.12
    },
    {
      "y": 30,
      "x": 240.61
    },
    {
      "y": 40,
      "x": 335.51
    },
    {
      "y": 40,
      "x": 252.64
    },
    {
      "y": 40,
      "x": 174.84
    },
    {
      "y": 30,
      "x": 335.69
    },
    {
      "y": 30,
      "x": 302.73
    },
    {
      "y": 30,
      "x": 246.51
    },
    {
      "y": 30,
      "x": 252.96
    },
    {
      "y": 30,
      "x": 271.93
    },
    {
      "y": 40,
      "x": 347.66
    },
    {
      "y": 30,
      "x": 161.76
    },
    {
      "y": 30,
      "x": 267.14
    },
    {
      "y": 40,
      "x": 229.07
    },
    {
      "y": 40,
      "x": 210.95
    },
    {
      "y": 30,
      "x": 102.02
    },
    {
      "y": 40,
      "x": 115.64
    },
    {
      "y": 30,
      "x": 317.99
    },
    {
      "y": 40,
      "x": 238.96
    },
    {
      "y": 40,
      "x": 359.26
    },
    {
      "y": 40,
      "x": 106.67
    },
    {
      "y": 30,
      "x": 137.37
    },
    {
      "y": 30,
      "x": 252.09
    },
    {
      "y": 30,
      "x": 135.78
    },
    {
      "y": 30,
      "x": 259.22
    },
    {
      "y": 30,
      "x": 332
    },
    {
      "y": 40,
      "x": 144.99
    },
    {
      "y": 40,
      "x": 178.99
    },
    {
      "y": 40,
      "x": 306.05
    },
    {
      "y": 40,
      "x": 220.6
    },
    {
      "y": 30,
      "x": 281.55
    },
    {
      "y": 40,
      "x": 317.65
    },
    {
      "y": 30,
      "x": 177.7
    },
    {
      "y": 40,
      "x": 331.07
    },
    {
      "y": 40,
      "x": 44.59
    },
    {
      "y": -40,
      "x": 73.33
    },
    {
      "y": 30,
      "x": 310.26
    },
    {
      "y": 40,
      "x": 102.94
    },
    {
      "y": -30,
      "x": 282.11
    },
    {
      "y": -40,
      "x": 72.55
    },
    {
      "y": 40,
      "x": 105.57
    },
    {
      "y": 30,
      "x": 325.57
    },
    {
      "y": 30,
      "x": 336.42
    },
    {
      "y": 30,
      "x": 99.67
    },
    {
      "y": 30,
      "x": 77.71
    },
    {
      "y": 40,
      "x": 308.44
    },
    {
      "y": 30,
      "x": 203.66
    },
    {
      "y": 30,
      "x": 156.05
    },
    {
      "y": 40,
      "x": 111.1
    },
    {
      "y": -30,
      "x": 89.49
    },
    {
      "y": 30,
      "x": 102.75
    },
    {
      "y": -40,
      "x": 114.91
    },
    {
      "y": 40,
      "x": 146.58
    },
    {
      "y": 30,
      "x": 251.91
    },
    {
      "y": 30,
      "x": 110.73
    },
    {
      "y": 40,
      "x": 136.7
    },
    {
      "y": 40,
      "x": 108.7
    },
    {
      "y": 40,
      "x": 111.28
    },
    {
      "y": 30,
      "x": 0.74
    },
    {
      "y": 40,
      "x": 308.78
    },
    {
      "y": 30,
      "x": 44.77
    },
    {
      "y": -30,
      "x": 78.08
    },
    {
      "y": 40,
      "x": 348.95
    },
    {
      "y": 40,
      "x": 109.81
    },
    {
      "y": 40,
      "x": 185.34
    },
    {
      "y": -30,
      "x": 242.7
    },
    {
      "y": 40,
      "x": 277.46
    },
    {
      "y": -40,
      "x": 245.09
    },
    {
      "y": 30,
      "x": 109.62
    },
    {
      "y": -40,
      "x": 359.63
    },
    {
      "y": 30,
      "x": 60.4
    },
    {
      "y": 40,
      "x": 203.66
    },
    {
      "y": 30,
      "x": 316.54
    },
    {
      "y": 30,
      "x": 74.58
    },
    {
      "y": 40,
      "x": 106.25
    },
    {
      "y": 40,
      "x": 30.75
    },
    {
      "y": -40,
      "x": 110.36
    },
    {
      "y": 30,
      "x": 49.93
    },
    {
      "y": 30,
      "x": 324.07
    },
    {
      "y": 40,
      "x": 112.33
    },
    {
      "y": 30,
      "x": 305.86
    },
    {
      "y": 30,
      "x": 249.64
    },
    {
      "y": 30,
      "x": 304.91
    },
    {
      "y": 40,
      "x": 256.83
    },
    {
      "y": 40,
      "x": 335.68
    },
    {
      "y": 30,
      "x": 64.27
    },
    {
      "y": 40,
      "x": 343.24
    },
    {
      "y": -40,
      "x": 263.88
    },
    {
      "y": 30,
      "x": 109.93
    },
    {
      "y": 30,
      "x": 159.47
    },
    {
      "y": 40,
      "x": 99.86
    },
    {
      "y": 40,
      "x": 102.62
    },
    {
      "y": 40,
      "x": 299.97
    },
    {
      "y": 30,
      "x": 189.4
    },
    {
      "y": 30,
      "x": 350.79
    },
    {
      "y": 40,
      "x": 127.61
    },
    {
      "y": 30,
      "x": 281.51
    },
    {
      "y": 30,
      "x": 206.24
    },
    {
      "y": 30,
      "x": 148.05
    },
    {
      "y": 40,
      "x": 312.49
    },
    {
      "y": 40,
      "x": 109.99
    },
    {
      "y": -30,
      "x": 209.29
    },
    {
      "y": 30,
      "x": 330.52
    },
    {
      "y": 30,
      "x": 57.64
    },
    {
      "y": 30,
      "x": 193.27
    },
    {
      "y": 40,
      "x": 70.71
    },
    {
      "y": 30,
      "x": 319.28
    },
    {
      "y": 40,
      "x": 171.81
    },
    {
      "y": 40,
      "x": 291.31
    },
    {
      "y": 30,
      "x": 323.52
    },
    {
      "y": 30,
      "x": 220.79
    },
    {
      "y": 40,
      "x": 235.82
    },
    {
      "y": 30,
      "x": 155.5
    },
    {
      "y": 40,
      "x": 254.98
    },
    {
      "y": 40,
      "x": 189.48
    },
    {
      "y": 30,
      "x": 249.51
    },
    {
      "y": 30,
      "x": 55.8
    },
    {
      "y": 40,
      "x": 64.08
    },
    {
      "y": 40,
      "x": 86.92
    },
    {
      "y": 30,
      "x": 109.44
    },
    {
      "y": 30,
      "x": 309.36
    },
    {
      "y": -40,
      "x": 10.32
    },
    {
      "y": -40,
      "x": 335.86
    },
    {
      "y": 30,
      "x": 333.84
    },
    {
      "y": 30,
      "x": 130.19
    },
    {
      "y": 30,
      "x": 146.21
    },
    {
      "y": 30,
      "x": 318.94
    },
    {
      "y": 30,
      "x": 21.73
    },
    {
      "y": 40,
      "x": 228.52
    },
    {
      "y": 30,
      "x": 213.72
    },
    {
      "y": 40,
      "x": 219.61
    },
    {
      "y": 40,
      "x": 238.96
    },
    {
      "y": 30,
      "x": 121.9
    },
    {
      "y": 30,
      "x": 207.16
    },
    {
      "y": -30,
      "x": 231.03
    },
    {
      "y": 30,
      "x": 112.51
    },
    {
      "y": 30,
      "x": 230.11
    },
    {
      "y": 40,
      "x": 347.11
    },
    {
      "y": -30,
      "x": 256.27
    },
    {
      "y": 40,
      "x": 62.06
    },
    {
      "y": 30,
      "x": 246.2
    },
    {
      "y": 30,
      "x": 334.04
    },
    {
      "y": 40,
      "x": 74.06
    },
    {
      "y": 40,
      "x": 230.67
    },
    {
      "y": 30,
      "x": 105.7
    },
    {
      "y": -40,
      "x": 149.52
    },
    {
      "y": 40,
      "x": 335.51
    },
    {
      "y": 40,
      "x": 107.41
    },
    {
      "y": 30,
      "x": 109.44
    },
    {
      "y": 40,
      "x": 196.95
    },
    {
      "y": 30,
      "x": 317.07
    },
    {
      "y": 40,
      "x": 103.17
    },
    {
      "y": 30,
      "x": 337.17
    },
    {
      "y": -40,
      "x": 111.28
    },
    {
      "y": 40,
      "x": 113.98
    },
    {
      "y": 40,
      "x": 186.35
    },
    {
      "y": 30,
      "x": 306.41
    },
    {
      "y": 40,
      "x": 128.72
    },
    {
      "y": 40,
      "x": 313.96
    },
    {
      "y": 40,
      "x": 322.42
    },
    {
      "y": 40,
      "x": 349.31
    },
    {
      "y": 40,
      "x": 95.25
    },
    {
      "y": 30,
      "x": 261.12
    },
    {
      "y": 40,
      "x": 307.7
    },
    {
      "y": 30,
      "x": 234.35
    },
    {
      "y": 40,
      "x": 308.41
    },
    {
      "y": 40,
      "x": 94.15
    },
    {
      "y": 30,
      "x": 110.85
    },
    {
      "y": -40,
      "x": 117.67
    },
    {
      "y": 30,
      "x": 311.02
    },
    {
      "y": 30,
      "x": 197.69
    },
    {
      "y": 40,
      "x": 228.64
    },
    {
      "y": 40,
      "x": 65.77
    },
    {
      "y": -30,
      "x": 156.23
    },
    {
      "y": 40,
      "x": 308.97
    },
    {
      "y": 30,
      "x": 92.62
    },
    {
      "y": 30,
      "x": 102.75
    },
    {
      "y": 40,
      "x": 61.35
    },
    {
      "y": -30,
      "x": 141.05
    },
    {
      "y": 40,
      "x": 92.81
    },
    {
      "y": 40,
      "x": 190.22
    },
    {
      "y": -40,
      "x": 318.02
    },
    {
      "y": 40,
      "x": 106.67
    },
    {
      "y": -30,
      "x": 106.8
    },
    {
      "y": 30,
      "x": 107.91
    },
    {
      "y": 30,
      "x": 171.53
    },
    {
      "y": 40,
      "x": 53.03
    },
    {
      "y": -30,
      "x": 105.88
    },
    {
      "y": 30,
      "x": 93.91
    },
    {
      "y": 40,
      "x": 131.55
    },
    {
      "y": 40,
      "x": 7.19
    },
    {
      "y": 40,
      "x": 193.45
    },
    {
      "y": 40,
      "x": 123.19
    },
    {
      "y": 40,
      "x": 282.48
    },
    {
      "y": -30,
      "x": 188.75
    },
    {
      "y": 40,
      "x": 94.7
    },
    {
      "y": 30,
      "x": 335.86
    },
    {
      "y": 30,
      "x": 309.54
    },
    {
      "y": 30,
      "x": 91.57
    },
    {
      "y": 30,
      "x": 137.99
    },
    {
      "y": 30,
      "x": 109.38
    },
    {
      "y": 30,
      "x": 282.84
    },
    {
      "y": 40,
      "x": 111.28
    },
    {
      "y": -40,
      "x": 126.2
    },
    {
      "y": 30,
      "x": 3.13
    },
    {
      "y": 40,
      "x": 130.44
    },
    {
      "y": 30,
      "x": 199.98
    },
    {
      "y": 40,
      "x": 220.6
    },
    {
      "y": 30,
      "x": 63.53
    },
    {
      "y": 30,
      "x": 109.38
    },
    {
      "y": 30,
      "x": 321.51
    },
    {
      "y": 40,
      "x": 266.22
    },
    {
      "y": 30,
      "x": 60.21
    },
    {
      "y": 40,
      "x": 313.78
    },
    {
      "y": 40,
      "x": 338.27
    },
    {
      "y": 30,
      "x": 345.08
    },
    {
      "y": -30,
      "x": 323.15
    }
  ];

  const drawPoint = (p5, x, y) => {
    p5.line(x - 4, y, x + 4, y);
    p5.line(x, y - 4, x, y + 4);
  }

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(canvasParentRef.offsetWidth, 550).parent(canvasParentRef);
    const value = ['mV', '40', ' 30', ' 20', ' 10', '   0', '-10', '-20', '-30', '-40'];
    const posX = 30;
    const posY = 100;
    const zoomHeight = 40;
    const posZero = 4 * zoomHeight;
    const w = canvasParentRef.offsetWidth - 100;
    const res = w / 360;

    p5.textSize(16);
    p5.fill('#808080');

    // write value width
    for (let i = 0; i < 7; i++) {
      p5.text(i * 90, i * 90 * res + posX, posY + 8 * zoomHeight + 30);
    }

    // write value height
    value.forEach((item, index) => {
      p5.text(item, posX - 30, posY + index * zoomHeight + 4);
    });

    // draw lines
    p5.stroke("#fff");
    p5.strokeWeight(1);
    value.forEach((item, index) => {
      p5.line(posX, posY + index * zoomHeight, posX + w + 50, posY + index * zoomHeight);
    })

    p5.strokeWeight(4);
    p5.stroke('#466fd8')
    cluster1.forEach(item => {
      drawPoint(p5, posX + item.x * res, posY + posZero - item.y * zoomHeight / 10)
    });

    // draw curve
    p5.stroke('#f2af13')
    p5.strokeWeight(1)
    let curveWidth = w / 360 * 320;
    for (let i = 0; i < curveWidth; i++) {
      let x = i + posX + 20 * res;
      let y = posY + posZero - 40 * zoomHeight / 25 + p5.cos((i + curveWidth / 4) * p5.PI / curveWidth * 2) * 70 * zoomHeight / 30;
      p5.rect(x, y, 1, 1);
    }
  };

  const draw = (p5) => {
  };

  return <Sketch setup={setup} draw={draw} />
}