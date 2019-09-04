const csv = require("csvtojson");
const csvFilePath = "./IPL-dataset/matches.csv";
csv()
  .fromFile(csvFilePath)
  .then(matches => {
    /*Second Function*/
    matchesWonPerTeamPerYear(matches);
  });
