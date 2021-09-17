const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "02",
      "04",
      "06",
      "08",
      "10",
      "12",
      "14",
      "16",
      "18",
      "20",
      "22",
      "24",
      "26",
      "28",
      "30",
      "32",
      "34",
      "36",
    ],
    datasets: [
      {
        labels: " ",
        data: [
          90000, 84000, 50000, 60100, 78880, 84420, 84000, 78490, 97880, 79440,
          60100, 99110, 78190, 54030, 45150, 84420, 64420, 79740,
        ],
        backgroundColor: [
          "rgba(56, 201, 118, 1)",
          "rgba(56, 201, 118, 1)",
          "rgba(56, 201, 118, 1)",
          "rgba(56, 201, 118, 1)",
          "rgba(56, 201, 118, 1)",
          "rgba(56, 201, 118, 1)",
          "rgba(56, 201, 118, 1)",
          "rgba(56, 201, 118, 1)",
          "rgba(56, 201, 118, 1)",
          "rgba(56, 201, 118, 1)",
          "rgba(56, 201, 118, 1)",
          "rgba(56, 201, 118, 1)",
          "rgba(56, 201, 118, 1)",
          "rgba(56, 201, 118, 1)",
          "rgba(56, 201, 118, 1)",
          "rgba(56, 201, 118, 1)",
          "rgba(56, 201, 118, 1)",
          "rgba(56, 201, 118, 1)",
        ],
        borderColor: [],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: false,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontSize: 11,
            min: 20000,
            max: 100000,
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            fontSize: 11,
          },
        },
      ],
    },
  },
});

new Chart(document.getElementById("management_chart2"), {
  type: "doughnut",
  data: {
    labels: [],
    datasets: [
      {
        label: "Population (millions)",
        backgroundColor: [
          "rgba(0, 87, 189, 1)",
          "rgba(0, 189, 178, 1)",
          "rgba(254, 194, 41, 1",
          "rgba(196, 196, 196, 1)",
          "rgba(189, 91, 0, 1)",
        ],
        borderColor: [
          "rgba(0, 87, 189, 1)",
          "rgba(0, 189, 178, 1)",
          "rgba(254, 194, 41, 1",
          "rgba(196, 196, 196, 1)",
          "rgba(189, 91, 0, 1)",
        ],
        data: [700, 1000, 1000, 704, 1000],
        borderWidth: 1,
      },
    ],
  },
  donut: {
    title: "Iris Petal Width",
  },
  options: {
    plugins: {
      legend: false,
    },
    responsive: false,
    cutoutPercentage: 80,
  },
});
