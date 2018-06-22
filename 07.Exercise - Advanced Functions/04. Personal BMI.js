function persons(name, age, weight, height) {
    let obj = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: Math.round(weight / Math.pow(height / 100, 2)),
    }
    obj.status = obj.BMI < 18.5 ? "underweight" : obj.BMI < 25 ? "normal" :
        obj.BMI < 30 ? "overweight" : "obese"

    if (obj.status === 'obese'){
        obj.recommendation = 'admission required'
    }
    return obj
}

console.log(persons('Honey Boo Boo', 9, 57, 137));
//console.log(persons('Peter', 29, 75, 182));