import { evaluate } from "mathjs";

export default function evaluateExp(sExpression) { 
  try {
    console.log("Evaluating expression:", sExpression, "=", evaluate(sExpression))
    return evaluate(sExpression)
  } 
  catch(e) {
    // console.log("MathJS error:", e);
    return "Error";
  }

}