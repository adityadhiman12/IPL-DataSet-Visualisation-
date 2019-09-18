const top10EcoBowlers = require("../ipl/top10EcoBowlers");

let testMatches = [
  {
    season: "2015",
    id: "6"
  }
];

let testDeliveries = [

  {
    match_id: "6",
    bowler: "aditya",
    total_runs: "101"
  }
];

test("Output", () => {
  expect(top10EcoBowlers(testMatches, testDeliveries)).toEqual({
    aditya: 606
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
