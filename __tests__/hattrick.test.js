const hattrick= require("../ipl/hattrick");

let testMatches = [
  {
    season: "2017",
    id: "6"
  }
];

let testDeliveries = [

  {
    match_id: "6",
    bowler: "aditya",
    ball="1",
    dismissal_kind: "bowled"
  },{
    match_id: "6",
    bowler: "aditya",
    ball="2",
    dismissal_kind: "caught"
  },{
    match_id: "6",
    bowler: "aditya",
    ball="3",
    dismissal_kind: "caught and bowled"
  }
];

test("Output", () => {
  expect(hattrick(testMatches, testDeliveries)).toEqual({
    aditya
  });
});



let testMatches2 = [
    {
      season: "2017",
      id: "6"
    }
  ];
  
  let testDeliveries = [
  
    {
      match_id: "6",
      bowler: "aditya",
      ball="1",
      dismissal_kind: "bowled"
    },{
      match_id: "6",
      bowler: "aditya",
      ball="4",
      dismissal_kind: "caught"
    },{
      match_id: "6",
      bowler: "aditya",
      ball="3",
      dismissal_kind: "caught and bowled"
    },{
        match_id: "6",
        bowler: "aditya",
        ball="5",
        dismissal_kind: "caught and bowled"
      }
  ];
  
  test("Output", () => {
    expect(hattrick(testMatches, testDeliveries)).toEqual({
      aditya
    });
  });

