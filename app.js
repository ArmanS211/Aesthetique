import TDEECalculator from "./TDEECalculator.js";
import BMICalculator from "./BMICalculator.js";
import BulkMacros from "./BulkMacros.js";

console.log(TDEECalculator(130,175,23,'Moderately Active'));
console.log(BMICalculator(100,179));
let bulkArray = BulkMacros(2000,1);
for (let i=0; i < bulkArray.length; i++){
    console.log(bulkArray[i]);
}