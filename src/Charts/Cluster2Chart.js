import React from 'react';
import Sketch from "react-p5";

export default function Cluster2() {

  const cluster2 = [
    {
      "y": 40,
      "x": 264.98
    },
    {
      "y": -40,
      "x": 267.33
    },
    {
      "y": -40,
      "x": 97.28
    },
    {
      "y": 40,
      "x": 217.22
    },
    {
      "y": 30,
      "x": 84.2
    },
    {
      "y": 30,
      "x": 90.46
    },
    {
      "y": 30,
      "x": 12.16
    },
    {
      "y": 40,
      "x": 272.9
    },
    {
      "y": 30,
      "x": 79.96
    },
    {
      "y": 30,
      "x": 229.01
    },
    {
      "y": 30,
      "x": 29.66
    },
    {
      "y": 30,
      "x": 267.14
    },
    {
      "y": 40,
      "x": 98.75
    },
    {
      "y": 40,
      "x": 92.86
    },
    {
      "y": 30,
      "x": 86.04
    },
    {
      "y": 40,
      "x": 55.27
    },
    {
      "y": 40,
      "x": 92.12
    },
    {
      "y": -40,
      "x": 217.03
    },
    {
      "y": 40,
      "x": 237.48
    },
    {
      "y": 30,
      "x": 271.75
    },
    {
      "y": 30,
      "x": 92.62
    },
    {
      "y": 40,
      "x": 268.3
    },
    {
      "y": 40,
      "x": 222.01
    },
    {
      "y": 40,
      "x": 260.7
    },
    {
      "y": 30,
      "x": 261.25
    },
    {
      "y": 30,
      "x": 275.62
    },
    {
      "y": -40,
      "x": 83.79
    },
    {
      "y": 40,
      "x": 264.8
    },
    {
      "y": 30,
      "x": 22.48
    },
    {
      "y": 40,
      "x": 273.59
    },
    {
      "y": 40,
      "x": 85.07
    },
    {
      "y": 30,
      "x": 28.37
    },
    {
      "y": 30,
      "x": 267.74
    },
    {
      "y": 30,
      "x": 90.64
    },
    {
      "y": 30,
      "x": 272.86
    },
    {
      "y": 40,
      "x": 95.8
    },
    {
      "y": 40,
      "x": 212.61
    },
    {
      "y": 40,
      "x": 275.99
    },
    {
      "y": 40,
      "x": 275.85
    },
    {
      "y": 40,
      "x": 21.37
    },
    {
      "y": 40,
      "x": 88.43
    },
    {
      "y": 40,
      "x": 90.83
    },
    {
      "y": 40,
      "x": 204.87
    },
    {
      "y": 40,
      "x": 92.44
    },
    {
      "y": 40,
      "x": 47.53
    },
    {
      "y": -40,
      "x": 259.59
    },
    {
      "y": 40,
      "x": 240.12
    },
    {
      "y": 30,
      "x": 79.77
    },
    {
      "y": 30,
      "x": 258.49
    },
    {
      "y": 40,
      "x": 267.33
    },
    {
      "y": 40,
      "x": 263.28
    },
    {
      "y": 30,
      "x": 22.85
    },
    {
      "y": 40,
      "x": 271.93
    },
    {
      "y": 30,
      "x": 94.51
    },
    {
      "y": -40,
      "x": 275.25
    },
    {
      "y": 50,
      "x": 264.38
    },
    {
      "y": 30,
      "x": 47.53
    },
    {
      "y": 30,
      "x": 94.33
    },
    {
      "y": 40,
      "x": 190.87
    },
    {
      "y": 30,
      "x": 92.67
    },
    {
      "y": 30,
      "x": 68.17
    },
    {
      "y": -40,
      "x": 97.83
    },
    {
      "y": 40,
      "x": 44.22
    },
    {
      "y": -40,
      "x": 76.05
    },
    {
      "y": 40,
      "x": 90.41
    },
    {
      "y": 30,
      "x": 204.4
    },
    {
      "y": 40,
      "x": 276.36
    },
    {
      "y": -40,
      "x": 264.06
    },
    {
      "y": 30,
      "x": 18.79
    },
    {
      "y": 30,
      "x": 85.12
    },
    {
      "y": 40,
      "x": 79.18
    },
    {
      "y": 40,
      "x": 231.77
    },
    {
      "y": 30,
      "x": 276.72
    },
    {
      "y": 30,
      "x": 93.54
    },
    {
      "y": 40,
      "x": 94.88
    },
    {
      "y": 30,
      "x": 80.7
    },
    {
      "y": 30,
      "x": 89.72
    },
    {
      "y": 30,
      "x": 267.14
    },
    {
      "y": 30,
      "x": 28.37
    },
    {
      "y": 30,
      "x": 274.88
    },
    {
      "y": 30,
      "x": 79.92
    },
    {
      "y": 40,
      "x": 82.72
    },
    {
      "y": 40,
      "x": 89.91
    },
    {
      "y": 30,
      "x": 261.25
    },
    {
      "y": 30,
      "x": 261.99
    },
    {
      "y": 30,
      "x": 42.93
    },
    {
      "y": 40,
      "x": 261.8
    },
    {
      "y": 30,
      "x": 277.32
    },
    {
      "y": 40,
      "x": 23.58
    },
    {
      "y": -30,
      "x": 84.75
    },
    {
      "y": 30,
      "x": 195.66
    },
    {
      "y": 30,
      "x": 276.17
    },
    {
      "y": 40,
      "x": 88.76
    },
    {
      "y": 40,
      "x": 216.92
    },
    {
      "y": 40,
      "x": 226.13
    },
    {
      "y": 30,
      "x": 243.25
    },
    {
      "y": 30,
      "x": 85.67
    },
    {
      "y": 30,
      "x": 262.35
    },
    {
      "y": 40,
      "x": 84.56
    },
    {
      "y": 40,
      "x": 43.64
    },
    {
      "y": 40,
      "x": 95.39
    },
    {
      "y": 30,
      "x": 22.28
    },
    {
      "y": 40,
      "x": 276.77
    },
    {
      "y": 30,
      "x": 44.59
    },
    {
      "y": 40,
      "x": 83.83
    },
    {
      "y": 40,
      "x": 203.58
    },
    {
      "y": -30,
      "x": 236.81
    },
    {
      "y": 30,
      "x": 59.32
    },
    {
      "y": 30,
      "x": 83.83
    },
    {
      "y": 30,
      "x": 94.28
    },
    {
      "y": 40,
      "x": 80.88
    },
    {
      "y": 40,
      "x": 17.5
    },
    {
      "y": 40,
      "x": 191.42
    },
    {
      "y": 30,
      "x": 48.27
    },
    {
      "y": 30,
      "x": 268.07
    },
    {
      "y": 30,
      "x": 271.57
    },
    {
      "y": 30,
      "x": 97.46
    },
    {
      "y": 30,
      "x": 86.59
    },
    {
      "y": 40,
      "x": 85.44
    },
    {
      "y": 30,
      "x": 96.36
    },
    {
      "y": 30,
      "x": 196.4
    },
    {
      "y": 30,
      "x": 270.09
    },
    {
      "y": 40,
      "x": 273.04
    },
    {
      "y": 30,
      "x": 25.61
    },
    {
      "y": 40,
      "x": 70.01
    },
    {
      "y": 30,
      "x": 273.96
    },
    {
      "y": 40,
      "x": 81.39
    },
    {
      "y": 40,
      "x": 267.74
    },
    {
      "y": 40,
      "x": 95.62
    },
    {
      "y": 40,
      "x": 271.43
    },
    {
      "y": 30,
      "x": 275.85
    },
    {
      "y": -30,
      "x": 82.72
    },
    {
      "y": 40,
      "x": 30.58
    },
    {
      "y": 30,
      "x": 206.06
    },
    {
      "y": 40,
      "x": 266.27
    },
    {
      "y": 40,
      "x": 91.57
    },
    {
      "y": 30,
      "x": 222.19
    },
    {
      "y": 40,
      "x": 270.64
    },
    {
      "y": 30,
      "x": 45.88
    },
    {
      "y": -40,
      "x": 85.3
    },
    {
      "y": -30,
      "x": 92.3
    },
    {
      "y": 30,
      "x": 95.2
    },
    {
      "y": 40,
      "x": 198.69
    },
    {
      "y": 40,
      "x": 268.48
    },
    {
      "y": 40,
      "x": 86.41
    },
    {
      "y": 40,
      "x": 88.99
    },
    {
      "y": 30,
      "x": 188.38
    },
    {
      "y": 30,
      "x": 29.66
    },
    {
      "y": 40,
      "x": 79.92
    },
    {
      "y": 30,
      "x": 90.83
    },
    {
      "y": 40,
      "x": 87.7
    },
    {
      "y": 40,
      "x": 94.33
    },
    {
      "y": 30,
      "x": 96.72
    },
    {
      "y": 40,
      "x": 274.01
    },
    {
      "y": 30,
      "x": 78.63
    },
    {
      "y": 30,
      "x": 97.41
    },
    {
      "y": 40,
      "x": 71.3
    },
    {
      "y": 40,
      "x": 226.31
    },
    {
      "y": 40,
      "x": 259.41
    },
    {
      "y": 40,
      "x": 97.04
    },
    {
      "y": 40,
      "x": 97.6
    },
    {
      "y": 40,
      "x": 204.03
    },
    {
      "y": 40,
      "x": 93.78
    },
    {
      "y": 40,
      "x": 191.05
    },
    {
      "y": 40,
      "x": 192.25
    },
    {
      "y": 40,
      "x": 80.14
    },
    {
      "y": 30,
      "x": 88.62
    },
    {
      "y": 30,
      "x": 262.35
    },
    {
      "y": 30,
      "x": 274.88
    },
    {
      "y": 30,
      "x": 89.91
    },
    {
      "y": 30,
      "x": 96.91
    },
    {
      "y": 30,
      "x": 92.62
    },
    {
      "y": 30,
      "x": 219.13
    },
    {
      "y": 30,
      "x": 267.38
    },
    {
      "y": 30,
      "x": 97.65
    },
    {
      "y": 40,
      "x": 271.75
    },
    {
      "y": 30,
      "x": 49.53
    },
    {
      "y": 30,
      "x": 94.88
    },
    {
      "y": 40,
      "x": 95.44
    },
    {
      "y": 40,
      "x": 45.67
    },
    {
      "y": 30,
      "x": 82.13
    },
    {
      "y": 40,
      "x": 236.62
    },
    {
      "y": 30,
      "x": 96.91
    },
    {
      "y": 30,
      "x": 266.46
    },
    {
      "y": 30,
      "x": 20.99
    },
    {
      "y": 40,
      "x": 81.94
    },
    {
      "y": 30,
      "x": 95.62
    },
    {
      "y": -30,
      "x": 93.18
    },
    {
      "y": 40,
      "x": 54.35
    },
    {
      "y": 40,
      "x": 267.19
    },
    {
      "y": 40,
      "x": 244.11
    },
    {
      "y": 40,
      "x": 18.97
    },
    {
      "y": 30,
      "x": 93.22
    },
    {
      "y": 40,
      "x": 273.59
    },
    {
      "y": 30,
      "x": 92.07
    },
    {
      "y": -40,
      "x": 92.26
    },
    {
      "y": 30,
      "x": 199.06
    },
    {
      "y": 30,
      "x": 272.16
    },
    {
      "y": 30,
      "x": 215.01
    },
    {
      "y": 40,
      "x": 87.14
    },
    {
      "y": 30,
      "x": 95.39
    },
    {
      "y": 40,
      "x": 260.88
    },
    {
      "y": 30,
      "x": 85.12
    },
    {
      "y": 40,
      "x": 91.38
    },
    {
      "y": 30,
      "x": 89.31
    },
    {
      "y": 40,
      "x": 79
    },
    {
      "y": 30,
      "x": 266.09
    },
    {
      "y": 40,
      "x": 196.21
    },
    {
      "y": 40,
      "x": 271.01
    },
    {
      "y": 40,
      "x": 91.52
    },
    {
      "y": 30,
      "x": 274.51
    },
    {
      "y": 40,
      "x": 241.96
    },
    {
      "y": 40,
      "x": 90.64
    },
    {
      "y": 30,
      "x": 203.11
    },
    {
      "y": 30,
      "x": 275.99
    },
    {
      "y": 40,
      "x": 95.57
    },
    {
      "y": 40,
      "x": 32.43
    },
    {
      "y": 30,
      "x": 92.86
    },
    {
      "y": 30,
      "x": 98.38
    },
    {
      "y": 40,
      "x": 229.26
    },
    {
      "y": 30,
      "x": 19.16
    },
    {
      "y": 30,
      "x": 220.72
    },
    {
      "y": 40,
      "x": 80.7
    },
    {
      "y": 40,
      "x": 95.62
    },
    {
      "y": -40,
      "x": 84.38
    },
    {
      "y": 30,
      "x": 64.48
    },
    {
      "y": 30,
      "x": 268.66
    },
    {
      "y": 40,
      "x": 271.75
    },
    {
      "y": 30,
      "x": 17.68
    },
    {
      "y": 40,
      "x": 95.44
    },
    {
      "y": 40,
      "x": 214.82
    },
    {
      "y": 40,
      "x": 88.94
    },
    {
      "y": 40,
      "x": 86.18
    },
    {
      "y": 30,
      "x": 89.17
    },
    {
      "y": 40,
      "x": 95.62
    },
    {
      "y": 40,
      "x": 275.44
    },
    {
      "y": 30,
      "x": 90.64
    },
    {
      "y": 30,
      "x": 261.48
    },
    {
      "y": 40,
      "x": 261.3
    },
    {
      "y": 30,
      "x": 276.72
    },
    {
      "y": 40,
      "x": 220.05
    },
    {
      "y": 40,
      "x": 86.41
    },
    {
      "y": 40,
      "x": 276.58
    },
    {
      "y": 40,
      "x": 82.91
    },
    {
      "y": 40,
      "x": 269.22
    },
    {
      "y": 40,
      "x": 273.82
    },
    {
      "y": 30,
      "x": 83.6
    },
    {
      "y": 30,
      "x": 188.01
    },
    {
      "y": 30,
      "x": 78.67
    },
    {
      "y": -30,
      "x": 93.78
    },
    {
      "y": 30,
      "x": 262.17
    },
    {
      "y": 40,
      "x": 57.3
    },
    {
      "y": 40,
      "x": 95.99
    },
    {
      "y": -30,
      "x": 45.67
    },
    {
      "y": 30,
      "x": 86.59
    },
    {
      "y": 40,
      "x": 203.58
    },
    {
      "y": 30,
      "x": 79.37
    },
    {
      "y": 30,
      "x": 249.7
    },
    {
      "y": -30,
      "x": 89.54
    },
    {
      "y": 40,
      "x": 270.46
    },
    {
      "y": -30,
      "x": 93.18
    },
    {
      "y": 30,
      "x": 275.25
    },
    {
      "y": 40,
      "x": 94.7
    },
    {
      "y": 30,
      "x": 272.12
    },
    {
      "y": 30,
      "x": 270.32
    },
    {
      "y": 30,
      "x": 262.22
    },
    {
      "y": 30,
      "x": 50.48
    },
    {
      "y": 40,
      "x": 224.59
    },
    {
      "y": 40,
      "x": 260.88
    },
    {
      "y": 40,
      "x": 97.65
    },
    {
      "y": 30,
      "x": 55.43
    },
    {
      "y": 40,
      "x": 261.62
    },
    {
      "y": 30,
      "x": 268.8
    },
    {
      "y": 30,
      "x": 201.82
    },
    {
      "y": 40,
      "x": 188.38
    },
    {
      "y": 30,
      "x": 231.84
    },
    {
      "y": 30,
      "x": 262.96
    },
    {
      "y": -30,
      "x": 83.28
    },
    {
      "y": 40,
      "x": 81.39
    },
    {
      "y": 40,
      "x": 91.57
    },
    {
      "y": 40,
      "x": 268.85
    },
    {
      "y": 40,
      "x": 262.35
    },
    {
      "y": 30,
      "x": 36.83
    },
    {
      "y": 30,
      "x": 23.58
    },
    {
      "y": 40,
      "x": 188.84
    },
    {
      "y": 40,
      "x": 91.34
    },
    {
      "y": 40,
      "x": 90.41
    },
    {
      "y": 30,
      "x": 96.49
    },
    {
      "y": 40,
      "x": 47.69
    },
    {
      "y": 30,
      "x": 95.94
    },
    {
      "y": 30,
      "x": 93.18
    },
    {
      "y": 30,
      "x": 23.21
    },
    {
      "y": 30,
      "x": 80.7
    },
    {
      "y": 40,
      "x": 93.59
    },
    {
      "y": -30,
      "x": 259.64
    },
    {
      "y": 30,
      "x": 47.16
    },
    {
      "y": 40,
      "x": 10.32
    },
    {
      "y": 30,
      "x": 70.38
    },
    {
      "y": 30,
      "x": 42.54
    },
    {
      "y": 40,
      "x": 273.78
    },
    {
      "y": 40,
      "x": 276.54
    },
    {
      "y": 40,
      "x": 81.39
    },
    {
      "y": 30,
      "x": 195.66
    },
    {
      "y": 40,
      "x": 251.3
    },
    {
      "y": 30,
      "x": 265.85
    },
    {
      "y": 30,
      "x": 50.82
    },
    {
      "y": 40,
      "x": 234.72
    },
    {
      "y": 30,
      "x": 78.26
    },
    {
      "y": 40,
      "x": 80.84
    },
    {
      "y": 30,
      "x": 8.47
    },
    {
      "y": 30,
      "x": 53.98
    },
    {
      "y": 40,
      "x": 222.37
    },
    {
      "y": -40,
      "x": 95.8
    },
    {
      "y": 40,
      "x": 231.22
    },
    {
      "y": -30,
      "x": 92.99
    },
    {
      "y": -30,
      "x": 87.65
    },
    {
      "y": 30,
      "x": 232.57
    },
    {
      "y": 40,
      "x": 17.13
    },
    {
      "y": -30,
      "x": 261.48
    },
    {
      "y": 40,
      "x": 90.23
    },
    {
      "y": 30,
      "x": 202.93
    },
    {
      "y": 30,
      "x": 276.58
    },
    {
      "y": 40,
      "x": 197.5
    },
    {
      "y": -30,
      "x": 67.98
    },
    {
      "y": 30,
      "x": 87.7
    },
    {
      "y": 30,
      "x": 201.19
    },
    {
      "y": 30,
      "x": 190.4
    },
    {
      "y": 30,
      "x": 220.53
    },
    {
      "y": 40,
      "x": 83.42
    },
    {
      "y": 30,
      "x": 277.14
    },
    {
      "y": 30,
      "x": 84.2
    },
    {
      "y": 30,
      "x": 91.89
    },
    {
      "y": 30,
      "x": 97.04
    },
    {
      "y": 30,
      "x": 94.15
    },
    {
      "y": 40,
      "x": 88.94
    },
    {
      "y": 40,
      "x": 96.86
    },
    {
      "y": 40,
      "x": 51.74
    },
    {
      "y": 30,
      "x": 95.94
    },
    {
      "y": 40,
      "x": 94.15
    },
    {
      "y": 40,
      "x": 82.54
    },
    {
      "y": 30,
      "x": 93.41
    },
    {
      "y": 40,
      "x": 274.74
    },
    {
      "y": 30,
      "x": 216.18
    },
    {
      "y": 40,
      "x": 250.99
    },
    {
      "y": 30,
      "x": 96.68
    },
    {
      "y": 30,
      "x": 94.1
    },
    {
      "y": 40,
      "x": 189.76
    },
    {
      "y": 30,
      "x": 275.62
    },
    {
      "y": 30,
      "x": 275.66
    },
    {
      "y": 40,
      "x": 56.53
    },
    {
      "y": 40,
      "x": 273.41
    },
    {
      "y": 30,
      "x": 39.59
    },
    {
      "y": 30,
      "x": 96.54
    },
    {
      "y": 40,
      "x": 72.74
    },
    {
      "y": 30,
      "x": 88.02
    },
    {
      "y": 40,
      "x": 84.71
    },
    {
      "y": 40,
      "x": 277.14
    }
  ];

  const drawPoint = (p5, x, y) => {
    p5.line(x - 4, y, x + 4, y);
    p5.line(x, y - 4, x, y + 4);
  }

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(canvasParentRef.offsetWidth, 500).parent(canvasParentRef);
    const value = ['mV', ' 30', ' 20', ' 10', '   0', '-10', '-20', '-30', '-40'];
    const posX = 30;
    const posY = 45;
    const zoomHeight = 50;
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
    p5.strokeWeight(1)
    value.forEach((item, index) => {
      p5.line(posX, posY + index * zoomHeight, posX + w + 50, posY + index * zoomHeight);
    })

    // draw points
    p5.strokeWeight(4)
    p5.stroke('#ff577d')
    cluster2.forEach(item => {
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