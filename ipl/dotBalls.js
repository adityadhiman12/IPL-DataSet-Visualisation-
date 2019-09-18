function dotBalls(top10EcoBowlersResult) {
  var sortable = [];
  for (var key in top10EcoBowlersResult)
    if (top10EcoBowlersResult.hasOwnProperty(key))
      sortable.push([key, top10EcoBowlersResult[key]]);
  sortable.sort(function(a, b) {
    return a[1] - b[1];
  });
  console.log(sortable);
  console.log(sortable[0][0]);
}

module.exports=dotBalls;
