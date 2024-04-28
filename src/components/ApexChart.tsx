'use client'

import styles from '@/app/page.module.css';
import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
import ApexCharts from 'apexcharts';

interface ChartData {
  x: number; // Assuming timestamp format
  y: [number, number, number, number]; // Open, High, Low, Close
}

interface ApexChartProps {
  seriesData: ChartData[];
  seriesDataLinear: ChartData[]; 
}

// // Placeholder Data
// const seriesData = [
//   { x: new Date(1648771200000).getTime(), y: [20, 25, 18, 22] },
//   { x: new Date(1648857600000).getTime(), y: [23, 28, 21, 26] },
//   { x: new Date(1648944000000).getTime(), y: [25, 30, 23, 28] },
//   { x: new Date(1649030400000).getTime(), y: [20, 26, 16, 23] },
// ];

// const seriesDataLinear = [
//   { x: new Date(1648771200000).getTime(), y: 45000 },
//   { x: new Date(1648857600000).getTime(), y: 68000 },
//   { x: new Date(1648944000000).getTime(), y: 52000 },
//   { x: new Date(1649030400000).getTime(), y: 40000 },
// ];


// var options = {
//   series: [{
//   data: seriesData
// }],
//   chart: {
//   type: 'candlestick',
//   height: 290,
//   id: 'candles',
//   toolbar: {
//     autoSelected: 'pan',
//     show: false
//   },
//   zoom: {
//     enabled: false
//   },
// },
// plotOptions: {
//   candlestick: {
//     colors: {
//       upward: '#3C90EB',
//       downward: '#DF7D46'
//     }
//   }
// },
// xaxis: {
//   type: 'datetime'
// }
// };

// var chart = new ApexCharts(document.querySelector("#chart-candlestick"), options);
// chart.render();

// var optionsBar = {
//   series: [{
//   name: 'volume',
//   data: seriesDataLinear
// }],
//   chart: {
//   height: 160,
//   type: 'bar',
//   brush: {
//     enabled: true,
//     target: 'candles'
//   },
//   selection: {
//     enabled: true,
//     xaxis: {
//       min: new Date('20 Jan 2017').getTime(),
//       max: new Date('10 Dec 2017').getTime()
//     },
//     fill: {
//       color: '#ccc',
//       opacity: 0.4
//     },
//     stroke: {
//       color: '#0D47A1',
//     }
//   },
// },
// dataLabels: {
//   enabled: false
// },
// plotOptions: {
//   bar: {
//     columnWidth: '80%',
//     colors: {
//       ranges: [{
//         from: -1000,
//         to: 0,
//         color: '#F15B46'
//       }, {
//         from: 1,
//         to: 10000,
//         color: '#FEB019'
//       }],

//     },
//   }
// },
// stroke: {
//   width: 0
// },
// xaxis: {
//   type: 'datetime',
//   axisBorder: {
//     offsetX: 13
//   }
// },
// yaxis: {
//   labels: {
//     show: false
//   }
// }
// };

// var chartBar = new ApexCharts(document.querySelector("#chart-bar"), optionsBar);
// chartBar.render();

const ApexChart = () => {
    useEffect(() => {
      // You now have access to `window`
      console.log(window.innerHeight);
      // Placeholder Data
const seriesData = [
  { x: new Date(1648771200000).getTime(), y: [20, 25, 18, 22] },
  { x: new Date(1648857600000).getTime(), y: [23, 28, 21, 26] },
  { x: new Date(1648944000000).getTime(), y: [25, 30, 23, 28] },
  { x: new Date(1649030400000).getTime(), y: [20, 26, 16, 23] },
];

const seriesDataLinear = [
  { x: new Date(1648771200000).getTime(), y: 45000 },
  { x: new Date(1648857600000).getTime(), y: 68000 },
  { x: new Date(1648944000000).getTime(), y: 52000 },
  { x: new Date(1649030400000).getTime(), y: 40000 },
];


var options = {
  series: [{
  data: seriesData
}],
  chart: {
  type: 'candlestick',
  height: 500,
  width: 500,
  id: 'candles',
  toolbar: {
    autoSelected: 'pan',
    show: false
  },
  zoom: {
    enabled: false
  },
},
plotOptions: {
  candlestick: {
    colors: {
      upward: '#3C90EB',
      downward: '#DF7D46'
    }
  }
},
xaxis: {
  type: 'datetime'
}
};



var optionsBar = {
  chart: {
    type: 'bar',
    height: 500, 
    width: 500,
  },
  series: [
    {
      name: 'sales',
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
    }
  ],
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
  }
}



if (document.querySelector("#chart-candlestick") && document.querySelector("#chart-bar")) {
  var chart = new ApexCharts(document.querySelector("#chart-candlestick"), options);
  chart.render();
  var chartBar = new ApexCharts(document.querySelector('#chart-bar'), optionsBar)
chartBar.render();
}
return () => {
  if (chart && chartBar) {
    chart.destroy();
    chartBar.destroy();
  }
};
      
    }, []);
   
    
  return (

    <div className={styles.grid}>
      <div className="margin-30">
    <div className="" id="chart-candlestick"></div>
    </div>
    <div className="" id="chart-bar"></div></div>
  );
 }
 export default ApexChart;