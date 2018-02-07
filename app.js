var Vehicle = Backbone.Model.extend({
    registrationNum : "",
    urlRoot : "/api/vehicles",
    start : () => {
        console.log('Vehicle has started.')
    }
})

var Car = Vehicle.extend({
    start : () => {
        console.log(`Car with registration ${this.registrationNum} has just started.`)
    }
})

var car = new Car ({
    registrationNum : "XLI887",
    color: 'Blue'
})

car.isValid() ? console.log(car.validationError) : console.log(car)

car.unset('registrationNum')

car.set(car.registrationNum = 'XLI887')

console.log(car)