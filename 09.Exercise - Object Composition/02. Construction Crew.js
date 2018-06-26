function constructions(workers) {
    if (workers.handsShaking){
        workers.bloodAlcoholLevel += 0.1 * workers.weight * workers.experience
        workers.handsShaking = false
    }
    return workers
}

console.log(constructions({
    weight: 80,
    experience: 1,
    bloodAlcoholLevel: 0,
    handsShaking: true
}));