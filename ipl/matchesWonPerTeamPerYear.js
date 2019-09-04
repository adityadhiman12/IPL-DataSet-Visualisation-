/*Second Function*/
function matchesWonPerTeamPerYear(matches) {
    var finalResult = {};
    matches.map(function(match) {
      if (match.season in finalResult) {
        if (match.winner in finalResult[match.season]) {
          finalResult[match.season][match.winner] += 1;
        } else {
          finalResult[match.season][match.winner] = 1;
        }
      } else {
        finalResult[match.season] = {};
      }
    });
  
    console.log(finalResult);
  }
  module.exports=matchesWonPerTeamPerYear;