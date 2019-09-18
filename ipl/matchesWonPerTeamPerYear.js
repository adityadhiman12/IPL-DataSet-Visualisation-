/*Second Function*/
function matchesWonPerTeamPerYear(matches) {
  const wonMatches = {};
  matches.map(function(match) {
    const year = match.season;
    const winner = match.winner;
    if (year in wonMatches) {
      if (wonMatches[year][winner] === undefined) {
        wonMatches[year][winner] = 1;
      } else {
        wonMatches[year][winner]++;
      }
    } else {
      wonMatches[year] = {};
      wonMatches[year][winner] = 1;
    }
  });
  // 
  return wonMatches;
}
module.exports = matchesWonPerTeamPerYear;
