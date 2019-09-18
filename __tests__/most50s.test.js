const most50s = require("../ipl/most50s");

let testMatches = [
  {
    season: "2015",
    id: "6"
  }
];

let testDeliveries = [

  {
    match_id: "6",
    batsman: "aditya",
    batsman_runs: "100"
  }
];

test("Output", () => {
  expect(most50s(testMatches, testDeliveries)).toEqual({
    '2017': 
   { matchId: 
      [ '6'],
      'aditya': { runs: 2 }}
  });
});

let testMatches2 = [
    {
      season: "2010",
      id: "4"
    }
  ];
  
  let testDeliveries2 = [
  
    {
      match_id: "4",
      batsman: "Shikar",
      batsman_runs: "500"
    }
  ];
  
  test("Output", () => {
    expect(most50s(testMatches2, testDeliveries2)).toEqual({
      '2010': 
     { matchId: 
        [ '4'],
        'aditya': { runs: 50 }}
    });
  });