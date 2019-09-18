function fetchAndVisualizeData() {
  fetch("./data.json")
    .then(r => r.json())
    .then(data => {
      visualizeData1(data.matchesPerYear);

      visualizeData2(data.matchesWonPerTeamPerYear);

      visualizeData3(data.extraRunsConceeded);

      visualizeData4(data.top10EcoBowlers);
    });
}

function visualizeData1(data) {
  Highcharts.chart("container1", {
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
      crosshair: true,
      title: {
        text: "Years"
      }
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
    series: [
      {
        names: "matches played per season",
        data: Object.values(data)
      }
    ]
  });
}

function correctingFormat(data) {
  var c = 0;
  var years = [];
  var newData = {};
  Object.entries(data).forEach(([key, val]) => {
    c++;
    Object.entries(val).forEach(([team, wins]) => {
      if (typeof newData[team] == "undefined") {
        newData[team] = [];
        for (var i = 1; i < c; i++) newData[team].push(0);
        newData[team].push(wins);
      } else {
        newData[team].push(wins);
      }
    });
  });

  var arrayForm = [];
  Object.entries(newData).forEach(([team, wins]) => {
    let finalData = {};
    finalData["name"] = team;
    finalData["data"] = wins;
    arrayForm.push(finalData);
  });
  return arrayForm;
}

function visualizeData2(data) {
  Highcharts.chart("container2", {
    chart: {
      type: "column"
    },
    title: {
      text: "Matches Won Per Team Per Year"
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
        text: "No. Of Matches"
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
    series: correctingFormat(data)
  });
}

function visualizeData3(data) {
  Highcharts.chart("container3", {
    chart: {
      type: "column"
    },
    title: {
      text: "Extra Runs Conceeded"
    },
    subtitle: {
      text: ""
    },
    xAxis: {
      categories: Object.keys(data),
      crosshair: true,
      title: {
        text: "Names"
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: "Runs"
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
    series: [
      {
        names: "matches played per season",
        data: Object.values(data)
      }
    ]
  });
}

function visualizeData4(data) {
  Highcharts.chart("container4", {
    chart: {
      type: "column"
    },
    title: {
      text: "Economic Rate of Bowlers"
    },
    subtitle: {
      text: ""
    },
    xAxis: {
      categories: Object.keys(data),
      crosshair: true,
      title: {
        text: "Player Names"
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: "Run Rates"
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
    series: [
      {
        names: "matches played per season",
        data: Object.values(data)
      }
    ]
  });
}

fetchAndVisualizeData();
