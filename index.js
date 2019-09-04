const csv=require('csvtojson')
const csvFilePath='./IPL-dataset/deliveries.csv'
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    
})