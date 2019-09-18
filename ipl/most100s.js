function most100s(matches, deliveries) {
  let most100s = {};
  most100s = matches.reduce((result, match) => {
    if (match.season in result) {
      result[match.season].matchId.push(match.id);
    } else {
      result[match.season] = {};
      result[match.season].matchId = [];
    }
    return result;
  }, {});
  const keysMost100s = Object.keys(most100s).sort();

  deliveries.map(function(delivery) {
    for (let i = 0; i < keysMost100s.length; ++i) {
      if (most100s[keysMost100s[i]].matchId.includes(delivery.match_id)) {
        if (delivery.batsman in most100s[keysMost100s[i]]) {
          let run = parseInt(delivery.batsman_runs, 10);
          most100s[keysMost100s[i]][delivery.batsman].runs += run / 50;
        } else {
          most100s[keysMost100s[i]][delivery.batsman] = {};
          most100s[keysMost100s[i]][delivery.batsman].runs = 0;
        }

        break;
      }
    }
  });
  Object.values(most100s).sort();

  console.log(most100s);
}
module.exports = most100s;
