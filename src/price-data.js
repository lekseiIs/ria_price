export const priceChartData = {
  type: 'line',
  data: {
    labels: ['Січень', 'Лютий', 'Березень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень'],
    datasets: [{
      label: 'Прогнозна зміна вартості авто',
      data: [5000, 5200, 4900, 5150, 4800, 4700, 4820, 4600],
      backgroundColor: 'rgba(54,73,93,.5)',
      borderColor: '#36495d',
      borderWidth: 3,
    },

    ],
  },
  options: {
    responsive: true,
    lineTension: 1,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          padding: 25,
        },
      }],
    },
  },
};

export default priceChartData;
