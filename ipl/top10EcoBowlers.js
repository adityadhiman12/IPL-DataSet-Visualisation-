let i;
let iterator = 0;
const ecoBowlers = [];
const isYear = {};
function top10EcoBowlers(matches, deliveries) {
  matches.map(function(match) {
    if (match.season === "2015") {
      const matchId = match.id;
      isYear[matchId] = true;
    } else {
      return 0;
    }
  });
  const bowlerNames = [];
  deliveries.map(function(delivery) {
    const matchId = delivery.match_id;
    if (isYear[matchId] === true) {
      const bowlerName = delivery.bowler;
      const runs = parseInt(delivery.total_runs, 10);
      if (bowlerName in ecoBowlers) {
        ecoBowlers[bowlerName].run += runs;
        ecoBowlers[bowlerName].ball += 1;
      } else {
        bowlerNames.push(bowlerName);
        ecoBowlers[bowlerName] = {};
        ecoBowlers[bowlerName].run = runs;
        ecoBowlers[bowlerName].ball = 1;
        ecoBowlers[bowlerName].eco = 0;
      }
    }
  });
  for (i = 0; i < bowlerNames.length; i += 1) {
    const name = bowlerNames[i];
    ecoBowlers[name].eco = Number(
      (ecoBowlers[name].run / ecoBowlers[name].ball) * 6
    ).toFixed(2);
    delete ecoBowlers[name].run;
    delete ecoBowlers[name].ball;
  }

  const result = Object.keys(ecoBowlers)
    .map(o => ({ key: o, value: ecoBowlers[o] }))
    .sort((obj1, obj2) => obj1.value.eco - obj2.value.eco);
  let x = {};
  x = result.map(m => ({ [m.key]: parseFloat(result[iterator++].value.eco) }));
  x = x.slice(0, 10);
  let returnValue = {};
  Array.prototype.forEach.call(x, function(element) {
    var keys = Object.keys(element);
    returnValue[keys[0]] = element[keys[0]];
  });
  return returnValue;
}
module.exports = top10EcoBowlers;
