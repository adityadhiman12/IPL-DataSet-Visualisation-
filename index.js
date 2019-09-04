const csv=require('csvtojson')
const csvFilePath='./IPL-dataset/matches.csv'
const csvFilePath_2='./IPL-dataset/deliveries.csv'
const matchesPerYear=require('./ipl/matchesPerYear')

csv()
.fromFile(csvFilePath)
.then((matches)=>{
    /*First Function*/
let matchesPerYearResult = matchesPerYear(matches);
console.log(matchesPerYearResult)

})

