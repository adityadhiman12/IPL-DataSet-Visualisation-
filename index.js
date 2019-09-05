const csv = require("csvtojson");
var fs = require("file-system");
const csvFilePath = "./IPL-dataset/matches.csv";
const csvFilePath_2 = "./IPL-dataset/deliveries.csv";
const matchesPerYear = require("./ipl/matchesPerYear.js");
const matchesWonPerTeamPerYear = require("./ipl/matchesWonPerTeamPerYear.js");
const extaRunsConceeded = require("./ipl/ExtraRunsConceeded.js");

csv()
  .fromFile(csvFilePath)
  .then(matches => {
    /*First Function*/
    let matchesPerYearResult = matchesPerYear(matches);
    /*Second Function*/
    let matchesWonPerTeamPerYearResult = matchesWonPerTeamPerYear(matches);

    // console.log(matchesPerYearResult);
    // console.log(matchesWonPerTeamPerYearResult);
    /*Third Function*/
    csv()
      .fromFile(csvFilePath_2)
      .then(deliveries => {
        let extaRunsConceededResult = extaRunsConceeded(matches, deliveries);
        console.log(extaRunsConceededResult);
      });
  });

// fs.writeFileSync("./public/data.json", JSON.stringify(matchesPerYearResult));

// var finalResult = {
//   MatchesPerYear: matchesPerYearResult
// };
// module.exports = finalResult;
