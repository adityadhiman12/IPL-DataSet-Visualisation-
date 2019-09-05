const matchesWonPerTeamPerYear = require("../ipl/matchesWonPerTeamPerYear");

test("Output of dataset with 1 entry", () => {
    const test =
    [
        {
        season: "2008",
        winner: "Kolkata Knight Riders"
        }
    ]
  expect(
    matchesWonPerTeamPerYear(test)
  ).toEqual({ "2008": { "Kolkata Knight Riders": 1 } });
});

// test("Output of dataset with 2 same entries", () => {
//   expect(
//     matchesWonPerTeamPerYear([
//       {
//         season: "2009",
//         winner: "Kolkata Knight Riders"
//       },
//       {
//         season: "2009",
//         winner: "Delhi Daredevils"
//       }
//     ])
//   ).toEqual({
//     2009: {
//       "Kolkata Knight Riders": 1,
//       "Delhi Daredevils": 1
//     }
//   });
// });

// test("Output of dataset with 3 same entries", () => {
//   expect(
//     matchesPerYear([
//       {
//         id: "111",
//         season: "2009",
//         city: "Mumbai",
//         date: "2008-09-19",
//         team1: "Mumbai Indians",
//         team2: "Kolkata Knight Riders",
//         toss_winner: "Kolkata Knight Riders",
//         toss_decision: "bat",
//         result: "normal",
//         dl_applied: "1",
//         winner: "Kolkata Knight Riders",
//         win_by_runs: "6",
//         win_by_wickets: "0",
//         player_of_match: "DPMD Jayawardene",
//         venue: "Feroz Shah Kotla",
//         umpire1: "AV Jayaprakash",
//         umpire2: "RE Koertzen",
//         umpire3: ""
//       },
//       {
//         id: "110",
//         season: "2009",
//         city: "Coimbatore",
//         date: "2008-05-17",
//         team1: "Delhi Daredevils",
//         team2: "Kolkata Knight Riders",
//         toss_winner: "Delhi Daredevils",
//         toss_decision: "bat",
//         result: "normal",
//         dl_applied: "1",
//         winner: "Kolkata Knight Riders",
//         win_by_runs: "6",
//         win_by_wickets: "0",
//         player_of_match: "DPMD Jayawardene",
//         venue: "Feroz Shah Kotla",
//         umpire1: "Lomesh",
//         umpire2: "Amough",
//         umpire3: ""
//       },
//       {
//         id: "112",
//         season: "2009",
//         city: "Delhi",
//         date: "2008-02-22",
//         team1: "Rajasthan Royals",
//         team2: "Kolkata Knight Riders",
//         toss_winner: "Rajasthan Royals",
//         toss_decision: "bat",
//         result: "normal",
//         dl_applied: "1",
//         winner: "Kolkata Knight Riders",
//         win_by_runs: "42",
//         win_by_wickets: "0",
//         player_of_match: "Sachin Tendhulkar",
//         venue: "Feroz Shah Kotla",
//         umpire1: "AV Jayaprakash",
//         umpire2: "RE Koertzen",
//         umpire3: ""
//       }
//     ])
//   ).toEqual({
//     2009: {
//       "Kolkata Knight Riders": 3
//     }
//   });
// });

// test("Output of empty dataset", () => {
//     expect(matchesPerYear([])).toBe(0);
//   });
