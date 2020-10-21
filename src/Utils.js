import { evaluate } from "mathjs";

export default function evaluateExp(sExpression) { 
  let sResult;
  
  try {
    sResult = evaluate(sExpression.replace("x", "*"));
    console.log("Evaluating expression:", sExpression, "=", sResult)
    return evaluate(sResult) || "n/a" ; 
  } 
  catch(e) {
    console.log("MathJS error:", e);
    return "Error";
  }

}