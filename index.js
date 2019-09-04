const csvFilePath='./IPL-dataset/deliveries.csv'
const csv=require('csvtojson')
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    
})