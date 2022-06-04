import {cityType, govBuildingsType} from '../02/02_02';


export function demolishHouseOnTheStreet(city: cityType, street: string){
    city.houses = city.houses.filter(house => house.address.street.title !== street)
}

export  function get1(buildings: Array<govBuildingsType>, staff: number){
    return buildings.filter(building => building.staffCount > staff)
}