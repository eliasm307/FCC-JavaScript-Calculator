export default function ReplaceTrailingOperator(sExpression) {

  let s = sExpression.trim()

  if (/[/*-+]$/.test(s)) {
    console.log("ReplaceTrailingOperator", "expression:", sExpression, "has a trailing operator")
  }
  else {
    console.log("ReplaceTrailingOperator", "expression:", sExpression, "DOES NOT have a trailing operator")
  }
  
}
