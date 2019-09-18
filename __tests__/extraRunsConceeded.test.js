const extraRunsConceeded = require("../ipl/extraRunsConceeded");

let testMatches = [
  {
    season: "2016",
    id: "6"
  }
];

let testDeliveries = [

  {
    match_id: "6",
    bowling_team: "aditya",
    extra_runs: "101"
  }
];

test("Output", () => {
  expect(extraRunsConceeded(testMatches, testDeliveries)).toEqual({
    aditya: 101
  });
});

// let testMatches1 = [
//     {
//       season: "2015",
//       id: "1"
//     }
//   ];

// let testDeliveries1 = [
//   {
//     match_id: "1",
//     bowler: "adi",
//     total_runs: "7"
//   }
// ];

// test("Output of second", () => {
//   expect(top10EcoBowlers(testMatches1,testDeliveries1)).toEqual({
//     'adi':42
//   });
// });
