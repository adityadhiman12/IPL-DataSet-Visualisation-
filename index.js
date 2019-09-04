const csv=require('csvtojson')
const csvFilePath='./IPL-dataset/matches.csv'
const matchesPerYear=require('./ipl/matchesPerYear')

csv()
.fromFile(csvFilePath)
.then((matches)=>{
    /*First Function*/
let matchesPerYearResult = MatchesPerYear(matches);
console.log(matchesPerYearResult)

})

