function carFactory(cars) {
    let modify = {}
    modify.model = cars.model
    let engine
    if (cars.power <= 90){
        engine = {
            power: 90,
            volume: 1800
        }
    }else if (cars.power <= 120){
        engine = {
            power: 120,
            volume: 2400
        }
    }else {
        engine = {
            power: 200,
            volume: 3500
        }
    }
    modify.engine = engine
    modify.carriage = {
        type: cars.carriage,
        color: cars.color
    }
    let wheelsize = []

    if (cars.wheelsize % 2 === 0){
        cars.wheelsize--
    }

    for (let i = 0; i < 4; i++) {
        wheelsize.push(cars.wheelsize)
    }
    modify.wheels = wheelsize
    return modify
}
console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));