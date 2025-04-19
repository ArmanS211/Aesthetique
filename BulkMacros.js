/*Function Calculates how many calories one has to eat in a bulk. Function takes TDEE then depending on bulk level (Level 0 Bulk adds 500 calories, Level 1 Adds 1000 calories).
This function returns an array with a) How many calories they have to eat b) Their Daily Protein Intake c) Their Daily Carb Intake d) Their Daily Fat Intake. All Macros are in grams.*/
const BulkMacros = (TDEE, bulkLevel) => {

    let bulkCalories, protein, carbs, fats = 0;
    const macroCalc = (bulkCalories) => {
        protein = Math.ceil((bulkCalories*0.3)/4)+"G Protein ";
        carbs = Math.ceil((bulkCalories*0.35)/4) + "G Carbs " ;
        fats =  Math.ceil((bulkCalories*0.35)/9) + "G Fats ";
    }
    if (bulkLevel === 0){
        bulkCalories = (TDEE + 500);
        macroCalc(bulkCalories);
    }else if (bulkLevel === 1){
        bulkCalories = (TDEE + 1000);
        macroCalc(bulkCalories);
    }
    let calorieDisplay = bulkCalories + " Calories";
    return [calorieDisplay, protein,carbs,fats];
}
export default BulkMacros;