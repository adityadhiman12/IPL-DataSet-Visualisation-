const MatchesPerYear=require('./ipl/MatchesPerYear')

const csvFilePath='./IPL-dataset/matches.csv'
const csv=require('csvtojson')
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    /*First Function*/
let matchesPerYearResult = MatchesPerYear(jsonObj);

})

