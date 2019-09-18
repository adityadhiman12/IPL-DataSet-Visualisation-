let i;
let iterator = 0;
const hattrickBowlers = [];
var isYear = {};
function hattrick(matches, deliveries) {
  isYear = matches.reduce((acc, match) => {
    if (match.season === "2017") {
      const matchId = match.id;
      acc[matchId] = true;
    }
    return acc;
  }, {});
  // console.log(isYear);
  deliveries.map(function(delivery) {
    if (isYear[delivery.match_id] === true) {
      for (let i = 1; i <= 6; i++) {
        if (
          delivery.ball == i &&
          (delivery.dismissal_kind === "caught" ||
            delivery.dismissal_kind === "caught and bowled" ||
            delivery.dismissal_kind === "bowled" ||
            delivery.dismissal_kind === "run out" ||
            delivery.dismissal_kind === "stumped")
        ) {
          
          iterator++;
    
          hattrickFinder(i + 1);
        }
      }

      function hattrickFinder(i) {
        if (iterator === 3) {
          console.log(delivery.bowler, " ");
        //   iterator=0;
        } else if (
          delivery.ball == i &&
          (delivery.dismissal_kind === "caught" ||
            delivery.dismissal_kind === "caught and bowled" ||
            delivery.dismissal_kind === "bowled" ||
            delivery.dismissal_kind === "run out" ||
            delivery.dismissal_kind === "stumped")
        ) {
            
          hattrickFinder(i + 1);
        }
      }
    }
  });
}

module.exports = hattrick;
