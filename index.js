const csv=require('csvtojson')
const csvFilePath='./IPL-dataset/matches.csv'
const MatchesPerYear=require('./ipl/matchesPerYear')

csv()
.fromFile(csvFilePath)
.then((Matches)=>{
    /*First Function*/
let matchesPerYearResult = MatchesPerYear(Matches);
console.log(matchesPerYearResult)

})

