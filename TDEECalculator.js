//Calculates User's Total Daily Energy Expenediture. Formula used is Mifflin-St Jeor and Calorie Count is Rounded Up.
const TDEECalculator = (weight, height, age, activity) => {
    let BMR = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    let activeMultiplier = 0;
    switch (activity){
        case 'Sedentary':
            activeMultiplier = 1.2;
            break; 
        case 'Lightly Active':
            activeMultiplier = 1.375;
            break;
        case 'Moderately Active':
                activeMultiplier = 1.55;
                break;       
        case 'Very Active':
                activeMultiplier = 1.725;
                break;     
        case 'Extra Active':
                activeMultiplier = 1.9;
                break;   
    }
    return Math.ceil((BMR*activeMultiplier));
}
export default TDEECalculator;