function truncate(number, digits) {
  var multiplier = Math.pow(10, digits);
  var adjustedNum = number * multiplier;
  var truncatedNum = Math[adjustedNum < 0 ? 'ceil' : 'floor'](adjustedNum);
  
  return truncatedNum/multiplier
}
function calculator() {
  var aVisitor = document.getElementById('a_visitors').value;
  var aConversion = document.getElementById('a_conversions').value;
  var aConversion = aConversion/aVisitor * 100;
  var aConvPct = aConversion/100
  var aResult = document.getElementById('a_rate');
  aResult.innerHTML = truncate(aConversion,2) + "%";
  
  var bVisitor = document.getElementById('b_visitors').value;
  var bConversion = document.getElementById('b_conversions').value;
  var bConversion = bConversion/bVisitor * 100;
  var bConvPct = bConversion/100
  var bResult = document.getElementById('b_rate');
  bResult.innerHTML = truncate(bConversion,2) + "%";
  
  var change = truncate(((bConversion-aConversion)/aConversion)*100,0)
  var pctChange = (bConvPct-aConvPct)/aConvPct
  
  var changeResult = document.getElementById('pct_change')
  changeResult = innerHTML = pctChange
  
  var winningGroup = document.getElementById('Winner')
  var improvement = document.getElementById('improvement')
  
  if(aConversion > bConversion) {
    winningGroup.innerHTML = 'Varation A performed  ' + change*-1 + '% better than Variation B'
  } else if (bConversion > aConversion) {
    winningGroup.innerHTML = 'Varation B performed  ' + change + '% better than Variation A'
  } else {
    winningGroup.innerHTML = 'Varation A and Variation B both converted at ' + aResult + '%'
  }
  
}
document.onload(calculator())