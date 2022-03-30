// export const priceChartData = (labelsData, numsData) => ({
//   type: 'line',
//   data: {
//     labels: labelsData,
//     datasets: [
//       {
//         label: 'Прогнозна зміна вартості авто',
//         data: numsData,
//         backgroundColor: 'rgba(33, 155, 231, .5)',
//         borderColor: 'rgba(219, 92, 76, 0.5)',
//         borderWidth: 3,
//       },
//     ],
//   },
//   options: {
//     responsive: true,
//     lineTension: 1,
//     scales: {
//       yAxes: [
//         {
//           ticks: {
//             beginAtZero: true,
//             padding: 25,
//           },
//         },
//       ],
//     },
//   },
// });

import animation from './animation';

export const priceChartData = (labelsData, numsData) => ({
  type: 'line',
  data: {
    labels: labelsData,
    datasets: [
      {
        data: numsData,
        borderColor: 'rgba(219, 92, 76, 0.5)',
        borderWidth: 1,
        radius: 0,
      },
    ],
  },
  options: {
    animation,
    interaction: {
      intersect: false,
    },
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        type: 'linear',
      },
    },
  },
});

export default priceChartData;
