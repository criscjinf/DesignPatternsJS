class StepByStepGenerator {
    *[Symbol.iterator]() {
        console.log('Passo um')
        yield

        console.log('Passo dois')
        yield
        console.log('Passo três')
        yield
    }
}

const consStepByStepGenerator = {
    *[Symbol.iterator]() {
        console.log('Passo um')
        yield
        console.log('Passo dois')
        yield
        console.log('Passo três')
        yield
    }
}


module.exports = { consStepByStepGenerator, StepByStepGenerator };
