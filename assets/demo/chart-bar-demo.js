// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

var ctx = document.getElementById("myBarChart").getContext('2d');



var background_1 = ctx.createLinearGradient(0, 0, 0, 300);
background_1.addColorStop(0, 'red');
background_1.addColorStop(1, 'blue');

// Bar Chart Example
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Fridge", "Aircon (Bedroom)", "Aircon (Livingroom)", "Computer", "Stove", "Oven"],
    datasets: [{
      label: "Revenue",
      backgroundColor: background_1,
      data: [25.62, 35.13, 19.93, 5.38, 12.15, 8.09, 12.52],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 40,
          maxTicksLimit: 10
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
