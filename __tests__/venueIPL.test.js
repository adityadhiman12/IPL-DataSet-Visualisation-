const matchesWonPerTeamPerYear = require("../ipl/venueIPL");

let testMatches = [
  {
    venue: "Holkar"
  },
  {
    venue: "Punjab"
  },
  {
    venue: "India"
  }
];

test("Output", () => {
  expect(venueIPL(testMatches)).toEqual(["Holkar", "Punjab", "India"]);
});

let testMatches2 = [
  {
    venue: "Holkar"
  },
  {
    venue: "Punjab"
  },
  {
    venue: "Haryana"
  },
  {
    venue: "Jaipur"
  }
];

test("Output", () => {
  expect(venueIPL(testMatches2)).toEqual([
    "Holkar",
    "Punjab",
    "Haryana",
    "Jaipur"
  ]);
});
