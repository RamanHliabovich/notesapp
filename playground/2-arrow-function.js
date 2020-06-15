// const square = function (x) {
//     return x*x
// }

// const square = (x) => {
//     return x*x
// }

// const square = (x) => x * x

// console.log(square(2))

const event = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList() {
        this.guestList.forEach((guest) => {
            console.log(guest + 'is attending this ' + this.name)
        })
    }
}

event.printGuestList()