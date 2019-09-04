const csv=require('csvtojson')
const csvFilePath='./IPL-dataset/matches.csv'
const csvFilePath_2='./IPL-dataset/deliveries.csv'
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    
})