

/*First Function*/
function matchPerYear(matches) {
  if (matches.length === 0) {
    return 0;
  }
  var matchPerYear = {};
  matches.map(function(match) {
    if (match.season in matchPerYear) {
      matchPerYear[match.season] += 1;
    } else {
      matchPerYear[match.season] = 1;
    }
  });

  return matchPerYear;
}
module.exports = matchPerYear;
