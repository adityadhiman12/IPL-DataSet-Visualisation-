const functions = require('../ipl/MatchesPerYear.js');

test('Output of empty' , () => {
   expect(functions([])).toBe(0);
});

test('Output', () => {
   expect(functions([{
       id: '110',
       season: '2008',
       city: 'Coimbatore',
       date: '2008-05-17',
       team1: 'Delhi Daredevils',
       team2: 'Kolkata Knight Riders',
       toss_winner: 'Delhi Daredevils',
       toss_decision: 'bat',
       result: 'normal',
       dl_applied: '1',
       winner: 'Kolkata Knight Riders',
       win_by_runs: '6',
       win_by_wickets: '0',
       player_of_match: 'DPMD Jayawardene',
       venue: 'Feroz Shah Kotla',
       umpire1: 'AV Jayaprakash',
       umpire2: 'RE Koertzen',
       umpire3: ''
     }])).toEqual({2008: 1})
});

