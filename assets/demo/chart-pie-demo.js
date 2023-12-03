// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");

var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Fridge", "Aircon (Bedroom)", "Aircon (Livingroom)", "Computer", "Stove", "Oven", "Boiler", "Freezer"],
    datasets: [{
      data: [11.6, 3.3, 0.7, 7.0, 10.4, 13.5, 23.2, 30.3],
      backgroundColor: ['#c69545','#dc3545', '#aa1345','#ffc107', '#28a745', '#fff345', '#ddc345', '#aac345'],
    }],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
  }
});
