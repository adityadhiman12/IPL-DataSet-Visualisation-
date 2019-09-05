const csv = require("csvtojson");
var fs = require("file-system");
const csvFilePath = "./IPL-dataset/matches.csv";
const csvFilePath_2 = "./IPL-dataset/deliveries.csv";
const matchesPerYear = require("./ipl/matchesPerYear.js");
const matchesWonPerTeamPerYear = require("./ipl/matchesWonPerTeamPerYear.js");
const extraRunsConceeded = require("./ipl/extraRunsConceeded.js");
const top10EcoBowlers=require("./ipl/top10EcoBowlers.js");


csv()
  .fromFile(csvFilePath)
  .then(matches => {
    /*First Function*/
    // let matchesPerYearResult = matchesPerYear(matches);
    // console.log(matchesPerYearResult);
    
    /*Second Function*/
    // let matchesWonPerTeamPerYearResult = matchesWonPerTeamPerYear(matches);
    // console.log(matchesWonPerTeamPerYearResult);

    /*Third Function*/
    csv()
      .fromFile(csvFilePath_2)
      .then(deliveries => {
        let extraRunsConceededResult = extraRunsConceeded(matches, deliveries);
        // console.log(extraRunsConceededResult);
        // console.log(deliveries);
        let top10EcoBowlersResult=top10EcoBowlers(matches,deliveries);
        console.log(top10EcoBowlersResult);
      });
  });

// fs.writeFileSync("./public/data.json", JSON.stringify(matchesPerYearResult));

// var finalResult = {
//   MatchesPerYear: matchesPerYearResult
// };
// module.exports = finalResult;
