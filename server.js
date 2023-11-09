const _ = require('lodash')

function addingMac(a, b) {
    return a +b
}

console.log(addingMac(3, 5))

const studs = [
    {id: 1, name: 'Ahmed Sodiq'},
    {id: 2, name: 'Dominion Alabi'},
    {id:3, name: "Treasue Aiyedun"}
]

console.log(_.pick(studs[0], ['name']));