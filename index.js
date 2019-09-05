const csv = require("csvtojson");
const csvFilePath = "./IPL-dataset/matches.csv";
const matchesWonPerTeamPerYear=require('./ipl/matchesWonPerTeamPerYear.js')
csv()
  .fromFile(csvFilePath)
  .then(matches => {
    /*Second Function*/
   let matchesWonPerTeamPerYearResult= matchesWonPerTeamPerYear(matches);
  //  console.log(matchesWonPerTeamPerYearResult);

   console.log(matches);
  });

