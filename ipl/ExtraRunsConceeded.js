/*Third Function*/
function extraRunsConceeded(matches, deliveries) {
  const teamWithExtraRuns = {};
  const isYear = {};
  matches.map(function(match) {
    if (match.season === "2016") {
      const matchId = match.id;
      isYear[matchId] = true;
    }
  });
  deliveries.map(function(delivery) {
    const matchId = delivery.match_id;
    if (isYear[matchId] === true) {
      const bowlingTeam = delivery.bowling_team;
      const extraRuns = parseInt(delivery.extra_runs, 10);
      if (bowlingTeam in teamWithExtraRuns) {
        teamWithExtraRuns[bowlingTeam] += extraRuns;
      } else {
        teamWithExtraRuns[bowlingTeam] = extraRuns;
      }
    }
  });
  return teamWithExtraRuns;
}

module.exports = extraRunsConceeded;
