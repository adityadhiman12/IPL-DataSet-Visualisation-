let finalResult = {};

function most50s(matches, deliveries) {
  finalResult = matches.reduce((result, match) => {
    if (match.season in result) {
      result[match.season].matchId.push(match.id);
    } else {
      result[match.season] = {};
      result[match.season].matchId = [];
    }
    return result;
  }, {});
  // console.log(finalResult);

  let batsmans = {};
  const keysOfResult = Object.keys(finalResult).sort();
  // console.log(keysOfResult);

  deliveries.map(function(delivery) {
    for (let i = 0; i < keysOfResult.length; ++i) {
      if (finalResult[keysOfResult[i]].matchId.includes(delivery.match_id)) {
        if (delivery.batsman in finalResult[keysOfResult[i]]) {
          let run = parseInt(delivery.batsman_runs, 10);
          finalResult[keysOfResult[i]][delivery.batsman].runs += run / 50;
        } else {
          finalResult[keysOfResult[i]][delivery.batsman] = {};
          finalResult[keysOfResult[i]][delivery.batsman].runs = 0;
        }

        break;
      }
    }
  });

  Object.values(finalResult).sort();
  console.log(finalResult);
}
module.exports = most50s;
