const csv = require("csvtojson");
var fs = require('file-system');
const csvFilePath = "./IPL-dataset/matches.csv";
const csvFilePath_2 = "./IPL-dataset/deliveries.csv";
const matchesPerYear = require("./ipl/matchesPerYear");

csv()
  .fromFile(csvFilePath)
  .then(matches => {
    /*First Function*/
    let matchesPerYearResult = matchesPerYear(matches);
    console.log(matchesPerYearResult);

    fs.writeFileSync("./public/data.json",JSON.stringify(matchesPerYearResult));
    // var finalResult = {
    //   MatchesPerYear: matchesPerYearResult
    // };
  });

// module.exports = finalResult;
