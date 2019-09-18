const csv = require("csvtojson");
var fs = require("file-system");
const csvFilePath = "./IPL-dataset/matches.csv";
const csvFilePath_2 = "./IPL-dataset/deliveries.csv";
const matchesPerYear = require("./ipl/matchesPerYear.js");
const matchesWonPerTeamPerYear = require("./ipl/matchesWonPerTeamPerYear.js");
const extraRunsConceeded = require("./ipl/extraRunsConceeded.js");
const top10EcoBowlers = require("./ipl/top10EcoBowlers.js");
const venueIPL = require("./ipl/venueIPL.js");
const most50s=require("./ipl/most50s.js");
const most100s=require("./ipl/most100s.js");
const dotBalls=require("./ipl/dotBalls.js");
const hattrick=require("./ipl/hattrick.js");
csv()
  .fromFile(csvFilePath)
  .then(matches => {
    /*First Function*/
    let matchesPerYearResult = matchesPerYear(matches);
    // console.log(matchesPerYearResult);

    /*Second Function*/
    let matchesWonPerTeamPerYearResult = matchesWonPerTeamPerYear(matches);
    // console.log(matchesWonPerTeamPerYearResult);

    /*Extra function 1*/
    let venueIPLResult = venueIPL(matches);
    // console.log(venueIPLResult);

    /*Third Function*/
    csv()
      .fromFile(csvFilePath_2)
      .then(deliveries => {
        let extraRunsConceededResult = extraRunsConceeded(matches, deliveries);
        // console.log(extraRunsConceededResult);

        // let dotBallResult=dotBall(matches,deliveries);

        /*Fourth Function*/
        let top10EcoBowlersResult = top10EcoBowlers(matches, deliveries);
        // console.log(top10EcoBowlersResult);

        /*Extra function (2)Bowler with most dot balls*/
        // let dotBallsResult=dotBalls(top10EcoBowlersResult);
        

        /*Extra function(3) Most 50s per year*/
        // let most50sResult=most50s(matches,deliveries);
        
        /*Extra function(4) Most 50s per year*/
        // let most100sResult=most100s(matches,deliveries);

        /*Extra function(5) Most 50s per year*/
        let hattrickResult=hattrick(matches,deliveries);


        /////////////////////////////////////////////////////////////////
        // var finalResult = {};
        // (finalResult["matchesPerYear"] = matchesPerYearResult),
        //   (finalResult[
        //     "matchesWonPerTeamPerYear"
        //   ] = matchesWonPerTeamPerYearResult),
        //   (finalResult["extraRunsConceeded"] = extraRunsConceededResult);
        // finalResult["top10EcoBowlers"] = top10EcoBowlersResult;

        // fs.writeFileSync("./public/data.json", JSON.stringify(finalResult));
      });
  });
