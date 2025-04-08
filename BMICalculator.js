//Function calculates BMI. Formula = Weight / Height Squared. Note: BMI is Rounded up not down.
const BMICalculator = (weight, height) => {
    height /= 100;
    let BMI = Math.ceil((weight/(height*height)));
    return BMI;
}

export default BMICalculator;