/* Extra function 1*/
function uniqueVenueIPL(matches) {
  var venueIPL = [];
  matches.map(function(match) {
    venueIPL.push(match.venue);

  });
  let uniqueVenueIPL = [...new Set(venueIPL)];
  return uniqueVenueIPL;
}

module.exports = uniqueVenueIPL;
