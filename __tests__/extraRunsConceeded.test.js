const extraRunsConceeded=require("../ipl/extraRunsConceeded.js");
let testMatches = [
    {
      id: "95",
      season: "2008",
      city: "Kolkata",
      date: "2008-05-13",
      team1: "Kolkata Knight Riders",
      team2: "Delhi Daredevils",
      toss_winner: "Kolkata Knight Riders",
      toss_decision: "bat",
      result: "normal",
      dl_applied: "0",
      winner: "Kolkata Knight Riders",
      win_by_runs: "23",
      win_by_wickets: "0",
      player_of_match: "Shoaib Akhtar",
      venue: "Eden Gardens",
      umpire1: "Asad Rauf",
      umpire2: "IL Howell",
      umpire3: ""
    },
    {
      id: "96",
      season: "2008",
      city: "Mumbai",
      date: "2008-05-14",
      team1: "Chennai Super Kings",
      team2: "Mumbai Indians",
      toss_winner: "Mumbai Indians",
      toss_decision: "field",
      result: "normal",
      dl_applied: "0",
      winner: "Mumbai Indians",
      win_by_runs: "0",
      win_by_wickets: "9",
      player_of_match: "ST Jayasuriya",
      venue: "Wankhede Stadium",
      umpire1: "BR Doctrove",
      umpire2: "AM Saheba",
      umpire3: ""
    },
    {
      id: "97",
      season: "2008",
      city: "Chandigarh",
      date: "2008-05-28",
      team1: "Kings XI Punjab",
      team2: "Rajasthan Royals",
      toss_winner: "Rajasthan Royals",
      toss_decision: "field",
      result: "normal",
      dl_applied: "0",
      winner: "Kings XI Punjab",
      win_by_runs: "41",
      win_by_wickets: "0",
      player_of_match: "SE Marsh",
      venue: "Punjab Cricket Association Stadium, Mohali",
      umpire1: "SJ Davis",
      umpire2: "K Hariharan",
      umpire3: ""
    },
    {
      id: "98",
      season: "2008",
      city: "Delhi",
      date: "2008-05-15",
      team1: "Delhi Daredevils",
      team2: "Deccan Chargers",
      toss_winner: "Deccan Chargers",
      toss_decision: "field",
      result: "normal",
      dl_applied: "0",
      winner: "Delhi Daredevils",
      win_by_runs: "12",
      win_by_wickets: "0",
      player_of_match: "A Mishra",
      venue: "Feroz Shah Kotla",
      umpire1: "BG Jerling",
      umpire2: "GA Pratapkumar",
      umpire3: ""
    },
    {
      id: "99",
      season: "2008",
      city: "Mumbai",
      date: "2008-05-16",
      team1: "Kolkata Knight Riders",
      team2: "Mumbai Indians",
      toss_winner: "Mumbai Indians",
      toss_decision: "field",
      result: "normal",
      dl_applied: "0",
      winner: "Mumbai Indians",
      win_by_runs: "0",
      win_by_wickets: "8",
      player_of_match: "SM Pollock",
      venue: "Wankhede Stadium",
      umpire1: "BR Doctrove",
      umpire2: "DJ Harper",
      umpire3: ""
    },
    {
      id: "100",
      season: "2008",
      city: "Delhi",
      date: "2008-05-17",
      team1: "Delhi Daredevils",
      team2: "Kings XI Punjab",
      toss_winner: "Delhi Daredevils",
      toss_decision: "bat",
      result: "normal",
      dl_applied: "1",
      winner: "Kings XI Punjab",
      win_by_runs: "6",
      win_by_wickets: "0",
      player_of_match: "DPMD Jayawardene",
      venue: "Feroz Shah Kotla",
      umpire1: "AV Jayaprakash",
      umpire2: "RE Koertzen",
      umpire3: ""
    }
  ];
  

  let testDeliveries=[{
      
  }]
  test("Output", () => {
    expect(matchesWonPerTeamPerYear(testMatch)).toEqual({
      "2008":  {
             "Delhi Daredevils": 1,
             "Kings XI Punjab": 2,
             "Mumbai Indians": 2,
            }
    });
  });