import {ManType} from './05.test';
import {govBuildingsType, houseType} from '../02/02_02';


export function teachPeople(man: ManType) {

    return {
        stack: ["CSS", 'html', 'js', 'tdd', 'react'],
        firstName: man.name.split(" ")[0],
        secondName: man.name.split(" ")[1],
        age: man.age
    }


}



export function getStreetsTitles(govBuildings: Array<govBuildingsType>){
    return govBuildings.map(building => building.address.street.title)
}

export function createGreetMessage(houses: Array<houseType>){
    return houses.map(house => `Hello guys from ${house.address.street.title}`)
}