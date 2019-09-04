function fetchAndVisualizeData() {
    fetch('./data.json')
    .then(r => r.json())
    .then(data => {
        visualizeData(data);
    })
}

function visualizeData(data) {
    Highcharts.chart("container", {
      chart: {
        type: "column"
      },
      title: {
        text: "Matches Per Year"
      },
      subtitle: {
        text: ""
      },
      xAxis: {
        categories: Object.keys(data),
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          text: "No. of matches per year"
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat:
          '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: "</table>",
        shared: true,
        useHTML: true
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      series: [{
          names:"matches played per season",
          data:Object.values(data)
      }]
    });
}

fetchAndVisualizeData();