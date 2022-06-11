import {cityType} from '../02/02_02';
import {addMoneyToBudget, repairHouse, toFireStaff, toHireStaff} from './03';

let city: cityType;

// beforeEach(()=>{
//     city = {
//         title: "New York",
//         houses: [
//             {builtAt:2012, repaired: false, address:{number:100, street:{title:"White Street"}}},
//             {builtAt:2000, repaired: false, address:{number:100, street:{title:"Happy Street"}}},
//             {builtAt:2020, repaired: false, address:{number:101, street:{title:"Happy Street"}}}
//         ],
//         governmentBuildings: [
//             {type: "HOSPITAL", budget: 200000, staffCount:200, address:{street: {title: "Central Str"}}},
//             {type: "FIRE-STATION", budget: 500000, staffCount:1000, address:{street: {title: "South Str"}}}
//         ],
//         citizensNumber: 1000000
//     }
// })


test.skip("Budget should be changed for HOSPITAL", ()=>{
    addMoneyToBudget(city.governmentBuildings[0], 100000)

    expect(city.governmentBuildings[0].budget).toBe(300000)
})


test.skip("Budget should be changed for FIRE-STATION", ()=>{
    addMoneyToBudget(city.governmentBuildings[1], -100000)

    expect(city.governmentBuildings[1].budget).toBe(400000)
})


test.skip("House Should Be Repaired", ()=>{
    repairHouse(city.houses[1])

    expect(city.houses[1].repaired).toBe(true)
})

test.skip("staff should be fired", ()=>{
    toFireStaff(city.governmentBuildings[0], 20)

    expect(city.governmentBuildings[0].staffCount).toBe(180)
})


test.skip("staff should be hired", ()=>{
    toHireStaff(city.governmentBuildings[0], 20)
    toHireStaff(city.governmentBuildings[1], 20)

    expect(city.governmentBuildings[0].staffCount).toBe(220)
    expect(city.governmentBuildings[1].staffCount).toBe(1020)
})