/*Second Function*/
function matchesWonPerTeamPerYear(matches) {
    var finalResult = {};
    matches.map(function(match) {
      const year=match.season;
      if (year in finalResult) {
        const winner=match.winner;
        if (winner in finalResult[year]) {
          finalResult[year][winner] =finalResult[year][winner]+1;
        } else {
          finalResult[year][winner] = 1;
        }
      } else {
        finalResult[year] = {};
      }
    });

    return finalResult;
  }

// function matchesWonPerTeamPerYear(matches) {
//   const finalResult = {};
//   matches.map(function(match) {
//     const winner = match.winner;
//     const year = match.season;
//     if (year in finalResult) {
//       if (finalResult[year][winner] === undefined) {
//         finalResult[year][winner] = 1;
//       } else {
//         finalResult[year][winner]++;
//       }
//     } else {
//       finalResult[year] = {};
//       finalResult[year][winner] = 1;
//     }
//     return finalResult;
//   });
//}
module.exports = matchesWonPerTeamPerYear;
