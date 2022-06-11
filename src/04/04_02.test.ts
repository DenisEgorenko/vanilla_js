import {cityType} from '../02/02_02';
import {demolishHouseOnTheStreet, get1} from './04_02';


let city: cityType;

beforeEach(()=>{
    city = {
        title: "New York",
        houses: [
            {id:1, builtAt:2012, repaired: false, address:{number:100, street:{title:"White Street"}}},
            {id:2, builtAt:2000, repaired: false, address:{number:100, street:{title:"Happy Street"}}},
            {id:3, builtAt:2020, repaired: false, address:{number:101, street:{title:"Happy Street"}}}
        ],
        governmentBuildings: [
            {type: "HOSPITAL", budget: 200000, staffCount:200, address:{street: {title: "Central Str"}}},
            {type: "FIRE-STATION", budget: 500000, staffCount:1000, address:{street: {title: "South Str"}}}
        ],
        citizensNumber: 1000000
    }
})



test.skip("House should be destroyed", ()=>{
    demolishHouseOnTheStreet(city, "Happy Street")



    expect(city.houses.length).toBe(1);
    expect(city.houses[0].id).toBe(1)
})


test.skip("buildings with correct staff count", ()=>{
    let buildings = get1(city.governmentBuildings, 500)



    expect(buildings.length).toBe(1);
    expect(buildings[0].type).toBe("FIRE-STATION")
})