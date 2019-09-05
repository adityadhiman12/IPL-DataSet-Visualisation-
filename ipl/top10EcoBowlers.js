let i;
const obj = [];
const isYear = {};
function top10EcoBowlers(matches, deliveries) {
  matches.map(function(match) {
    if (match.season === "2015") {
      const matchId = match.id;
      isYear[matchId] = true;
    }
  });
  const bowlerNames = [];
  deliveries.map(function(delivery) {
    const matchId = delivery.match_id;
    if (isYear[matchId] === true) {
      const bowlerName = delivery.bowler;
      const runs = parseInt(delivery.total_runs, 10);
      if (bowlerName in obj) {
        obj[bowlerName].run += runs;
        obj[bowlerName].ball += 1;
      } else {
        bowlerNames.push(bowlerName);
        obj[bowlerName] = {};
        obj[bowlerName].run = runs;
        obj[bowlerName].ball = 1;
        obj[bowlerName].eco = 0;
      }
    }
  });
  for (i = 0; i < bowlerNames.length; i += 1) {
    const name = bowlerNames[i];
    obj[name].eco = Number((obj[name].run / obj[name].ball) * 6).toFixed(2);
    delete obj[name].run;
    delete obj[name].ball;
  }

  const result = Object.keys(obj)
    .map(o => ({ key: o, value: obj[o] }))
    .sort((obj1, obj2) => obj1.value.eco - obj2.value.eco);
  return result.slice(0, 10);
}

module.exports = top10EcoBowlers;
