export const priceChartData = (labelsData, numsData) => ({
  type: 'line',
  data: {
    labels: labelsData,
    datasets: [
      {
        label: 'Прогнозна зміна вартості авто',
        data: numsData,
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
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            padding: 25,
          },
        },
      ],
    },
  },
});

export default priceChartData;
