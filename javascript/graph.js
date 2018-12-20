let dataMod = [];
function drawChart() {
  // Define the chart to be drawn.
  var data = new google.visualization.DataTable();
  data.addColumn("string", "Date");
  data.addColumn("number", "sys");
  data.addColumn("number", "dia");
  data.addColumn("number", "sys 135");
  data.addColumn("number", "dia 90");

  // chargement données personnelles
  data.addRows(dataMod);
  
  // Set chart options
  var options = {
    title: "Tension sys/dia",
    width: 700,
    height: 600,
    seriesType: "line",
    series: {
      2: {
        type: "steppedArea",
        color: "yellow",
        visibleInLegend: false,
        areaOpacity: 0
      },
      3: {
        type: "steppedArea",
        color: "yellow",
        visibleInLegend: false,
        areaOpacity: 0
      }
    }
  };
  

  // Instantiate and draw the chart.
  var chart = new google.visualization.LineChart(
    document.getElementById("graph")
  );
  chart.draw(data, options);
}