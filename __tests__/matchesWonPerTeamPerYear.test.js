const matchesWonPerTeamPerYear = require("../ipl/matchesWonPerTeamPerYear");

let testMatches = [
  {
    season: "2008",
    winner: "Kolkata Knight Riders"
  },
  {
    season: "2008",
    winner: "Kings XI Punjab"
  },
  {
    season: "2008",
    winner: "Kings XI Punjab"
  }
];

test("Output", () => {
  expect(matchesWonPerTeamPerYear(testMatches)).toEqual({
    "2008": {
      "Kolkata Knight Riders": 1,
      "Kings XI Punjab": 2
    }
  });
});

test("Output of dataset with 2 same entries", () => {
  expect(
    matchesWonPerTeamPerYear([
      {
        season: "2009",
        winner: "Kolkata Knight Riders"
      },
      {
        season: "2009",
        winner: "Delhi Daredevils"
      }
    ])
  ).toEqual({
    2009: {
      "Kolkata Knight Riders": 1,
      "Delhi Daredevils": 1
    }
  });
});

test("Output of dataset with 3 same entries", () => {
  expect(
    matchesWonPerTeamPerYear([
      {
        season: "2009",
        winner: "Kolkata Knight Riders"
      },
      {
        season: "2009",
        winner: "Kolkata Knight Riders"
      },
      {
        season: "2009",
        winner: "Kolkata Knight Riders"
      }
    ])
  ).toEqual({
    2009: {
      "Kolkata Knight Riders": 3
    }
  });
});
