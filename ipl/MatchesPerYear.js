/*First Function*/
function MatchPerYear(jsonObj){
    if(jsonObj.length===0)
    {
    return 0;
    }
    var MatchPerYear={};
    jsonObj.map(function(match){
    if(match.season in MatchPerYear){
    MatchPerYear[match.season]+=1;
    }
    else
    MatchPerYear[match.season]=1;
    })
    return MatchPerYear;
    
    }
    module.exports=MatchPerYear;