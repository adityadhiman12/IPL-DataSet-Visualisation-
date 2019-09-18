const most100s = require("../ipl/most100s");

let matches = [
  {
    season: "2015",
    id: "6"
  }
];

let deliveries = [

  {
    match_id: "6",
    batsman: "aditya",
    batsman_runs: "100"
  },
  {
    match_id: "7",
    batsman: "aditya D",
    batsman_runs: "100"
  },{
    match_id: "6",
    batsman: "aditya Dhiman",
    batsman_runs: "150"
  }
];

test("Output", () => {
  expect(most50s(testMatches, testDeliveries)).toEqual({
    '2015': 
   { matchId: 
      [ '6'],
      'aditya': { runs: 50 }}
  });
});

let matches2 = [
    {
      season: "2010",
      id: "4"
    }
  ];
  
  let deliveries2 = [
  
    {
      match_id: "44",
      batsman: "Shikar",
      batsman_runs: "500"
    },
    {
        match_id: "4",
        batsman: "Virat",
        batsman_runs: "600"
      },
      {
        match_id: "4",
        batsman: "Shikar",
        batsman_runs: "0"
      }
  ];
  
  test("Output", () => {
    expect(most50s(matches2, deliveries2)).toEqual({
      '2010': 
     { matchId: 
        [ '4'],
        'aditya': { runs: 12 }}
    });
  });